import Link from "next/link";

import { footer } from "@/lib/content";

export function Footer() {
  // Rendered on the server; the current year is fixed at request/build time.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-secondary/40">
      <div className="mx-auto flex max-w-prose flex-col gap-4 px-6 py-10">
        <p className="text-lg font-semibold text-foreground">
          {footer.wordmark}
        </p>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {footer.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base text-foreground underline decoration-secondary underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-foreground/80">{footer.copyright(year)}</p>
      </div>
    </footer>
  );
}
