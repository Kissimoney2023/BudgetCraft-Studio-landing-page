import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the file-tracing root to this project so an unrelated parent-directory
  // lockfile doesn't get picked as the workspace root.
  outputFileTracingRoot: projectRoot,
  // The site is almost entirely static content; images are optimized by Next.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
