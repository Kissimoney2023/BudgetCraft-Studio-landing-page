"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/content";
import { isValidEmail, LIMITS, normalizeEmail, sanitizeFirstName } from "@/lib/validation";

type FieldErrors = {
  firstName?: string;
  email?: string;
  consent?: string;
  form?: string;
};

const ENDPOINT = "/.netlify/functions/subscribe";

export function SignupForm() {
  const router = useRouter();

  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  // Honeypot: real people never fill this; bots often do.
  const [website, setWebsite] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting">("idle");
  const [errors, setErrors] = React.useState<FieldErrors>({});

  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const consentRef = React.useRef<HTMLButtonElement>(null);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const cleanName = sanitizeFirstName(firstName);
    if (cleanName.length > LIMITS.firstNameMax) {
      next.firstName = signup.errors.firstNameTooLong;
    }
    const cleanEmail = normalizeEmail(email);
    if (cleanEmail.length === 0) {
      next.email = signup.errors.emailRequired;
    } else if (!isValidEmail(cleanEmail)) {
      next.email = signup.errors.emailInvalid;
    }
    if (!consent) {
      next.consent = signup.errors.consentRequired;
    }
    return next;
  }

  function focusFirstError(next: FieldErrors) {
    if (next.firstName) firstNameRef.current?.focus();
    else if (next.email) emailRef.current?.focus();
    else if (next.consent) consentRef.current?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      focusFirstError(clientErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    let response: Response;
    try {
      response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: sanitizeFirstName(firstName),
          email: normalizeEmail(email),
          consent,
          // Honeypot travels under a plausible field name.
          website,
        }),
      });
    } catch {
      // Network failure — keep the user on the page with an inline message.
      setStatus("idle");
      setErrors({ form: signup.errors.network });
      return;
    }

    let data: {
      ok?: boolean;
      error?: string;
      fields?: Partial<Record<"firstName" | "email" | "consent", string>>;
    } = {};
    try {
      data = await response.json();
    } catch {
      // Ignore parse errors; handled by the ok check below.
    }

    if (response.ok && data.ok) {
      // Client-side navigation to the thank-you page on success.
      router.push("/thank-you");
      return;
    }

    setStatus("idle");
    if (data.fields && Object.keys(data.fields).length > 0) {
      const mapped: FieldErrors = {
        firstName: data.fields.firstName,
        email: data.fields.email,
        consent: data.fields.consent,
      };
      setErrors(mapped);
      focusFirstError(mapped);
      return;
    }
    // Map the server's non-field error codes to a helpful message. Anything
    // unrecognized (including server_misconfigured and kit_error) stays generic
    // so no internal detail is exposed.
    const message =
      data.error === "rate_limited"
        ? signup.errors.rateLimited
        : data.error === "upstream_unreachable"
          ? signup.errors.unreachable
          : signup.errors.generic;
    setErrors({ form: message });
  }

  const isSubmitting = status === "submitting";

  return (
    <section
      id="signup"
      aria-labelledby="signup-heading"
      className="mx-auto max-w-prose scroll-mt-8 px-6 py-12"
    >
      <h2
        id="signup-heading"
        className="font-display text-2xl text-foreground sm:text-3xl"
      >
        {signup.heading}
      </h2>

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
        {/* First name — optional */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="first-name">
            {signup.firstNameLabel}{" "}
            <span className="font-normal text-foreground/70">
              ({signup.firstNameOptional})
            </span>
          </Label>
          <Input
            id="first-name"
            name="first_name"
            ref={firstNameRef}
            type="text"
            autoComplete="given-name"
            maxLength={LIMITS.firstNameMax}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-invalid={errors.firstName ? true : undefined}
            aria-describedby={errors.firstName ? "first-name-error" : undefined}
          />
          {errors.firstName ? (
            <p id="first-name-error" role="alert" className="text-sm text-accent">
              {errors.firstName}
            </p>
          ) : null}
        </div>

        {/* Email — required */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">{signup.emailLabel}</Label>
          <Input
            id="email"
            name="email"
            ref={emailRef}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={LIMITS.emailMax}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="text-sm text-accent">
              {errors.email}
            </p>
          ) : null}
        </div>

        {/* Consent — required */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              ref={consentRef}
              checked={consent}
              onCheckedChange={(value) => setConsent(value === true)}
              required
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-1"
            />
            <Label htmlFor="consent" className="font-normal leading-relaxed">
              {signup.consentLabel}
            </Label>
          </div>
          {errors.consent ? (
            <p id="consent-error" role="alert" className="text-sm text-accent">
              {errors.consent}
            </p>
          ) : null}
        </div>

        {/* Honeypot — visually hidden and removed from the tab order. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        {/* Form-level error (network / generic). */}
        {errors.form ? (
          <p role="alert" className="text-sm text-accent">
            {errors.form}
          </p>
        ) : null}

        <Button type="submit" size="full" disabled={isSubmitting}>
          {isSubmitting ? signup.submitting : signup.submit}
        </Button>

        {/* Polite status region for assistive tech during submission. */}
        <span aria-live="polite" className="sr-only">
          {isSubmitting ? signup.submitting : ""}
        </span>
      </form>
    </section>
  );
}
