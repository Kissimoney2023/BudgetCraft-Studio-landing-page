import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { legal } from "@/lib/content";

/*
 * PLACEHOLDER PAGE — no legal text has been generated.
 *
 * The privacy policy must be written and reviewed against the actual services
 * used (Kit / ConvertKit for email, Netlify for hosting and functions) and
 * against the law applicable to a global audience (for example GDPR/UK GDPR
 * and CCPA). Do not launch with this placeholder in place.
 */

export const metadata: Metadata = {
  title: legal.privacy.title,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto flex max-w-prose flex-col items-start gap-6 px-6 pb-16 pt-20 sm:pt-24">
        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {legal.privacy.title}
        </h1>
        <p className="text-lg text-foreground/90">{legal.privacy.placeholder}</p>
        <Link
          href="/"
          className="text-base text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
