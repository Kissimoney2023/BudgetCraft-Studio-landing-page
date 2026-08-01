# 05_BRAND_VISUAL_IDENTITY.md

> **CANONICAL — this repository is the single home for this file.**
> Adopted 1 August 2026. The Google Drive copy is **archive-only and superseded**.
> Authority is `git log`. **Cite specs by name, not number** — `VISUAL_IDENTITY §4`.
> Exported from Drive unchanged; verified current at export.

**Brand:** BudgetCraft Studio
**Status:** v1 — complete. One open decision, flagged in §12.
**Last updated:** 30 July 2026
**Parent files:** `TARGET_AUDIENCE` · `BRAND_VOICE`

---

## 0. What this file owns

Colour, typography, layout, imagery policy, pin design rules, product design rules, the brand
mark, and Canva working rules.

**It does not own** product page counts or content (`PRODUCT_CREATION`), pin keyword strategy or
publishing cadence (`PINTEREST_CONTENT_ENGINE`), or copy (`BRAND_VOICE`).

**Standing dependency:** `BRAND_VOICE` §7 removes emoji from all customer-facing copy, which
makes design the sole source of warmth. This file is therefore load-bearing for the brand's
emotional register, not merely decorative.

## 1. Visual philosophy

**BudgetCraft Studio does not compete through a loud logo. It competes through consistency.**

The target recognition is gradual and cumulative: *"I know this style. This looks like a
BudgetCraft Studio resource."*

**Aesthetic lane: soft warm minimal.** Muted warm neutrals, generous white space, editorial
restraint.

Recognition is carried in this order:

1. **Layout structure**
2. **Cream and charcoal foundation**
3. **Terracotta signature accent**
4. **Consistent wordmark**

Typography is fourth, deliberately. Nothing in the system depends on a typeface being legible at
thumbnail size.

### The known risk, accepted

Soft warm minimal with serif headlines is the most crowded look in this niche. It is safe and
therefore easy to be invisible in. The counterweight is **terracotta as a disciplined signature**
plus a fixed layout device — recognition without eccentricity. Warm earth tones do at least
separate from the cool blue-grey default of finance-adjacent brands.

## 2. Emotional goal

**"A calm, beautifully organised money tool."**

Not: a banking app · a spreadsheet template · a corporate finance tool · a luxury finance brand ·
a motivational lifestyle account.

The design's job is to make organisation look *achievable*. Per `TARGET_AUDIENCE` §7, Sarah
stalled on a blank spreadsheet because it asked her to build the tool. Every page should look
already-built.

## 3. Colour system

**Exactly five colours. The palette is closed.** Paper white and text black are not separate
additions — they are two of the five.

| # | Colour | Hex | Role |
| --- | --- | --- | --- |
| 1 | **Cream** | `#FAF6F0` | Primary background (screen only) |
| 2 | **Deep charcoal** | `#2E2A26` | Text and structure |
| 3 | **Terracotta** | `#A84A2F` | Signature accent |
| 4 | **Warm sand** | `#EDE0CE` | Supporting neutral, fills, cards |
| 5 | **Muted olive** | `#6B6F4E` | Supporting accent, dividers, chart fills |

**Utility tint (not a sixth colour):** `#B0A697` — warm grey, for handwriting rules on the
printable only. Test-print at draft quality before committing; §5 forbids rules she cannot see.

### Contrast, checked

Against cream `#FAF6F0`:

| Colour | Ratio | Safe for |
| --- | --- | --- |
| Deep charcoal | ~13:1 | Everything |
| Terracotta | ~5.3:1 | Body text, headings, rules, small fills |
| Muted olive | ~4.9:1 | Body text and above |
| Warm sand | ~1.1:1 | **Fills only — never text** |

Charcoal is deliberately warm rather than neutral black, so it sits inside the palette rather
than against it. Terracotta was darkened from a brighter brick to clear 4.5:1 — a lighter
terracotta looks better in isolation and fails as text.

### Approximate distribution

Cream and white space ~70% · charcoal text ~20% · terracotta 5–8% · supporting colours 2–5%.
Guidance, not a formula.

### Cream: screen only — the print exception

**Cream cannot be a printed background.** Sarah prints on white paper. A cream ground means
either a full page of ink — far heavier coverage than the terracotta fields banned below — or a
design that silently prints white and looks nothing like the mockup she bought from.

| Context | Background | Cream's role |
| --- | --- | --- |
| **Printable PDF** | Unprinted paper white | Small filled blocks only, or absent |
| **Digital PDF** (tablet, desktop) | Cream | Full background — no ink involved |
| **Screen** (site, pins, mockups, email) | Cream | Full background |

The two-file product format in `TARGET_AUDIENCE` §10 already provides this split. Use it.

### Terracotta: accent, never field

**Terracotta is the signature note, not the entire song.**

**Permitted:** small vertical bar · footer strip · corner shape · highlight underline · button ·
heading · rule · total box
**Never:** full-page background · full-bleed cover · large text boxes covering a pin · every
element on a page

Terracotta is also ink-hungry at scale. On any page Sarah prints, it appears as line work and
small blocks only.

Against cream it is a genuinely high-contrast pairing at thumbnail size — better than sage or
dusty blue would have been. That is why it carries recognition.

### COLOUR NEVER CARRIES MEANING — hard rule

Meaning is carried by **words or position**, always. Never by colour alone.

Two reasons, both binding:

1. **Greyscale printing destroys colour information.** Many people print black and white.
2. **`BRAND_VOICE` §4 and `TARGET_AUDIENCE` §11 ban scoring and failure mechanics.** A green
   tick has a shadow — the absence of one. Nothing in this brand is ever green-because-good or
   red-because-bad.

**Muted olive is structural and decorative only** — dividers, chart fills, icon strokes, section
edges. It is never a "success state." It never becomes equal in weight to terracotta.

### Colours we never introduce

Neon · bright fintech blues · luxury gold and black · pastel rainbow · fast-ageing trend colours.

### Rule of closure

**No new colours without updating this file.** When a design seems to need another, ask: *can one
of the five do this job?* The answer is almost always yes.

## 4. Typography system

**Three roles, not two.**

| Role | Face | Rules |
| --- | --- | --- |
| **Display** | High-contrast editorial serif | Large sizes only, never below ~24pt. Pin headlines, product covers, website hero, blog titles. Generous letter-spacing, never tight |
| **Working type** | Humanist sans | All body copy, instructions, labels, worksheet fields, category names, footers — anything set small or printed |
| **Numbers** | Working sans, **tabular figures** | Must align vertically in columns |

### Why the display serif is contained

High-contrast serifs fail in the two environments this business runs on: hairlines thin out at
Pinterest thumbnail width on a phone, and they break up when printed small on a consumer inkjet.
The look that sells a mockup is the look that fails delivery.

**It is the right choice only if contained to large display type.** Never a worksheet label,
never an instruction, never anything on a page Sarah writes on.

### Tabular figures are not optional

On a budget worksheet, numbers that don't align vertically read as sloppy — and sloppy is the one
impression a money-organisation brand cannot afford. Any face used for amounts must offer tabular
(monospaced) figures.

### The two-environment font test — run before committing

1. Set the candidate headline at pin size in Canva. Export it. View it on a phone at the size it
   appears in the Pinterest feed.
2. Print one page at draft quality on a home printer.

Survives both → correct. Survives only the first → wrong, however good it looks on screen.

### Typeface candidates — verify in Canva before committing

| Role | First choice | Alternate | Why |
| --- | --- | --- | --- |
| **Display serif** | **Prata** | DM Serif Display | Warm, high-contrast, editorial. Less used in this niche than Playfair Display, which is the crowded default |
| **Working sans** | **Work Sans** | Source Sans 3 | Humanist, wide weight range, holds up bold at pin scale and small in print |

Both are widely distributed open-source families. **Availability in Canva is unverified — check
the font list before building anything.** If neither is present, the selection criteria are: for
display, a warm high-contrast serif that is not Playfair; for working type, a humanist sans with
a genuine Bold or ExtraBold and unambiguous digits.

### Tabular figures — the practical problem and the fix

This file requires amounts to align vertically in the tracker's total column. The clean solution
is OpenType tabular figures — and **Canva does not reliably expose OpenType feature toggles.**

**Workaround: right-align the numbers in a fixed-width text box.** Right alignment produces
visual column alignment regardless of whether the figures are proportional. Set the total-column
box to a fixed 0.9 in width, right-aligned, and the arithmetic looks tidy without needing font
features.

Same applies to the grand total row.

> **Build-time caveat** (added 1 Aug 2026, see `TRACKER_CANVA_BUILD_SPEC` §6): Canva text boxes
> hug their contents by default. An unconstrained box turns "fixed 0.9 in" into "as wide as the
> text," and right-alignment then aligns each number to its own right edge rather than a shared
> one. Drag each box to width and confirm the right edges coincide.

## 5. Layout principles

**With imagery ruled out (§8), layout quality is the entire visual product.** A typographic pin
with weak spacing has nowhere to hide.

### White space

Generous, and structural rather than leftover. Cream space is roughly 70% of any composition.
Space is what makes restraint read as *calm* rather than *empty* — crowding is what makes a
minimal palette look cheap.

### Hierarchy

One dominant element per composition. Pins carry one headline. Printable pages carry one job. If
two things compete for first read, the page has failed.

### Printable usability — hard constraints

**Margins.** Consumer printers cannot print to the edge; the unprintable margin is roughly a
quarter-inch. Design margins of half an inch or more on US Letter (8.5 × 11 in). No full-bleed
anything on a printable.

**Handwriting space.** No fillable fields at launch (`TARGET_AUDIENCE` §10, `BRAND_VOICE`), so
Sarah writes by hand in pen. Rows need roughly half an inch of height. **Fourteen rows is the
ceiling on a single US Letter page, not a target** — past that, rows get too tight for anything
but neat handwriting with a fine tip.

**Contrast for writing.** No delicate light-grey rules she cannot see, and no light-grey
placeholder text. Lines she writes on must be visible after printing at draft quality.

**Self-evidence.** A page that needs instructions has failed the beginner test in
`TARGET_AUDIENCE` §1. Where a one-page product has no room for a how-to, the page must explain
itself.

## 6. Pinterest design rules

### The frame system

Every major pin uses the same recognisable structure:

```
TOP:     Small letter-spaced sans category label
MIDDLE:  Main problem/solution headline
BOTTOM:  Terracotta signature element + wordmark
```

Worked example:

```
MONEY ORGANISATION

Where Did
My Money Go?

Simple tracker for beginners

[terracotta footer block]
BudgetCraft Studio
```

**Category labels are always sans, letter-spaced caps.** A serif at that size vanishes.

### Standard format

2:3 ratio, 1000 × 1500 px. *Verify against Pinterest's current published guidance before building
templates — platform specs change.*

### THE 3-SECOND PHONE TEST — every pin must pass

At feed size on a phone, can Sarah answer:

1. What problem is this about?
2. Why should she click?
3. Does it look trustworthy?

If not, the design fails. No exceptions for pins that look good at full size.

### The four templates — build these once, then duplicate forever

Canvas **1000 × 1500 px**. Safe margin **60 px** all sides → live area **880 × 1380**. All
coordinates are y-position from top.

#### Template A — Headline top

| Element | Spec |
| --- | --- |
| Category label | y 90 · Work Sans Medium 28 px · ALL CAPS · letter-spacing +8% · charcoal · centred |
| Headline | y 180 · Work Sans Bold **96 px** · line-height 1.05 · max 3 lines · charcoal · centred |
| Supporting line | y 600 · Work Sans Regular 34 px · charcoal · centred |
| Product render | y 680–1290 · centred · max width 700 px |
| Terracotta footer strip | y 1400–1500 · full bleed width · `#A84A2F` |
| Wordmark | centred in strip · Work Sans Medium 32 px · cream |

#### Template B — Headline bottom

| Element | Spec |
| --- | --- |
| Product render | y 60–780 · centred · max width 780 px |
| Terracotta rule | y 830 · 160 × 6 px · centred |
| Headline | y 880 · Work Sans Bold 96 px · max 3 lines · charcoal |
| Supporting line | y 1290 · 34 px |
| Wordmark | y 1420 · Work Sans Medium 30 px · charcoal |

#### Template C — Headline beside render

| Element | Spec |
| --- | --- |
| Render column | x 60–440 · y 300–1200 |
| Terracotta vertical bar | x 480 · y 200–1300 · 8 px wide |
| Text column | x 540–940 |
| Headline | y 320 · Work Sans Bold 68 px · left-aligned · max 5 lines |
| Supporting line | y 900 · 30 px · left-aligned |
| Wordmark | y 1420 · left-aligned at x 60 · 30 px |

#### Template D — Headline over full-width render

| Element | Spec |
| --- | --- |
| Render | fills 1000 × 1500, cropped |
| Cream overlay panel | x 60–940 · y 400–920 · `#FAF6F0` at 94% opacity |
| Headline | y 460 · Work Sans Bold 88 px · charcoal · centred on panel |
| Terracotta underline | 200 × 6 px · 40 px below last headline line |
| Wordmark | y 1400 · charcoal 30 px · centred |

### Thumbnail arithmetic — why the sizes are what they are

Pinterest feed width on a phone is roughly **236 px**, so everything renders at about **24% of
design size**:

| Design size | Renders at | Legible in feed? |
| --- | --- | --- |
| 96 px headline | ~23 px | **Yes** |
| 68 px headline | ~16 px | Marginal — Template C needs short headlines |
| 34 px supporting | ~8 px | **No** |
| 28 px label | ~7 px | **No** |

**Consequence: the headline is the only text that works in the feed.** Supporting lines, category
labels and the wordmark exist for the click-through view and for Pinterest's text recognition,
not for Sarah's first glance. Never put essential information anywhere but the headline.

This is also why headlines stay short. A five-word headline fits 96 px across three lines; a
fifteen-word headline forces 48 px, which renders at 11 px and disappears.

## 7. Product design rules

### Printable PDF

Paper white ground · half-inch-plus margins · charcoal text · terracotta as header rule and total
box only · muted olive for dividers if needed · no full-bleed · greyscale-safe · half-inch
writing rows · maximum fourteen rows per page.

### Digital PDF

Cream ground permitted (no ink cost) · otherwise identical structure · sized for tablet
annotation apps per `TARGET_AUDIENCE` §10 · same typographic roles.

### Covers

The one place the display serif works at full strength. Large title, generous space, terracotta
accent, wordmark. No imagery.

### Worksheets

Pre-printed categories, never blank lists to fill in (`TARGET_AUDIENCE` §7). Total boxes, not
scores. Prompts, not verdicts. Nothing that counts streaks or grades a month.

### Cross-reference

The free tracker's locked specification lives in `LEAD_MAGNET_SYSTEM`, with build geometry in
`TRACKER_CANVA_BUILD_SPEC`. Summary of what this file constrains: one page, paper white,
terracotta header rule and total box only, ten to fourteen pre-filled categories, no transaction
log, no scoring.

## 8. Imagery policy

**No decorative imagery. Ever.**

No illustration · no icons · no photography · no abstract shapes · no stock imagery · **no
AI-generated images**.

Section 10 of the original outline — AI image generation rules — reduces to a single line: *we do
not generate images.* One fewer source of drift across hundreds of assets.

### The sole exception: product renders

You cannot sell a printable without showing the printable. Permitted image type, and the only
one:

- A page shown flat or at a slight angle
- A two-page spread
- A stack or fan of pages
- A page shown in a tablet frame (for the digital PDF)

**The product is the imagery.** The asset and the advertisement are the same object — which costs
nothing to produce, shows Sarah exactly what she gets, and carries zero consistency risk.

**Consequence:** the pages must be beautiful in their own right, since they are now the entire
visual content library. `TARGET_AUDIENCE` calls the tracker *the first physical proof of the
promise*. It is also the first advertisement.

## 9. Brand mark

**A typographic wordmark. No icon, no mascot, no pictorial logo.**

### Form

**BudgetCraft Studio**

*BudgetCraft* takes primary emphasis — the practical, tool-building half. *Studio* takes
secondary — design, care, a crafted collection.

| Context | Form |
| --- | --- |
| Website, product covers | Stacked or single line, as space allows |
| **Pinterest footer** | **Single line only** — stacked marks lose clarity at small size |
| Printable footer | Single line |

### Typeface

**The working sans, not the display serif.**

The mark appears in tiny pin footers, printable footers, email headers, website navigation and
product covers. It must survive phone screens, low-resolution previews and home printing. The
fragile serif cannot do that job.

### Colour

**Default:** charcoal on cream — the everyday version.
**Accent:** cream inside a small terracotta footer block — pins, covers, promotional graphics.
**Never:** a full terracotta wordmark. Ink-heavy on print materials.

### The mark never contains

Dollar signs · piggy banks · coins · wallets · calculators · upward charts · house icons.

These are the generic vocabulary of money content and pull the brand toward exactly what
`TARGET_AUDIENCE` §12 excludes. BudgetCraft Studio is about **organisation and confidence, not
wealth symbolism.**

### Reduction rule

If shrinking the mark makes it unreadable, **remove detail — never add complexity.**

## 10. Canva working rules

Every template built in Canva must fix:

- Margins
- Text hierarchy and sizes
- Terracotta placement options (a defined set, not freehand)
- Typography pairing
- Palette — no colour picker use, no eyedropper, no "close enough" shades

**No random colour additions. No new fonts inside a template.**

**The test: pin #300 should still look like it belongs beside pin #1.**

Templates are duplicated and edited, never rebuilt from blank. A rebuilt-from-blank pin is how
drift enters.

## 11. What the brand never looks like

- A banking or fintech app — bright blues, gradients, glassy cards
- A spreadsheet template — grid-heavy, borders everywhere, no space
- A luxury finance brand — gold, black, serif-on-black, aspiration
- A motivational lifestyle account — quote graphics, script fonts, pastel gradients
- A generic Canva template — default fonts, stock icons, rainbow palettes
- Anything with a piggy bank on it

## 12. Open questions

### RESOLVED — pin headline typeface

**Locked: bold humanist sans for all Pinterest headlines.**

Reasoning, operator's: Pinterest is a speed environment. Sarah is scrolling, and the pin must
communicate before she decides whether to stop. Strongest mobile readability, easiest Canva
production, survives small screens, and consistent with beginner practicality.

**The high-contrast display serif is now restricted to three places:** website hero, blog titles,
product covers. It appears nowhere on a pin and nowhere on a printable.

Accepted cost: less editorial personality on pins. Recognition is carried instead by the frame
system, the cream ground and the terracotta signature element — which §1 already ranks above
typography.

**Consequence to watch.** The display serif now touches only three surfaces, none of them the two
places the business runs on. It is a fashionable, fragile face doing very little work. If it ever
proves awkward to source in Canva or inconsistent across those three surfaces, dropping it
entirely in favour of one well-chosen sans would simplify the system at almost no cost. Not a
decision needed now — a flag for the first time it causes friction.

### To be verified in Canva — the only remaining gap

1. **Typeface availability.** Prata and Work Sans are first choices (§4). If absent, use the
   selection criteria given there. **This is the one thing that must be checked before
   building** — and it is binary. If Work Sans is present, the 0.130 in column clearance in
   `TRACKER_CANVA_BUILD_SPEC` §4 holds. If it is absent, the substitute face has different
   metrics and that measurement is void, not merely nudged.
2. **Row-rule visibility.** Test-print the tracker at draft quality and confirm `#B0A697` rules
   are visible (§3, §5).
3. **Pinterest spec check** against current published guidance (§6).

### Resolved

- Hex values for all five colours — §3, with contrast ratios
- Pin template specs to the pixel — §6
- Tabular figures workaround — §4
- Pin headline typeface — bold sans, above
