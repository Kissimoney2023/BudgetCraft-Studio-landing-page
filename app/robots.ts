import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

/** Generates /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Confirmation and legal-placeholder pages are marked noindex per page;
      // they remain crawlable so links resolve.
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
