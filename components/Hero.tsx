import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-prose flex-col items-start gap-6 px-6 pb-16 pt-20 sm:pt-24">
      <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
        {hero.heading}
      </h1>
      <p className="text-xl font-medium text-foreground sm:text-2xl">
        {hero.subtitle}
      </p>
      <p className="text-lg text-foreground/90">{hero.supporting}</p>
      <Button asChild size="default">
        {/* CSS scroll-behavior (globals.css) provides the requested smooth
            scroll, and is disabled under prefers-reduced-motion. */}
        <a href="#signup">{hero.cta}</a>
      </Button>
    </section>
  );
}
