import Link from "next/link";

import { Footer } from "@/components/Footer";

type LegalSection = {
  readonly heading: string;
  readonly body: readonly string[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  reviewNotice: string;
  intro: string;
  sections: readonly LegalSection[];
};

/**
 * Renders a legal document (Privacy / Terms) from structured content in
 * lib/content.ts. One h1 (the title), h2 per section — correct heading order
 * for accessibility.
 */
export function LegalPage({
  title,
  lastUpdated,
  reviewNotice,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <main className="mx-auto flex max-w-prose flex-col gap-8 px-6 pb-16 pt-20 sm:pt-24">
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="text-sm text-foreground/70">Last updated: {lastUpdated}</p>
        </div>

        {/* Prominent, non-dismissible reminder that this is a template. */}
        <p
          role="note"
          className="rounded-md border border-secondary bg-muted px-4 py-3 text-base text-foreground"
        >
          {reviewNotice}
        </p>

        <p className="text-lg text-foreground/90">{intro}</p>

        {sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-3">
            <h2 className="font-display text-2xl text-foreground">
              {section.heading}
            </h2>
            {section.body.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

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
