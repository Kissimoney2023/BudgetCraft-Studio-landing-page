import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { thankYou } from "@/lib/content";

export const metadata: Metadata = {
  title: "You're in",
  description: "Your free spending tracker is on its way.",
  robots: {
    // This confirmation page has no standalone search value.
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <main className="mx-auto flex max-w-prose flex-col items-start gap-6 px-6 pb-16 pt-20 sm:pt-24">
        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {thankYou.heading}
        </h1>
        <div className="flex flex-col gap-4">
          {thankYou.body.map((line) => (
            <p key={line} className="text-lg text-foreground/90">
              {line}
            </p>
          ))}
        </div>
        <Button asChild size="default">
          {/* Static asset in public/ — a plain anchor, not next/link. */}
          <a href="/where-did-my-money-go-print.pdf" download>
            {thankYou.download}
          </a>
        </Button>
        <Button asChild size="default" variant="outline">
          <Link href="/">{thankYou.cta}</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
