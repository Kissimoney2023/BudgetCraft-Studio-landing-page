import type { Handler, HandlerEvent } from "@netlify/functions";

// Relative import (not the "@/" alias): this file is bundled by Netlify's
// esbuild, which does not read the Next.js path aliases.
import {
  isValidEmail,
  LIMITS,
  normalizeEmail,
  sanitizeFirstName,
} from "../../lib/validation";

/**
 * Kit (formerly ConvertKit) subscribe endpoint.
 *
 * Returns JSON ONLY — never a redirect. The client handles navigation to
 * /thank-you on success. Error responses distinguish validation problems,
 * upstream Kit failures, and network failures, and never expose the API key
 * or raw upstream error text.
 */

type FieldKey = "firstName" | "email" | "consent";

interface SuccessBody {
  ok: true;
}
interface ErrorBody {
  ok: false;
  error:
    | "method_not_allowed"
    | "bad_request"
    | "validation"
    | "rate_limited"
    | "server_misconfigured"
    | "kit_error"
    | "upstream_unreachable";
  fields?: Partial<Record<FieldKey, string>>;
}

const JSON_HEADERS = { "Content-Type": "application/json" } as const;
const MAX_BODY_BYTES = 4 * 1024; // Generous for three small fields.
const KIT_TIMEOUT_MS = 10_000;

// Kit v4 API. This account is authenticated against v4 (api.kit.com/v4) and
// uses API-key auth via the X-Kit-Api-Key header — NOT the legacy v3
// api.convertkit.com endpoint with an api_key body/query parameter.
const KIT_API_BASE = "https://api.kit.com/v4";

// --- In-memory repeat-submission throttle --------------------------------
// This is NOT rate limiting in any meaningful sense. The Map lives in one
// serverless instance's memory: it resets on every cold start and is not
// shared between concurrently running instances, so an attacker spreading
// requests across instances is never counted. All it does is slow down repeat
// submissions that happen to land on the same warm instance within the window.
// The honeypot field is the real protection against automated signups.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function clientIp(event: HandlerEvent): string {
  return (
    event.headers["x-nf-client-connection-ip"] ??
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function json(statusCode: number, body: SuccessBody | ErrorBody) {
  return { statusCode, headers: JSON_HEADERS, body: JSON.stringify(body) };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "method_not_allowed" });
  }

  if (!event.body || event.body.length > MAX_BODY_BYTES) {
    return json(400, { ok: false, error: "bad_request" });
  }

  if (isRateLimited(clientIp(event))) {
    return json(429, { ok: false, error: "rate_limited" });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(event.body) as Record<string, unknown>;
  } catch {
    return json(400, { ok: false, error: "bad_request" });
  }

  // Honeypot: if the hidden "website" field is populated, treat it as a bot and
  // return a benign success without contacting Kit.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return json(200, { ok: true });
  }

  const firstName = sanitizeFirstName(payload.first_name);
  const email = normalizeEmail(payload.email);
  const consent = payload.consent === true;

  const fields: Partial<Record<FieldKey, string>> = {};
  if (firstName.length > LIMITS.firstNameMax) {
    fields.firstName = "Please use a shorter first name.";
  }
  if (!isValidEmail(email)) {
    fields.email = "Please enter a valid email address.";
  }
  if (!consent) {
    fields.consent = "Consent is required to receive the tracker.";
  }
  if (Object.keys(fields).length > 0) {
    return json(400, { ok: false, error: "validation", fields });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    // Configuration problem — log server-side, tell the client nothing specific.
    console.error("subscribe: missing KIT_API_KEY or KIT_FORM_ID");
    return json(500, { ok: false, error: "server_misconfigured" });
  }

  const kitHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Kit-Api-Key": apiKey,
  } as const;

  // One AbortController/timeout budget covers both upstream calls below.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), KIT_TIMEOUT_MS);

  try {
    // 1) Always upsert the subscriber first, with state "active". This is what
    //    makes the opt-in single rather than double: if the subscriber does not
    //    already exist when the form-attach call in step 2 runs, Kit creates
    //    them and sends a confirmation email. Creating them as "active" here
    //    first means every signup takes the same path, whether or not a first
    //    name was given. POST /v4/subscribers is keyed by email address.
    //    first_name is omitted from the body entirely when absent — sending an
    //    empty string would store a blank name for personalization.
    const upsertBody: Record<string, string> = {
      email_address: email,
      state: "active",
    };
    if (firstName) {
      upsertBody.first_name = firstName;
    }
    const upsert = await fetch(`${KIT_API_BASE}/subscribers`, {
      method: "POST",
      headers: kitHeaders,
      body: JSON.stringify(upsertBody),
      signal: controller.signal,
    });
    if (!upsert.ok) {
      console.error(`subscribe: Kit /subscribers responded ${upsert.status}`);
      return json(502, { ok: false, error: "kit_error" });
    }

    // 2) Attach the (now existing, active) subscriber to the form. The
    //    form-subscribers endpoint takes only the email address.
    const attach = await fetch(
      `${KIT_API_BASE}/forms/${encodeURIComponent(formId)}/subscribers`,
      {
        method: "POST",
        headers: kitHeaders,
        body: JSON.stringify({ email_address: email }),
        signal: controller.signal,
      },
    );
    if (!attach.ok) {
      // Log the upstream status server-side; never forward Kit's body/key to the client.
      console.error(`subscribe: Kit form subscribe responded ${attach.status}`);
      return json(502, { ok: false, error: "kit_error" });
    }

    // 3) Apply the lead-magnet tag so a Kit automation can trigger on it.
    //    NON-BLOCKING and OPTIONAL: the subscriber has already been captured on
    //    the form above — the primary business event — so a tag failure is
    //    logged and swallowed rather than failing the signup, and the tag can be
    //    reconciled from the logs. Skipped entirely when KIT_TAG_ID is unset,
    //    so signups keep working before the tag and env var are in place.
    const tagId = process.env.KIT_TAG_ID;
    if (tagId) {
      try {
        const tag = await fetch(
          `${KIT_API_BASE}/tags/${encodeURIComponent(tagId)}/subscribers`,
          {
            method: "POST",
            headers: kitHeaders,
            body: JSON.stringify({ email_address: email }),
            signal: controller.signal,
          },
        );
        if (!tag.ok) {
          console.error(`subscribe: Kit tag apply responded ${tag.status} (non-fatal)`);
        }
      } catch {
        // Swallow tag-side network/timeout errors; the subscriber is safe.
        console.error("subscribe: Kit tag apply failed (non-fatal)");
      }
    }
  } catch {
    // DNS failure, timeout/abort, connection reset, etc.
    return json(502, { ok: false, error: "upstream_unreachable" });
  } finally {
    clearTimeout(timeout);
  }

  return json(200, { ok: true });
};
