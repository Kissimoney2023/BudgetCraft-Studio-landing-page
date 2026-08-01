# BudgetCraft Studio — project context

## What this is

A marketing site for a solo-operated digital publishing business selling budget
printables. It has one job: turn Pinterest traffic into email subscribers by
giving away a free one-page spending tracker.

The full specification lives in `docs/`. **`docs/00_LOCKED_DECISIONS.md` is the
source of truth for every brand value, every string, and every constraint.**
When this file and that file disagree, that file wins.

**This repository is the canonical home for the specs.** Adopted 1 August 2026.
Copies in Google Drive are archive-only and superseded — do not reconcile against
them, and never settle "which version is real" by modification date. Authority is
`git log`.

**Spec filenames carry no numeric prefix**, by operator override of 1 August 2026
(`docs/00_LOCKED_DECISIONS.md` §21). `00_LOCKED_DECISIONS.md` is the sole
exception — its zero means *read first*. **Cite specs by name, never by number:**
`BRAND_VOICE §7`, `EMAIL_MARKETING_SYSTEM §4`. Legacy numeric citations survive
inside `00`; §18 there carries the decoder that resolves them. Convert them
opportunistically when editing a line for another reason — never in a dedicated
pass.

All written specs are canonical in `docs/`:

```
docs/00_LOCKED_DECISIONS.md      Registry — read first
docs/TARGET_AUDIENCE.md          Sarah, pains, ladder, boundaries
docs/BRAND_VOICE.md              Voice, banned lists, promise hierarchy
docs/BRAND_VISUAL_IDENTITY.md    Colour, type, pin templates, imagery policy
docs/LEAD_MAGNET_SYSTEM.md       Tracker, landing page, opt-in, sequencing
docs/TRACKER_CANVA_BUILD_SPEC.md Tracker build geometry
docs/PINTEREST_CONTENT_ENGINE.md Angles, boards, publishing, the 40-pin test
docs/SEO_BLOG_ENGINE.md          Site structure, cadence, first six articles
docs/EMAIL_MARKETING_SYSTEM.md   Lifecycle, automation, segmentation
```

**Planned but never written:** `PRODUCT_CREATION_SYSTEM`, `AUTOMATION_WITH_CLAUDE`.
They appear in `BRAND_VOICE` §0's ownership table and were never drafted — do not
search for them and do not stub them. Their areas fall back to `00` §8 and
`TARGET_AUDIENCE` §9 for pricing, and `TRACKER_CANVA_BUILD_SPEC` plus
`BRAND_VISUAL_IDENTITY` §7 for printable specs.

## Ground rules — read before changing anything

**The specification is locked, not advisory.** Copy, colours, fonts, page
structure and constraints were decided deliberately over a long process. Do not
improve the copy. Do not add sections. Do not introduce marketing conventions
that were not asked for — most of them were considered and rejected.

**If a locked value looks wrong, say so. Do not silently change it.** Flag the
conflict and wait. Quietly "fixing" a locked decision is the specific failure
mode this project has repeatedly hit.

**Never fabricate a fact.** No invented form IDs, tag IDs, API keys, account
numbers, statistics, or version numbers. If a real value is needed and unknown,
leave it empty and say what is needed. A plausible wrong number costs more than
a blank.

**Verify API details against current documentation** rather than recalling them.
Third-party APIs change.

**Measure before optimising.** Report numbers first; do not change code to chase
a target I have not seen.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript, no `any` · Tailwind CSS ·
shadcn/ui · Netlify hosting · Kit (formerly ConvertKit) for email via a Netlify
serverless function.

## Design tokens

Defined once in `app/globals.css`, mapped to semantic names in
`tailwind.config.ts`. **Hex values appear nowhere else in the codebase.**

| Token | Hex | Use |
| --- | --- | --- |
| `background` | `#FAF6F0` | Cream. Page background — not white |
| `foreground` | `#2E2A26` | All text |
| `accent` | `#A84A2F` | Terracotta. Buttons, rules, small emphasis. 5.3:1 on cream |
| `muted` | `#EDE0CE` | Warm sand. **Fills only, never text.** 1.1:1 |
| `secondary` | `#6B6F4E` | Olive. Dividers, small decorative elements |

**Colour never carries meaning.** No red for bad, no green for good — the design
must survive greyscale and must never read as a verdict on the reader's
spending.

**Fonts:** Prata for display headings only, never below 24px. Work Sans for
everything else. Both via `next/font/google`.

## Copy rules — hard constraints

All customer-facing strings live in `lib/content.ts`, which is an
**implementation file, not a source of truth**. Update the specification first,
then mirror it there.

**Never, anywhere:**

- Emoji
- Exclamation marks
- Currency symbols in printables or trackers

**Voice:** the brand is a faceless studio with a human personality. Use "we" for
the brand, "you" for the reader. Dry and understated, never jokey.

**Banned — founder voice.** The brand has no founder story and will not invent
one: I wish I had · I used to · I tried · I created · I paid off · what worked
for me · I know how it feels · we've all been there

**Banned — naming the judgment.** Mentioning judgment introduces it: without
judgment · judgment-free · no shame · guilt-free · not your spending mistakes
_Screening question: does this sentence mention a negative thing in order to
deny it?_

**Banned — influencer register:** take charge of your financial future · unlock
your wealth potential · master your money mindset · achieve financial freedom ·
transform your finances

**Banned — financial advice.** This is educational content and organisational
tools only: percentages and benchmarks · you should about money decisions · debt
payoff ordering · investing, retirement accounts, credit scores · emergency fund
sizing · income claims · guaranteed savings

**Banned — urgency:** countdowns · scarcity · exit intent · popups · fake
testimonials · stock photos

**Language:** US spelling (organize, color, favorite) with internationally
neutral vocabulary. The audience is global. Never gas (use fuel), takeout, mom,
checkbook, diaper, closet, vacation. No national averages, no country-specific
financial terms, no country-specific support organisations.

_Screening question: would this word or figure mean the same thing to a reader
in Ohio, Manchester, Melbourne and Toronto?_

## Kit integration — verified facts

- **v4 API**, base `https://api.kit.com/v4`, auth via the `X-Kit-Api-Key`
  header. Not the legacy v3 `api.convertkit.com` endpoint with an `api_key`
  parameter.
- Flow: `POST /v4/subscribers` with `state: "active"` →
  `POST /v4/forms/{form_id}/subscribers` → optional
  `POST /v4/tags/{tag_id}/subscribers`.
- **Single opt-in for every signup**, regardless of whether the optional first
  name was given. Always create the subscriber as active first, or Kit sends a
  confirmation email.
- Tag application is non-blocking. A tag failure must never fail the signup.
- The API key is server-side only. Never `NEXT_PUBLIC_`. Never return Kit's
  response body to the client.

**The tracker is not delivered by this codebase.** It is delivered by Kit's
incentive email, configured on the form inside Kit. Nothing in this repository
sends it.

## Architecture

- `lib/content.ts` — every customer-facing string
- `lib/validation.ts` — shared client and server validation
- `components/` — page sections; `components/ui/` — shadcn primitives,
  animation-free
- `netlify/functions/subscribe.ts` — returns **JSON only**, never redirects. The
  client handles navigation to `/thank-you` and shows inline errors
- Pages: `/`, `/thank-you`, `/privacy`, `/terms`

**Legal pages are intentional placeholders.** Do not generate privacy policy or
terms text. The audience is global and this needs real legal review.

## Do not build

Blog, MDX, CMS, analytics, authentication, database, admin panel, paid products,
A/B testing, cookie banners unless cookies requiring consent are actually used,
or any new dependency without asking first.

## Before you say something is done

- `npm run typecheck`, `npm run build`, `npm run lint` all clean
- Scan customer-facing copy for emoji, exclamation marks and every banned phrase
  above
- Report Lighthouse scores as numbers rather than claiming targets were met
- State clearly what was **verified** versus what merely **compiles**. Code that
  type-checks against an API is not code that has talked to that API
