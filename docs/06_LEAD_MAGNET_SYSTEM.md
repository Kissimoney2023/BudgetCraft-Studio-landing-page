# 06_LEAD_MAGNET_SYSTEM.md

> **CANONICAL — this repository is the single home for this file.**
> Adopted 1 August 2026. The two copies in Google Drive are **archive-only and
> superseded**; this version supersedes both and was not chosen by comparing them.
> Do not reconcile against Drive, and do not settle conflicts by modification date.
> Authority is `git log` on this path.
>
> **Cite specs by name, not number** — `LEAD_MAGNET_SYSTEM §8`, not `06 §8`. See
> `CLAUDE.md` and `docs/00_LOCKED_DECISIONS.md` §18.

**Brand:** BudgetCraft Studio
**Status:** v1 — complete. Platform-dependent sections marked TBD.
**Last updated:** 30 July 2026
**Parent files:** `03_TARGET_AUDIENCE.md` · `04_BRAND_VOICE.md` · `05_BRAND_VISUAL_IDENTITY.md`

---

## 0. What this file owns

The free tracker itself, its page specification, the landing page, the thank-you page, the welcome email sequence, opt-in mechanics, tagging, and launch sequencing.

**It does not own** pin design or keyword strategy (`08`), the paid system's contents (`07`), or voice rules (`04`).

**All copy in this file is Claude-drafted and pending operator approval** per the COPY APPROVAL RULE in `04` §9. It is a reference candidate, not settled brand language.

---

## 1. Identity and promise

### Name

> **Where Did My Money Go?**
> *A Beginner-Friendly Spending Tracker*

Stays close to Sarah's actual search language. `03` §8 records *"where did my money go printable / tracker"* as keyword priority 1 and *"budget for beginners printables"* as priority 2 — both are in the name.

**Rejected:** Financial Awareness Framework · Personal Cash Flow Assessment Tool · Spending Optimization Worksheet. She is searching for the question she already has.

**Note on stacking:** "beginner-friendly" survives because it is a search term. Do not add "simple," "easy," or "math-free" on top of it — that tips into the over-reassurance banned in `04` §5.

### Core promise

> **Find out where your money goes. No spreadsheet required.**

The promise ends at the spreadsheet. Per `04` §8, the absence of judgment is never stated — it is delivered by what the page omits.

### Transformation

| Before | After |
|---|---|
| "I earn money, but I don't understand where it disappears." | "I can see my spending clearly, and I know which number surprised me." |

Emotional arc: **confusion → awareness → curiosity → readiness.**

The outcome is *awareness*, not financial transformation.

### What it must never promise

Take control of your finances instantly · save hundreds every month · fix your budget problems · become debt-free · master your money. Per `03` §13: no income claims, no guaranteed savings, no financial advice.

### Success metric

Sarah thinks: **"That was easier than I expected."**
Not: "That taught me everything about budgeting."

---

## 2. Page specification — Canva-ready

### Format

| | Printable PDF | Digital PDF |
|---|---|---|
| Size | **Master 8.27 × 11 in** — Letter/A4 intersection. Exports to both | Identical geometry |
| Ground | **Unprinted paper white** | **Cream** |
| Margins | 0.5 in all sides | 0.5 in all sides |
| Live area | 7.27 × 10 in | 7.27 × 10 in |
| Pages | 1 | 1 |

**One layout, two exports.** Only the ground colour changes. Identical geometry means one Canva design serves both files, which halves the build and eliminates version drift. Per `05` §3, cream cannot be printed — it is screen-only.

### Vertical layout — totals 10.0 in

| # | Element | Height |
|---|---|---|
| 1 | Title block | 0.9 in |
| 2 | Method line | 0.4 in |
| 3 | Column header row | 0.3 in |
| 4 | **12 category rows** | **0.59 in each = 7.1 in** |
| 5 | Grand total row | 0.5 in |
| 6 | Reflection prompt | 0.5 in |
| 7 | Footer wordmark | 0.3 in |

Row height of 0.59 in clears the 0.5 in handwriting minimum in `05` §5 with margin to spare.

### Horizontal layout — totals 7.27 in

| Column | Field | Width |
|---|---|---|
| A | Category label | 2.15 in |
| B | **Open workspace** | 4.22 in |
| C | Total box | 0.9 in |

### Row construction — critical

**Column B is one continuous ruled line, not discrete blanks.**

No tick marks. No slots. No implied count. A row of five blanks tells Sarah there are five purchases, and groceries in a month is eight to twelve trips — she runs out of space on the first category she fills in, which is a failure landing at the worst possible moment.

Five inches holds roughly nine handwritten amounts at normal pen size. She writes along the line at whatever spacing suits her, then totals into column C.

**The label sits inline, left-aligned, workspace to its right.** Label-above-workspace needs two lines per category, roughly 10.8 in, and does not fit. Landscape orientation is worse, not better — it gains width but drops rows to 0.38 in.

### Field-by-field content

| Field | Content |
|---|---|
| Title | *Where Did My Money Go?* |
| Subtitle | *A Beginner-Friendly Spending Tracker* |
| Month field | `Month: ______________` — undated per `04` §11 |
| Method line | See §4 |
| Column header A | *Category* |
| Column header B | *What you spent* |
| Column header C | *Total* |
| Rows 1–12 | See §3 |
| Grand total row | *Everything, added up* + total box |
| Reflection prompt | *Which number surprised you most?* |
| Footer | BudgetCraft Studio wordmark, working sans, charcoal |

### Typography — per `05` §4

- **Title:** display serif, large (~36pt). The one place it appears on this page.
- **Everything else:** working humanist sans. Column headers, category labels, method line, prompt, footer.
- **Total boxes:** working sans with **tabular figures**, so amounts align vertically in column C.

### Colour — per `05` §3

- Ground: paper white (print) / cream (digital)
- All text: deep charcoal
- **Terracotta:** the rule under the title, and the outline of the grand total box. Nothing else.
- Row rules: light charcoal at low weight — visible after draft-quality printing, per `05` §5
- Muted olive: optional hairline between the category block and the grand total row

**No red. No colour coding. No shading that implies good or bad.** Colour carries no meaning (`05` §3).

### What the page must not contain

Budget limits · recommended percentages · savings targets · debt goals · "you should spend less" · category benchmarks · scores · streaks · deficit totals in bold · red anything · a blank "add your own category" row.

Those belong to the paid system, or nowhere.

### Product renders — per `05` §8

The page is also the entire visual asset library. Three renders needed:

1. **Flat** — the page straight on, full bleed off, slight drop shadow. For landing page and pin previews.
2. **Angled** — the page at a slight tilt. For product listings.
3. **Tablet frame** — the digital PDF shown in a tablet outline. For the format-agnostic message.

No photography, no props, no illustration.

---

## 3. Category list — locked, 12

| # | Category |
|---|---|
| 1 | Groceries |
| 2 | Eating Out & Delivery |
| 3 | Transport & Fuel |
| 4 | Amazon & Online Shopping |
| 5 | Subscriptions |
| 6 | Kids Activities & School |
| 7 | Kids Clothes & Supplies |
| 8 | Household & Home |
| 9 | Personal & Health |
| 10 | Gifts & Celebrations |
| 11 | Fun & Family Outings |
| 12 | Everything Else |

### Construction notes

**Amazon gets its own row.** `03` §2 names Amazon and online retailers specifically. Folding it into general shopping hides the exact leak she came to find — small amounts, frequently, easy to miss.

**Rent, mortgage and utilities are deliberately absent.** Fixed bills aren't where the mystery lives, and including them inflates the totals until the page feels like a verdict rather than a discovery.

**"Everything Else" is a named category, not a blank.** Keeps zero-configuration intact (`03` §7) while giving her somewhere for the odd item.

**"Fun & Family Days Out" is non-negotiable.** Its presence signals that enjoyment isn't the problem being diagnosed. A tracker with no fun category implies fun is the leak.

**Category names stay neutral.** Never *Dining Mistakes*, never *Unnecessary Spending*, never *Wants vs Needs*.

**12 is the number.** 13 fits. 14 is the ceiling from `05` §5 and starts eating the reflection prompt. Each addition costs writing space, and the binding constraint is helping her *finish* the page.

---

## 4. The method line — locked

> **Open your banking app and scroll back through last month. Write each amount in its row as you go, then add up each line.**

### Why this is on the page and not in the instructions

A total column means Sarah arrives needing totals she does not have. Nothing else on the sheet helps her get from a hundred-odd transactions to "groceries: $612" — and twelve empty boxes with no method is the blank-spreadsheet failure from `03` §7 in a friendlier typeface.

One sentence turns the sheet from a form into a process. It also matches her real context from `03` §3: phone in hand, evening, kitchen table. **Phone, page, pen.**

At one page there is no room for an instruction page, and `05` §5 requires the page to be self-evident. This line is how that requirement is met.

### Honest note

The tracker asks real effort of her. That is correct — effort spent is what makes the number land, and the number landing is what makes the paid system make sense.

---

## 5. Landing page

**Primary conversion asset.** One job: get Sarah the tracker. No shop links above the fold, no competing navigation, no choices.

### Structure

**Section 1 — Recognition**
Headline: *Find out where your money goes without complicated spreadsheets.*
Supporting: *A beginner-friendly spending tracker to help you notice your spending patterns.*

**Section 2 — Show the resource**
Flat render + tablet render. Answers *"is this what I was looking for?"* in seconds.

**Section 3 — Three steps**
1. Download your free tracker
2. Look through your recent spending
3. Notice what surprises you

**Section 4 — Signup**
First name (optional) · Email (required)
Button: **Send Me The Free Tracker**

**Rejected button copy:** Claim your financial freedom · Start your wealth journey · Unlock your money potential. All three are in the banned register in `04` §8.

### Not permitted

Exit pop-ups · countdown timers · discount pressure · urgency language · multiple pop-ups.

### Pop-up decision — no pop-up at launch

The brand promise is *"let's make this easier."* An interruption while she is trying to understand her money contradicts it. Possible future test: a gentle delayed invitation once traffic exists. Not at launch.

---

## 6. Blog's role

The blog is **not** the primary conversion page. Its job is capturing search traffic over time, per the model in `03`.

Permitted placements: inline CTA after the problem is explained · end-of-post CTA.
CTA copy: *Download the free spending tracker and see your own numbers.*

Blog and landing page do not compete. Blog teaches, landing page converts.

### Funnel

```
Pinterest pin
      ↓
SEO blog article  ─or─  direct to landing page
      ↓
Lead magnet landing page
      ↓
Free tracker delivery
      ↓
5-email welcome sequence
      ↓
Complete Budget System ($19–$39)
```

---

## 7. Thank-you page

One job: **turn a stranger into a trusted subscriber.** No offer.

**Confirmation:** *Your "Where Did My Money Go?" tracker is ready.*

**Download button:** *Download Your Tracker*

**The tonight instruction — closes the print-friction gap:**

> *You can print the tracker whenever you're ready. For tonight, just open your banking app and scroll back through your recent spending. Start noticing the patterns.*

### Why this line matters

The method line assumes she prints. At 9pm on her phone she probably won't — she'll download with the intention of printing later, and "later" is where `03` §4's *"I always start, but I never finish"* lives. The tonight instruction gives her something completable in the state she is actually in, and serves print and digital users identically.

**Do not write "this week."** It is where good intentions go to die, and the thank-you page is the first opportunity to disprove her core belief.

### Not permitted

Countdown timer · limited-time discount · "before you download, grab this" · pop-up offer · upgrade prompt.

**Reasoning, recorded:** the free tracker is the first trust exchange. `03` §11 says her live objection is *"why pay when free printables exist?"* An immediate ask reads as the free thing having been bait — an expensive first impression to buy for a few dollars.

### The cost of this choice, booked honestly

Trust-first means the first sale is a week away and **email deliverability becomes load-bearing.** A thank-you-page offer converts on a page you control; a sequence converts through spam filters, promotions tabs, and a woman who may not remember you by Thursday. Email quality is now part of the product, not a nice-to-have.

---

## 8. Welcome email sequence

Five emails, Day 0 to Day 7. Evergreen — not calendar-gated.

| Day | Email | Goal | Selling |
|---|---|---|---|
| 0 | **Deliver** | Get her the tracker + run the survey | None |
| 1 | **Start** | Prevent abandonment. One small action | None |
| 3 | **Reflect** | Create the insight moment | None |
| 5 | **Bridge** | Name the gap | Soft mention |
| 7 | **Present** | Offer the system | Yes |

### Day 0 — Deliver

Download link first, prominent, above everything else.

Then the survey, as a closing question rather than a competing button:

> *Quick question — how do you usually use planners?*
> I print them at home · I use them on my tablet · I use them on my computer · I print them somewhere else · I'm not sure yet

**Ordering is a hard requirement.** Two CTAs in one email means one loses, and it must not be the download. Survey below, visually quieter, phrased as conversation rather than research.

This survey is how the open printer question in `03` §15 gets answered. It is not optional.

### Day 1 — Start

Addresses the real enemy: the blank page.

> *You don't need to make this perfect. Open your banking app, look back through your recent spending, and start with one category.*

### Day 3 — Reflect

> *What surprised you most?*

Invites a reply. Replies help deliverability and tell you what she actually cares about.

### Day 5 — Bridge

> *Seeing where your money went is the first step. The harder part is having a simple routine you can keep coming back to.*

Soft mention only. **Voice check:** never *"this is why I created…"* — that is founder voice, banned by `04` §1. Use *"it's why BudgetCraft Studio exists"* or *"it's why we built the budget system."*

### Day 7 — Present

**Two versions. Which one runs depends on whether the paid system exists yet.**

#### Phase 1 (launch) — no product exists

`06` §11 puts the budget system in Phase 2, so at launch there is nothing to present. Day 7 closes with a question instead of an offer:

> **What would help you most next?**
> A complete monthly budget system · A simple bill tracker · A savings challenge · A weekly money routine · Something else

This replaces the waitlist that was considered and rejected in `07` §4. It collects the same product-direction signal without creating a second funnel or a promise to maintain, and it answers the fourth validation question in §11 — *what will she actually pay for?* — before anything is built.

Tag the answers: `wants_budget_system`, `wants_bill_tracker`, `wants_savings_challenge`, `wants_weekly_routine`, `wants_other`.

**Do not imply a product is coming on a date.** No "launching soon," no "watch this space." The question is a question.

#### Phase 2 — the system exists

Swap in the offer. Positioned against Objection 1 in `03` §11 — not doubt about the system, doubt about herself.

> Not: *"Buy a better budget planner."*
> Instead: *"A simple money routine you can come back to any week."*

Leads with **cost/effort**, per the promise hierarchy in `04` §6: fifteen minutes a week, undated pages, a restart page.

**Survey spacing note.** Two survey questions now exist in one sequence — planner format on Day 0, product direction on Day 7. Keep them at opposite ends. Do not add a third.

### Why 7 days

Sarah's problem is follow-through, not knowledge. **The sequence must model the behaviour the brand teaches** — small steps, consistent rhythm, no overwhelm. A three-week gap would enact the exact pattern the brand exists to fix.

### On calendar timing

`03` §3 concentrates arrivals in the last week of the month through the 4th, which means a 7-day sequence lands the ask around the 1st to the 11th — while the shortfall is still recent. Longer sequences drift into mid-month when she no longer feels the problem. Pinterest and blog *publishing* leans into the month-end peak; the email sequence stays evergreen.

---

## 9. Tagging

| Tag | Set by |
|---|---|
| `lead_source_pinterest` | Opt-in form or landing page variant |
| `lead_source_blog` | Inline blog form |
| `planner_format_print` | Survey link click |
| `planner_format_digital` | Survey link click |
| `planner_format_computer` | Survey link click |
| `planner_format_elsewhere` | Survey link click |
| `planner_format_unknown` | Survey link click |

---

## 10. Platform requirements — TBD

**Email platform: TBD · Plan: TBD · Checkout/payment: TBD**

Do not write platform-specific instructions until these are chosen.

### Minimum capability checklist

1. **One automated sequence** of five emails, triggered on signup
2. **Link-triggered tagging** for the survey and lead source
3. **File delivery** — hosted PDF in-platform, or a download link on the site
4. **Basic analytics** — opt-ins, opens, clicks, and later, sales

### Market snapshot, 30 July 2026 — verify before deciding

Third-party sources conflict on paid pricing; check official pages directly.

| | Free automation | Free subscriber cap | Sells digital products |
|---|---|---|---|
| **Kit** | 1 sequence — meets the minimum, nothing spare | 10,000 | Yes, with a transaction fee |
| **MailerLite** | 3 automations | 250 *(cut from 500 on 1 July 2026)* | 1 digital product |
| **beehiiv** | **None on free** | 2,500 | No monetisation on free |

**beehiiv is ruled out at launch** — no free automation means no welcome sequence and no survey, which are both non-negotiable here.

**Note on fees at this price point.** A 3.5% + $0.30 transaction fee is around 6.8% of a $9 sale. Less material on a $29 system, but worth knowing before assuming the email tool can also be the shop. Collapsing email and checkout into one tool has real value for a solo operator.

---

## 11. Launch sequencing

### Day 7 offer: Complete Budget System, $19–$39

Rung 1 ($7–12 single-purpose sheets) is **not** in the initial sequence.

**Why the flagship is the first paid offer.** Emails 3 to 5 build one arc: *you can see where it went, now you need a routine you can maintain.* A bill tracker doesn't answer that. Selling a single sheet at the end of that arc wastes a week of emotional setup.

**Rung 1 is delayed, not cancelled.** Future examples — bill tracker, savings challenge, spending audit, subscription tracker. Their role is **Pinterest discovery**: someone searching *"monthly bill tracker printable"* finds BudgetCraft Studio. They are not the conversion path from the lead magnet.

### Revised validation logic

The earlier suggestion in `03` §9 — ship a cheap sheet first to prove the funnel — was half right. A cheap sheet proves *purchase behaviour*, but the likeliest failure is upstream of that.

The real first questions:

1. Can Pinterest bring qualified visitors?
2. Will they exchange an email for the tracker?
3. Will subscribers engage with the emails?
4. Will they trust BudgetCraft Studio enough to buy?

**All of 1–3 can be tested with zero paid products.** If pins don't produce opt-ins, no price point saves you.

### Build phases

**Phase 1 — validate the audience.** Free tracker · landing page · Pinterest content system · email sequence. Measure impressions, clicks, landing page conversion, email engagement.

**Phase 2 — build the core offer.** Complete Budget System, $19–$39: monthly budget planner, weekly money check-in, category planning, bill organisation, savings planning, restart system. Spec belongs in `07`.

**Phase 3 — expand the ladder.** Rung 1 sheets · $49–99 bundles · $10–15/month membership.

---

## 12. Core principle

The lead magnet does not exist to make a quick sale. It exists to prove three things:

1. Sarah will trust BudgetCraft Studio.
2. Sarah will complete a small money action.
3. Sarah wants help building a repeatable system.

> **The free tracker is the diagnosis. The budget system is the transformation.**

---

## 13. Open questions

### Blocking

1. **Email platform, plan and checkout.** §10. Nothing mechanical can be built until chosen.

### Answered by launch, not before

2. **Does Sarah print?** The Day 0 survey answers it. Do not design around a guess.
3. **Opt-in conversion rate.** Determines whether Phase 2 is worth building.

### Inherited

4. **All copy in this file is unapproved** (`04` §9).
5. **Exact hex values and typefaces** still unfixed (`05` §12).
6. **Pin headline typeface** still open (`05` §12) — affects `08`.
7. **Rung 1 timing** — Phase 3, no date.
