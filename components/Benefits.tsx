import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-prose px-6 py-12"
    >
      <h2
        id="benefits-heading"
        className="font-display text-2xl text-foreground sm:text-3xl"
      >
        {benefits.heading}
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-4">
        {benefits.items.map((item) => (
          <li
            key={item}
            className="rounded-md bg-muted px-4 py-3 text-lg text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
