/**
 * Shared, dependency-free input rules used on BOTH the client (SignupForm)
 * and the server (netlify/functions/subscribe.ts) so the two never disagree.
 * Keep this file free of framework imports so it bundles in either runtime.
 */

export const LIMITS = {
  firstNameMax: 80,
  emailMax: 254, // RFC 5321 maximum length of an email address.
} as const;

// Pragmatic address check: one @, a dotted domain, no spaces. Deliberately not
// trying to fully implement RFC 5322 — Kit performs the authoritative check.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Trim and collapse a name; returns "" when nothing usable remains. */
export function sanitizeFirstName(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.replace(/\s+/g, " ").trim().slice(0, LIMITS.firstNameMax);
}

/** Lower-case and trim an email for consistent comparison and storage. */
export function normalizeEmail(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().toLowerCase();
}

export function isValidFirstName(name: string): boolean {
  return name.length <= LIMITS.firstNameMax;
}

export function isValidEmail(email: string): boolean {
  return email.length > 0 && email.length <= LIMITS.emailMax && EMAIL_REGEX.test(email);
}
