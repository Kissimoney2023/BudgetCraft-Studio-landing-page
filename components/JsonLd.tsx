import { faq, site } from "@/lib/content";

/**
 * JSON-LD structured data for the landing page: the organization, the page
 * itself, and the FAQ. Rendered as a single @graph so search engines read it
 * as one connected document.
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.seo.title,
        description: site.seo.description,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Content is static and author-controlled (from lib/content.ts).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
