# BudgetCraft Studio

Marketing site for **BudgetCraft Studio** — a free, beginner-friendly spending
tracker. Visitors sign up with their email and receive the tracker by way of
Kit (formerly ConvertKit).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** throughout
- **Tailwind CSS** with brand tokens defined once in `app/globals.css`
- **shadcn/ui** primitives (`components/ui`)
- **Kit** for email, called from a **Netlify serverless function**
- Deployed on **Netlify**

## Project layout

```
app/                    App Router pages (/, /thank-you, /privacy, /terms)
  layout.tsx            Fonts (Prata, Work Sans), metadata, Open Graph, Twitter
  sitemap.ts            Generates /sitemap.xml
  robots.ts             Generates /robots.txt
  globals.css           Brand tokens (the ONLY place raw hex values live)
components/             Page sections (Hero, Preview, HowItWorks, ...)
  ui/                   shadcn/ui primitives (button, input, label, checkbox, accordion)
lib/
  content.ts            Every customer-facing string (mirrors the spec)
  validation.ts         Shared email/name rules used by client AND function
  utils.ts              cn() class helper
netlify/functions/
  subscribe.ts          POST endpoint that calls Kit; returns JSON only
scripts/
  generate-preview-placeholder.mjs   Regenerates the placeholder preview image
public/
  tracker-preview.png   PLACEHOLDER preview (replace before launch)
```

### Content is centralized

Every visitor-facing string lives in [`lib/content.ts`](lib/content.ts).
Components never hardcode copy. That file is an implementation mirror of the
project specification — update the specification first, then mirror it here.

### Colors

The five brand tokens are defined once as CSS custom properties in
[`app/globals.css`](app/globals.css) and mapped to semantic Tailwind names in
`tailwind.config.ts`. Components use `bg-background`, `text-foreground`,
`bg-accent`, `border-secondary`, etc., and never contain hex values. `muted`
(warm sand) is used for fills only, never text.

## Local setup

Requirements: Node 18.18+ (Node 20+ recommended).

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

The signup form posts to `/.netlify/functions/subscribe`. To exercise the
function locally, run the site through the Netlify CLI instead of `npm run dev`:

```bash
npm install -g netlify-cli
netlify dev
```

`netlify dev` serves both the Next.js app and the function together.

### Regenerating the preview placeholder

`public/tracker-preview.png` is a generated placeholder at the correct 8.27:11
ratio. Replace it with the real tracker artwork before launch. To regenerate the
placeholder:

```bash
npm run gen:preview
```

## Environment variables

Set these in `.env.local` for local development and in the Netlify UI
(**Site settings → Environment variables**) for production. See
[`.env.example`](.env.example) for details.

| Variable | Exposed to browser | Purpose |
| --- | --- | --- |
| `KIT_API_KEY` | No (secret) | Kit API key. Used only by the serverless function to add subscribers. |
| `KIT_FORM_ID` | No | ID of the Kit form new subscribers are added to. |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical public base URL, no trailing slash. Used for canonical/OG/sitemap/JSON-LD. |

## Deploy from GitHub to Netlify

The code lives at
[`Kissimoney2023/BudgetCraft-Studio-landing-page`](https://github.com/Kissimoney2023/BudgetCraft-Studio-landing-page).

1. In Netlify, open (or create) the site → **Site configuration → Build & deploy
   → Link repository**, and choose this repo on branch `main`. Netlify reads
   `netlify.toml` and applies the Next.js runtime plugin
   (`@netlify/plugin-nextjs`); the build command is `npm run build`.
2. Add environment variables under **Site configuration → Environment variables**:

   | Variable | Value | Secret? |
   | --- | --- | --- |
   | `KIT_API_KEY` | your Kit **V4** API key (Settings → Developer → API keys) | **Yes — set in Netlify only, never commit** |
   | `KIT_FORM_ID` | `9746847` | No |
   | `NEXT_PUBLIC_SITE_URL` | the site's public URL, no trailing slash (e.g. `https://luminous-snickerdoodle-689c6d.netlify.app`) | No |

3. Make sure **site access protection is off**
   (**Site configuration → Access & security → Visitor access → Public**) so both
   the page and the signup function are publicly reachable — otherwise the site
   returns `401`.
4. Trigger a deploy. Pushes to `main` auto-deploy, and the subscribe function is
   served at `/.netlify/functions/subscribe`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run gen:preview` | Regenerate the placeholder preview image |

## Before launch

- Replace `public/tracker-preview.png` with the real tracker artwork.
- Write and legally review `/privacy` and `/terms` (currently placeholders) for
  a global audience and the services actually used (Kit, Netlify).
- Set `NEXT_PUBLIC_SITE_URL` to the real domain.
