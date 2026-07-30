import Image from "next/image";

import { preview } from "@/lib/content";

/**
 * Single portrait preview of the tracker at an 8.27:11 (A4/Letter) ratio.
 *
 * NOTE: /tracker-preview.png is a generated PLACEHOLDER of the correct ratio
 * (see scripts/generate-preview-placeholder.mjs). Replace it with the real
 * one-page tracker artwork before launch.
 */
export function Preview() {
  return (
    <section className="mx-auto max-w-prose px-6 py-8">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-secondary/40 bg-muted">
        <Image
          src={preview.src}
          alt={preview.alt}
          width={preview.aspectWidth}
          height={preview.aspectHeight}
          priority
          sizes="(max-width: 640px) 100vw, 384px"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
