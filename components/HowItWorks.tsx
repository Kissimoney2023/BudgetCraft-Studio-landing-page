import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="mx-auto max-w-prose px-6 py-12"
    >
      <h2
        id="how-it-works-heading"
        className="font-display text-2xl text-foreground sm:text-3xl"
      >
        {howItWorks.heading}
      </h2>
      <ol className="mt-6 flex flex-col gap-5">
        {howItWorks.steps.map((step, index) => (
          <li key={step} className="flex items-baseline gap-4">
            <span
              aria-hidden="true"
              className="font-display text-xl text-accent"
            >
              {index + 1}
            </span>
            <span className="text-lg text-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
