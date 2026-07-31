import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { legal } from "@/lib/content";

/*
 * DRAFT — NOT LEGALLY REVIEWED. Reviewed copy required before launch.
 *
 * The body is standard boilerplate (see lib/content.ts) tailored to an email
 * lead-magnet using Kit and Netlify. It is NOT legal advice. Have it reviewed
 * by a qualified professional against the services actually used and the law
 * applicable to a global audience (for example GDPR/UK GDPR and CCPA), and add
 * real contact details, before relying on it.
 */

export const metadata: Metadata = {
  title: legal.privacy.title,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title={legal.privacy.title}
      lastUpdated={legal.lastUpdated}
      reviewNotice={legal.reviewNotice}
      intro={legal.privacy.intro}
      sections={legal.privacy.sections}
    />
  );
}
