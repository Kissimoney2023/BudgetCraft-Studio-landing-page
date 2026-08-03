import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { legal } from "@/lib/content";

/*
 * DRAFT — NOT LEGALLY REVIEWED. Reviewed copy required before launch.
 *
 * The body is standard boilerplate (see lib/content.ts) tailored to a free
 * lead-magnet using Kit and Netlify. It is NOT legal advice. Have it reviewed
 * by a qualified professional, set the governing-law jurisdiction, and add real
 * contact details, before relying on it.
 */

export const metadata: Metadata = {
  title: legal.terms.title,
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title={legal.terms.title}
      lastUpdated={legal.lastUpdated}
      reviewNotice={legal.reviewNotice}
      intro={legal.terms.intro}
      sections={legal.terms.sections}
    />
  );
}
