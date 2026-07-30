import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

/** Generates /sitemap.xml. Only publicly indexable pages are listed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
