# TRACKER_CANVA_BUILD_SPEC.md

> **CANONICAL — this repository is the single home for this file.**
> Adopted 1 August 2026. Any copy in Google Drive is **archive-only and superseded**;
> do not edit it, do not reconcile against it, and do not resolve conflicts by
> modification date. Authority is `git log` on this path.

**Asset:** *Where Did My Money Go?* — Free Spending Tracker
**Status:** v1 — build-ready
**Last updated:** 1 August 2026
**Parent files:** `04` (voice) · `05` (visual identity) · `06` §2 (page spec)

**Prerequisite:** confirm **Prata** and **Work Sans** exist in your Canva font list before
starting. If either is missing, use the substitution criteria in `BRAND_VISUAL_IDENTITY` §4. This
is a **stop condition** — it gates the entire build.

### Check both faces before deciding anything — the failures are different sizes

They fail independently, and only one of them threatens §4's measurement.

| Outcome | Consequence |
| --- | --- |
| **Both present** | Build as specified. The 0.130 in clearance in §4 holds. |
| **Prata absent, Work Sans present** | **Small.** Only the tracker title, website hero, blog titles and product covers are affected — substitute per `BRAND_VISUAL_IDENTITY` §4 (a warm high-contrast serif that is not Playfair). **§4's column measurement holds unchanged**, because it depends entirely on Work Sans. |
| **Work Sans absent** | **Large. §4 is void and must be redone from scratch** against whatever face replaces it — regardless of Prata. Every label, instruction, column header, total and the wordmark are Work Sans, and the 2.0199 in longest-label figure is a Work Sans measurement. It is not adjustable by a ratio; re-measure. |

**Report which case you are in before substituting anything.** "The font check failed" is
ambiguous between a cosmetic swap and a rebuilt column spec.

---

## 0. What this asset is

A one-page, category-based review that helps a beginner see where last month's money went.

**It is not** a budget plan · a spending limit · financial advice · a debt tool. No limits,
no percentages, no benchmarks, no scores (`03` §13).

**Five jobs from one file:** lead magnet · pin imagery · landing page preview · brand proof ·
first audience test.

---

## 1. Canva document setup — dual Letter/A4

**Master canvas: custom size 8.27 × 11 in, portrait.**

This is the **intersection** of US Letter (8.5 × 11 in) and A4 (8.27 × 11.69 in). Designing to
the intersection means one layout exports correctly to both without scaling or cropping —
required by globalization rule 5 in `00` §20.

**Guides at 0.5 in all sides.** Live area **7.27 × 10 in**, running x 0.50–7.77 and y 0.50–10.50.

### Producing the two paper sizes

Build once on the master, then:

| Output | Canvas | Placement |
| --- | --- | --- |
| **Letter** | 8.5 × 11 in | Paste all elements, centre horizontally — 0.115 in extra each side |
| **A4** | 8.27 × 11.69 in | Paste all elements, nudge down 0.345 in to centre vertically |

Canva pastes at the source's top-left position, so the A4 version needs one group-move
downward. Group everything before copying so it moves as a single object.

*If your Canva plan offers a resize function, verify it preserves absolute measurements rather
than scaling type — scaled type breaks the size specifications in §5.*

Canva exports print PDFs at 300 DPI.

**Nothing crosses the 0.5 in guides.** Consumer printers can't print to the edge, and `05` §5
forbids full bleed on printables.

---

## 2. Colors

| Use | Hex |
| --- | --- |
| Print background | **white — unprinted paper** |
| Digital background | Cream `#FAF6F0` |
| All text | Deep charcoal `#2E2A26` |
| Rule under title, grand total box outline | Terracotta `#A84A2F` |
| Writing rules, total rules | `#B0A697` |
| Optional hairline above grand total | Muted olive `#6B6F4E` |

**Cream never appears on the print version.** Warm sand is not used on this asset.

---

## 3. Vertical layout — absolute positions

| Band | From | To | Height |
| --- | --- | --- | --- |
| Title block | 0.50 | 1.40 | 0.90 |
| Method line | 1.40 | 1.80 | 0.40 |
| Column headers | 1.80 | 2.10 | 0.30 |
| **12 category rows** | 2.10 | 9.20 | 0.59 each |
| Grand total row | 9.20 | 9.70 | 0.50 |
| Reflection prompt | 9.70 | 10.20 | 0.50 |
| Footer wordmark | 10.20 | 10.50 | 0.30 |

### Row top positions

| Row | Top | Row | Top |
| --- | --- | --- | --- |
| 1 | 2.10 | 7 | 5.65 |
| 2 | 2.69 | 8 | 6.24 |
| 3 | 3.28 | 9 | 6.83 |
| 4 | 3.87 | 10 | 7.42 |
| 5 | 4.46 | 11 | 8.01 |
| 6 | 5.05 | 12 | 8.60 |

Row 12 ends at 9.19. Absorb the 0.01 in the grand total band.

---

## 4. Horizontal layout — three columns

Live width is **7.27 in** (A4-compatible), x 0.50 to 7.77.

| Col | Content | From | To | Width |
| --- | --- | --- | --- | --- |
| A | Category label | 0.50 | 2.65 | **2.15** |
| B | **Open workspace** | 2.65 | 6.87 | **4.22** |
| C | Total | 6.87 | 7.77 | 0.90 |

### Column A — 2.15 in. Measured 1 August 2026, held by operator override

**Column A stays at 2.15 in. Do not widen.**

**Filing note (`00` §21 trigger 6):** the measurement below answered *does every label fit* —
yes, with 0.130 in to spare. It did **not** endorse the column width. The pre-committed rule
for the 2.00–2.30 band prescribed widening to 2.170 in; that was overridden because the
prescribed 0.020 in change is smaller than the divergence between font metrics and Canva's
text engine. Recorded as an override, not as a measurement outcome.

Measured from the Work Sans variable font instantiated at `wght=500` (Canva's "Medium"),
advance widths plus the font's actual GPOS kerning — 3,063 explicit pairs and one class-based
subtable — at 11 pt, upm 1000.

| Label | Width @ 11 pt | Clearance in 2.15 in |
| --- | --- | --- |
| Amazon & Online Shopping | **2.0199 in** | 0.130 in |
| Kids Clothes & Supplies | 1.7796 in | 0.370 in |
| Kids Activities & School | 1.7611 in | 0.389 in |
| Eating Out & Delivery | 1.5843 in | 0.566 in |
| Fun & Family Outings | 1.5765 in | 0.574 in |

**All five fit on one line. The question is closed.**

All twelve categories were subsequently measured; the remaining seven run from
*Gifts & Celebrations* at 1.4916 in down to *Groceries* at 0.7119 in. The five above are
genuinely the five widest.

### Why the original decision rule was not applied

The rule said 2.00–2.30 in → widen to measured + 0.15 in, which mechanically produces 2.17 in
and a 0.020 in change.

**That rule was mis-specified for this case.** It was written assuming the measurement might
*exceed* the column, and "measured + 0.15" was a way of guaranteeing clearance. Here the label
already fits with 0.130 in — about 6% — of clearance. Applying the rule would move the column
by 0.020 in, which is smaller than the difference between font-metric computation and Canva's
own text engine. The change would be noise driven by noise.

**No Canva round-trip is needed.** A 0.130 in buffer comfortably absorbs any rendering
difference in letter-spacing defaults or rounding.

The workspace at 4.22 in holds roughly seven handwritten amounts. Fewer than the 4.77 in it
replaced, and the right trade — an unreadable or wrapped label costs more than a seventh slot.
Row heights are unaffected either way.

---

## 5. Element specifications

### Title block

| Element | Spec |
| --- | --- |
| Title | **Where Did My Money Go?** · Prata · 34 pt · charcoal · centered · y 0.50 |
| Subtitle | *A simple way to see last month's spending patterns* · Work Sans Regular · 12 pt · centered · y 1.00 |
| **Month field** | `Month: ______________` · Work Sans Regular · 10 pt · **right-aligned to x 7.77** · y 1.22 · 2.2 in wide |
| Terracotta rule | y 1.40 · x 0.50–7.77 · 3 pt · `#A84A2F` |

**"My," not "your."** The title is the search phrase and the product name, matching her inner
voice (`06` §1). Do not rephrase it.

**The Month field is required.** It is how an undated page works, and undated is the
Objection 1 disarmament in `04` §11. Never print a specific month.

### Method line

> Open your banking app and look back through last month. Write each amount in its category
> row, then add up each line.

Work Sans Regular · 10.5 pt · charcoal · centered · y 1.48 · max width 6.5 in, one or two lines.

This is the only instruction. There is no instruction page — at one page there's no room, and
`05` §5 requires the page to be self-evident.

### Column headers

Work Sans SemiBold · 8.5 pt · ALL CAPS · letter-spacing +6% · charcoal · y 1.88

| Column | Label | Alignment |
| --- | --- | --- |
| A | CATEGORY | left at 0.50 |
| B | WHAT YOU SPENT | left at 2.65 |
| C | TOTAL | right to 7.77 |

### Category rows — the critical construction

Per row, at row top *t*:

| Element | Spec |
| --- | --- |
| Label | Work Sans Medium · 11 pt · charcoal · left at x 0.50 · vertically centered in row |
| **Workspace rule** | x 2.65–6.87 · **one continuous 1 pt line** · `#B0A697` · at y = *t* + 0.44 |
| Total rule | x 6.87–7.77 · 1 pt · `#B0A697` · same y |

**One continuous line. No tick marks, no slots, no boxes.** A row of five blanks tells her
there are five purchases; groceries is eight to twelve trips in a month, so she runs out of
room on the first category she fills in.

**No currency symbols anywhere on the page.** Globalization rule 6 (`00` §20) — she writes her
own currency. Never print a currency sign.

**All twelve labels on one line. No wrapping.** Two-line labels need about 10.8 in of column
height and do not fit.

**Label inline, workspace to its right.** Label-above-workspace needs two lines per category,
about 10.8 in, and doesn't fit.

### The twelve categories — from `00` §5, never regenerated

| # | Label | # | Label |
| --- | --- | --- | --- |
| 1 | Groceries | 7 | Kids Clothes & Supplies |
| 2 | Eating Out & Delivery | 8 | Household & Home |
| 3 | **Transport & Fuel** | 9 | Personal & Health |
| 4 | Amazon & Online Shopping | 10 | Gifts & Celebrations |
| 5 | Subscriptions | 11 | Fun & Family Outings |
| 6 | Kids Activities & School | 12 | Everything Else |

**Both internationalized 30 July 2026.** *Eating Out & Delivery* replaced *Eating Out &
Takeout* — takeout is US, takeaway is UK/AU, neither neutral; delivery describes the behaviour
instead. *Transport & Fuel* replaced *Gas & Car* — "gas" means cooking gas outside North
America.

Rent, mortgage and utilities are deliberately absent — fixed bills aren't where the mystery
lives, and including them inflates the total until the page reads as a verdict.

### Grand total row — y 9.20

| Element | Spec |
| --- | --- |
| Optional hairline | y 9.24 · x 0.50–7.77 · 0.5 pt · `#6B6F4E` |
| Label | *Everything, added up* · Work Sans SemiBold · 12 pt · left at 0.50 |
| **Total box** | x 6.87–7.77 · 0.34 in tall · 1.5 pt outline `#A84A2F` · vertically centered |

The terracotta box is the only filled emphasis on the page. **No bold "OVERSPENT" figure, no
deficit, no comparison, no red.**

### Reflection prompt — y 9.80

> Which number surprised you most?

Work Sans Regular · 11 pt · charcoal · centered.

**This exact wording.** Not "where did you overspend," not "what could you cut." It produces
noticing rather than a verdict (`03` §7).

### Footer — y 10.28

**BudgetCraft Studio** · Work Sans Medium · 9 pt · charcoal · centered.

Working sans, not Prata — the mark must survive small sizes and printing (`05` §9).

---

## 6. Right-aligned totals — the tabular figures workaround

Canva does not reliably expose OpenType tabular figures, so **set column C text boxes to fixed
0.9 in width, right-aligned.** Right alignment produces visual column alignment regardless of
figure width. Same for the grand total.

**The failure mode to watch for.** Canva text boxes hug their contents by default. If the box
is left to auto-size, "fixed 0.9 in width" silently becomes "as wide as the text," every box
ends up a different width, and right-alignment then aligns each number to its *own* right edge
rather than to a shared one — which looks correct in isolation and ragged down the column.
Drag each box to width and confirm the right edges sit on x 7.77 together, rather than trusting
the alignment setting alone. This is the entire mechanism holding the totals straight; there is
no font feature underneath it as a fallback.

---

## 7. Two exports from one design

**Duplicate the page. Change only the background.**

| | Print version | Digital version |
| --- | --- | --- |
| Background | None — leave white | Rectangle `#FAF6F0`, full bleed, sent to back |
| Download type | **PDF Print** | PDF Standard |
| Crop marks | **Off** | Off |
| Bleed | **Off** | Off |
| Filename | `where-did-my-money-go-print.pdf` | `where-did-my-money-go-digital.pdf` |

Crop marks and bleed are for commercial printing and produce a page Sarah can't use at home.
**Verify the current toggle names in Canva's download panel** — the interface changes and these
labels move.

The digital version serves GoodNotes, Notability, every annotation app, and desktop viewing.
There is no proprietary format; they all import PDFs (`06` §2).

**Both files are separately linked in Day 0 of the welcome sequence** — see
`docs/welcome-sequence-draft.md`. One download link cannot serve both, so the sequence has two:
`REPLACE_WITH_TRACKER_PRINT_PDF_URL` and `REPLACE_WITH_TRACKER_DIGITAL_PDF_URL`. Both must be
hosted and substituted before the sequence is published.

---

## 8. Renders — no photography

`05` §8 permits **product renders only.** No desk photos, no pens, no coffee cups, no stock
imagery, no AI images. Build all four from a PNG export of the page.

| Render | Build |
| --- | --- |
| **Flat** | PNG on cream `#FAF6F0` canvas, soft drop shadow, ~85% of frame |
| **Angled** | Same PNG rotated 4°, shadow offset down-right |
| **Tight crop** | Crop to rows 1–5, showing labels, rules and total column |
| **Tablet frame** | Digital version inside a plain rounded-rectangle outline, 2 pt charcoal |

### Handwriting example — for the landing page

A version of the tight crop with sample amounts in a handwriting-style font, showing how a
filled row looks.

**Constraint:** keep amounts obviously illustrative and do **not** total them into a figure
that could read as typical or expected household spending. That would function as a benchmark,
which `03` §13 excludes.

### Pin usage

Renders drop into the four templates in `05` §6. Pin headline is bold Work Sans, never Prata
(`05` §12). Headline text only — no paragraph copy on a pin, since anything under ~40 pt is
illegible at feed size.

---

## 9. Pre-publish checklist

- Prata and Work Sans confirmed available in Canva
- Nothing crosses the 0.5 in guides
- Print version has **no** cream background
- Crop marks and bleed both off
- Test-printed at **draft quality** on a home printer
- `#B0A697` rules visible on that draft print (`05` §12)
- Column A width verified by measuring the longest label
- No label wraps to a second line
- Twelve rows, globally neutral wording, no blank "add your own" row
- **No currency symbols anywhere**
- Both Letter and A4 versions exported and test-printed
- Month field present and empty
- Title reads "My," not "Your"
- No percentages, limits, benchmarks, scores or red anywhere
- Reflection prompt is the exact locked wording
- Column C right-aligned in fixed-width boxes
- Wordmark in Work Sans, not Prata

---

## 10. What comes next

1. **Confirm Prata and Work Sans in Canva** — the stop condition above
2. Build this tracker
3. Export and host both PDFs, then substitute the two Day 0 placeholder links
4. Build the four pin templates from `05` §6
5. Create the first ten pins using these renders
6. Publish the five welcome emails and wire the `budgetcraft-leadmagnet` tag to sequence
   `2844904` in Kit's Visual Automation builder, then activate

The landing page is **already built and live** on Next.js at `budgetcraft-free.netlify.app`
(`00` §10). The Kit-hosted page is rejected (`00` §16).

---

## Known internal inconsistency — flagged, not silently fixed

§5 "Category rows" previously described the workspace as holding "eight to nine handwritten
amounts" at 4.77 in. Column B is **4.22 in** (§4), which §4 states holds roughly seven. The
4.77 in figure predates the three-column layout. §4 is authoritative; the prose in §5 has been
left without a count rather than rewritten, because changing a stated capacity is a spec
decision, not a transcription fix.
