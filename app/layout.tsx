import type { Metadata, Viewport } from "next";
import { Prata, Work_Sans } from "next/font/google";

import { site } from "@/lib/content";
import "./globals.css";

// Prata — display only (h1 and major section headings).
const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-prata",
});

// Work Sans — everything else.
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s · ${site.name}`,
  },
  description: site.seo.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    images: [
      {
        url: site.seo.ogImagePath,
        width: 827,
        height: 1100,
        alt: "Preview of the one-page Where Did My Money Go spending tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // Browser-chrome color for mobile address bars; mirrors the --background
  // token. This is browser metadata, not component styling.
  themeColor: "#faf6f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${prata.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
