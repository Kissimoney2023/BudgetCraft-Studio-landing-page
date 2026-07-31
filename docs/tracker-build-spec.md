# BudgetCraft Studio — "Where Did My Money Go?" Spending Awareness Tracker
## Production Build Specification

Status: Locked for production. Derived directly from 06_LEAD_MAGNET_SYSTEM.md (parent spec) and the operator's confirmed decision to keep the free tracker as a single-page diagnostic tool, not a budgeting or planning system. This file does not reopen or replace the locked product direction.

Note on this revision: an earlier draft proposed a multi-page planner (cover page, income/savings fields, a daily log table, a weekly reflection page, a restart page, a green/blue palette). That draft was reviewed and rejected as an incorrect interpretation of the locked spec. It is not reflected below.

## 1. Purpose

Help users discover where their money disappears during normal, everyday spending. The tracker answers "Where is my money actually going?" It does not answer "How do I create a complete budget?" Core customer belief being addressed: "I always start, but I never finish." (03_TARGET_AUDIENCE.md)

## 2. Format and deliverables

One layout, two exports, identical geometry, only the ground colour changes.

Printable PDF: US Letter / A4 intersection, 8.27 x 11 in master size, unprinted paper white ground, for home printing and pen/pencil use. Digital PDF: identical geometry, cream ground (screen-only colour), for tablet use. Margins 0.5 in all sides; live area 7.27 x 10 in. Single page only. No cover page, no fillable PDF, no editable Canva version at launch.

## 3. Visual direction

Overall style: minimal, calm, trustworthy, non-judgmental. The user should feel "I can finally see my spending clearly," not "I have another complicated finance worksheet."

Color palette. Ground: paper white (print) or cream (digital). Text: deep charcoal, all text. Accent: terracotta, used only for the rule under the title and the outline of the grand total box. Optional: muted olive, low-weight hairline between the category block and the grand total row. Row rules: light charcoal, low weight, visible after draft-quality printing. Avoid bright green, deep blue, red, multiple category colors, financial-app or dashboard aesthetics, and colour-coding of any kind.

Typography. Title: display serif, large, about 36pt, the one place a serif appears on the page. Everything else, meaning column headers, category labels, method line, prompt, and footer: working humanist sans. Total boxes: working sans with tabular figures so amounts align vertically.

## 4. Page layout

Header area. Title: Where Did My Money Go? Subtitle: A simple spending awareness tracker. Supporting line (new copy, pending operator approval, see section 8): Track your everyday spending for one week and discover patterns without judgment. Month field: Month: ______________ (undated, per 04_BRAND_VOICE.md section 11).

Method line (locked, required, this is what makes the page self-evident with no separate instructions page): Open your banking app and scroll back through last month. Write each amount in its row as you go, then add up each line.

Column headers: Category, What you spent, Total.

Main tracking area, 12 categories, each with its own row. One continuous ruled writing line per category, not discrete blanks, no tick marks, no implied count. A total box at the end of the row, tabular-figure aligned.

Categories, locked, do not add, remove, or rename. Category 1: Groceries. Category 2: Eating Out and Delivery. Category 3: Transport and Fuel. Category 4: Amazon and Online Shopping. Category 5: Subscriptions. Category 6: Kids Activities and School. Category 7: Kids Clothes and Supplies. Category 8: Household and Home. Category 9: Personal and Health. Category 10: Gifts and Celebrations. Category 11: Fun and Family Outings. Category 12: Everything Else.

Excluded categories, do not include: Rent or Mortgage, Utilities, fixed bills. Reason: the tracker focuses on hidden everyday spending, not predictable obligations; including fixed bills inflates totals until the page feels like a verdict rather than a discovery.

Grand total row: "Everything, added up" plus a total box, outlined in terracotta.

Reflection section, at the bottom. Primary prompt, locked: "Which number surprised you most?" An optional secondary prompt, "What is one spending habit you would like to understand better?", was proposed in review; treat as a candidate only, not yet approved. Recommend leaving it out at launch to protect the one-page constraint.

Footer. BudgetCraft Studio wordmark, working sans, charcoal. A tagline, "Small steps. Clear money decisions.", was proposed in review. This is new, unapproved brand copy; do not treat as locked language until it goes through the COPY APPROVAL RULE. Default to wordmark only until approved. No sales pitch, no product promotion.

## 5. Dimensions

Vertical layout reference, totals 10.0 in live height. Title block: 0.9 in. Method line: 0.4 in. Column header row: 0.3 in. Twelve category rows: 0.59 in each, 7.1 in total. Grand total row: 0.5 in. Reflection prompt: 0.5 in. Footer wordmark: 0.3 in.

Row height of 0.59 in clears the 0.5 in handwriting minimum with margin to spare. A horizontal layout is documented in 06_LEAD_MAGNET_SYSTEM.md section 2 as an alternative but is not required for this build.

## 6. Product renders needed

For the landing page, pin previews, and product listings. Flat: the page straight on, full bleed off, slight drop shadow. Angled: the page at a slight tilt. Tablet frame: the digital PDF shown in a tablet outline. No photography, no props, no illustration.

## 7. Explicitly excluded from this asset

These belong to a future paid product, not this free lead magnet: cover page; monthly overview or income section; savings goal or debt tracker; financial goals or spending limits; weekly planner pages or a separate restart page; a Date, Description, Category, Amount, Method, Notes grid (this is the "spreadsheet" feeling the product promise explicitly rules out); budget categories beyond the 12 locked above; complex instructions beyond the single method line; bright green or deep blue palette.

## 8. Open items pending operator approval

Three copy fragments are new and have not been through the COPY APPROVAL RULE (04_BRAND_VOICE.md section 9): the supporting header line ("Track your everyday spending..."); the optional secondary reflection prompt (recommend against including); and the footer tagline ("Small steps. Clear money decisions."). Everything else in this file is drawn directly from the already-locked 06_LEAD_MAGNET_SYSTEM.md.

## 9. Downstream sequence, unchanged

Approve this build spec, then build the Canva design, then export the printable and tablet PDFs, then replace public/tracker-preview.png and the email download-link placeholders, then build Kit Automation 2037998, then run end-to-end signup QA.
