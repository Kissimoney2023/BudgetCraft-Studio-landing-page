import type { Config } from "tailwindcss";

/**
 * Brand tokens are defined ONCE as CSS custom properties in app/globals.css
 * (the single place a raw hex value is allowed to live). This config only maps
 * those variables onto semantic Tailwind names, so components reference
 * `bg-accent`, `text-foreground`, `border-secondary`, etc. — never a hex.
 *
 * Palette rules encoded by these names (see the specification):
 *  - background  cream   page background
 *  - foreground  ink     all body and heading text
 *  - accent      terracotta  buttons, rules, small emphasis; safe on cream at 5.3:1
 *  - muted       warm sand   FILLS ONLY — never used for text (contrast 1.1:1)
 *  - secondary   olive   dividers and small decorative elements
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "var(--accent)",
          // Cream text on terracotta shares the same 5.3:1 ratio (contrast is symmetric).
          foreground: "var(--background)",
        },
        muted: "var(--muted)",
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--background)",
        },
        // shadcn/ui structural tokens, mapped onto the brand palette.
        border: "var(--secondary)",
        input: "var(--secondary)",
        ring: "var(--accent)",
      },
      fontFamily: {
        // Work Sans — everything except display headings.
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
        // Prata — display only (h1 and major section headings).
        display: ["var(--font-prata)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
