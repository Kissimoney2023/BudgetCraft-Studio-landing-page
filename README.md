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

## How the tracker actually gets delivered

- This codebase subscribes the visitor to a Kit form. It does not send the
  tracker. There is no attachment, no file link, and no email sent from
  `netlify/functions/subscribe.ts` — the function's job ends once Kit has the
  subscriber.
- Delivery was intended to be Kit's incentive email, configured on the form
  inside Kit. The file the subscriber receives, and the wording of the email
  carrying it, both live in the Kit dashboard, not in this repo.
- **Verified 2026-08-01: no email is sent on this path.** Six subscribers exist
  in Kit, all `state: "active"` and all attached to the signup form, created
  across three days. Not one of them received any email. Nothing currently
  delivers the tracker, so `/thank-you` promises an email that never arrives.
- The likely cause is structural, not a misconfiguration: Kit's incentive email
  is tied to the double opt-in confirmation step. Creating a subscriber as
  `state: "active"` marks them already confirmed, so Kit has nothing to confirm
  and sends nothing. **Single opt-in and incentive-email delivery are mutually
  exclusive in Kit.** Since single opt-in for everyone is a locked requirement,
  delivery has to move off the incentive email.
- The replacement is already specified: the Day 0 email of the five-email
  welcome sequence hands over the tracker link, triggered by the
  `budgetcraft-leadmagnet` tag that `subscribe.ts` already applies. That
  automation exists in Kit but is paused with no email steps built, which is why
  nothing sends today. Building and activating it is an operator step.

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
| `KIT_TAG_ID` | No | Optional. ID of the lead-magnet tag applied to each new subscriber. When unset, tag application is skipped and signups still work. |
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
   | `KIT_FORM_ID` | the tracker signup form's numeric ID (Grow → Landing Pages & Forms) | No |
   | `NEXT_PUBLIC_SITE_URL` | the site's public URL, no trailing slash (e.g. `https://luminous-snickerdoodle-689c6d.netlify.app`) | No |

3. Make sure **site access protection is off**
   (**Site configuration → Access & security → Visitor access → Public**) so both
   the page and the signup function are publicly reachable — otherwise the site
   returns `401`.
4. Trigger a deploy. Pushes to `main` auto-deploy, and the subscribe function is
   served at `/.netlify/functions/subscribe`.

### Troubleshooting the signup

- **Signup shows "Something went wrong" / the function returns `kit_error`.** The
  function reached Kit but Kit rejected the request — almost always the
  `KIT_API_KEY`. Confirm it is the **V4** key from **Settings → Developer → API
  keys** (used with the `X-Kit-Api-Key` header), _not_ the legacy v3 "API
  Key/Secret" under Settings → Advanced, and that it was pasted with no stray
  spaces or newline. After changing an env var, **redeploy** — Netlify functions
  only pick up new values on a fresh deploy, and edge propagation can take a
  moment.
- **Function returns `server_misconfigured`.** `KIT_API_KEY` or `KIT_FORM_ID` is
  missing from the deploy's environment.
- **Whole site returns `401`.** Netlify site/team access protection is on; set
  visitor access to Public (see step 3).

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
- Set the real tracker download link in Kit welcome email #1 (it currently holds
  the placeholder `REPLACE_WITH_TRACKER_DOWNLOAD_URL`).
- **Have `/privacy` and `/terms` reviewed by a qualified professional.** They now
  contain a general boilerplate template (in `lib/content.ts`), not final legal
  text — confirm it against the services used (Kit, Netlify) and the law for a
  global audience, set the governing-law jurisdiction, add real contact details,
  and update `legal.lastUpdated`.
- Publish the 3 draft Kit welcome emails and build the Kit Visual Automation
  (form → tag `welcome-series` → sequence); remove test subscribers.
- Set `NEXT_PUBLIC_SITE_URL` to the real domain.
