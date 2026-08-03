# SEO_BLOG_ENGINE.md

> **CANONICAL — this repository is the single home for this file.**
> Adopted 1 August 2026. Exported from an inline paste. Authority is `git log`.
> **Cite specs by name, not number.**
>
> **Both flagged staleness items were already applied** in the source. §15's four
> execution blockers were already struck and closed — Kit live, hex values fixed in
> `BRAND_VISUAL_IDENTITY` §3, Netlify chosen, and "minimum plugin set" already marked
> *void, a WordPress concept that survived the platform override.* No change was needed.
>
> **One correction applied that was not flagged.** §15 items 3 and 5 both stated the domain is
> unregistered. RDAP, 1 Aug 2026: `budgetcraftstudio.com` is **registered** at Squarespace
> Domains II LLC (24 Feb 2026 – 24 Feb 2027) with status **`clientHold`** — the registry has
> pulled it from DNS, which is why it does not resolve. The blocker is reactivation, not
> purchase. Corrected in place; the original wording is in this note.

**Brand:** BudgetCraft Studio
**Status:** **v2 — complete and executable.** Capacity resolved.
**Last updated:** 30 July 2026 · **corrections applied on export 1 August 2026**
**Parent files:** `TARGET_AUDIENCE` · `BRAND_VOICE` · `BRAND_VISUAL_IDENTITY` ·
`LEAD_MAGNET_SYSTEM` · `PINTEREST_CONTENT_ENGINE`

---

## 0. What this file owns

Site structure, URL rules, blog taxonomy, article structure, cadence, internal linking, keyword
rules, the AI writing workflow, and the first six posts.

Not owned here: pin design and boards (`PINTEREST_CONTENT_ENGINE`), tracker and landing page
(`LEAD_MAGNET_SYSTEM`), voice (`BRAND_VOICE`).

**All titles and copy are Claude-drafted, pending approval** per `BRAND_VOICE` §9.

---

## 1. THE GOVERNING RULE

> **BudgetCraft Studio does not scale content before the funnel works.**
>
> The first 90 days optimize one path: Pinterest visitor → free tracker download → email
> relationship. Publishing volume increases only after the conversion path is proven.

Everything below is subordinate to this. The 10 hr/week limit is a permanent business rule, not a
target to grow out of.

**The lesson that produced it, recorded so it isn't relearned:** the error was never choosing
WordPress, hub-and-spoke, Pinterest or a paid product. It was treating every activity as a
simultaneous priority. Four individually defensible "more ambitious" choices compounded into a
15–18 hr/week plan before anyone added them up.

---

## 2. The blog's role

Pinterest traffic stops the day you stop pinning. Search traffic compounds. The blog is the
long-term asset — which is the argument for owning the platform rather than renting it.

**Two jobs, in order:** rank for the phrases Sarah types, and route her to `/free-budget-tracker`.

**Not for:** general money commentary · news · anything that doesn't end at the tracker.

Expect little to nothing from search for three to six months. That is the nature of the asset, not
a failure signal. **Judge Pinterest on 30-day windows and the blog on 6-month windows.**

---

## 3. Phase 1 scope — first 90 days

**Build:** website foundation · free tracker funnel · Pinterest engine · email sequence · six SEO
articles.

**Do not build:** full pillar library · paid product system · membership · large resource center.

Those follow validation.

---

## 4. Weekly allocation — locked at 10 hours

| Activity | Hours |
|---|---|
| Pinterest research, creation, publishing | 3.0 |
| SEO blog article | 2.5 |
| Email management and optimization | 1.0 |
| Lead magnet improvements | 1.0 |
| Website and SEO maintenance | 1.0 |
| Analytics review | 0.5 |
| Future product research notes | 1.0 |
| **Total** | **10.0** |

**Reconciliation note:** `PINTEREST_CONTENT_ENGINE` §11 allocated Pinterest 3.5 hr. This file
supersedes it at 3.0. At 3.0 hr, expect **5–7 fresh pins/week** rather than the 10/week growth
target — the ceiling there stays valid but is not reachable inside this allocation. Product
development also drops from 3.0 hr to 1.0 hr of *research notes only*, consistent with §3.

*(The supersession has since been applied at source: `PINTEREST_CONTENT_ENGINE` §11 now reads 3.0
and marks itself superseded. The 3.5 above is retained as the historical record of what was
changed.)*

---

## 5. Platform and URL rules

**Next.js 15 on Netlify.** Changed 30 July 2026 by operator override, replacing WordPress.org on
SiteGround.

Stack: Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn/ui · Netlify hosting · Kit via a
serverless function rather than an embedded form.

```
budgetcraftstudio.com
├── /                          Home
├── /free-budget-tracker/      Landing page (page, not post)
├── /blog/                     Blog index
├── /spending-trackers/        Category
├── /budgeting-for-beginners/  Category
├── /budget-planners/          Category
├── /money-organization/       Category
└── /about/
```

**Flat post URLs — `/post-name/`, never `/category/post-name/`.** Categories drive navigation and
internal linking, not the URL path. Recategorizing a post breaks category-based URLs, and
reorganization in year one is likely.

**Dependency discipline** replaces plugin discipline. Every package is something to upgrade, audit
and debug. Keep the tree minimal — the site is a landing page and a blog, not an application.

**Blog publishing is the real cost of this change.** WordPress was chosen because the blog is the
compounding asset. In this stack, publishing means writing MDX, committing to git and redeploying.
At two posts a month that is workable if git is comfortable; if it isn't, solve it before month two
rather than letting the cadence quietly slip. A headless CMS is the usual answer and adds another
service to the stack.

**No WooCommerce.** `LEAD_MAGNET_SYSTEM` §10 found Kit and MailerLite can both sell and deliver
digital products. A full ecommerce stack for one $9 sheet and one $29 system is disproportionate
surface area. Revisit only when the catalog justifies it.

**About page framing** — mission, not biography. Per `BRAND_VOICE` §1: *"BudgetCraft Studio creates
simple financial organization tools designed to make everyday money management easier."* Never
*"I created this because…"*

---

## 6. Taxonomy — one structure, mirrored

Blog categories mirror the four Pinterest boards in `PINTEREST_CONTENT_ENGINE` §5. A post's
category tells you which board its pins go to.

| Category | Slug | Board |
|---|---|---|
| Spending Trackers | `/spending-trackers/` | Spending Trackers for Beginners |
| Budgeting for Beginners | `/budgeting-for-beginners/` | Budgeting for Beginners |
| Budget Planners & Printables | `/budget-planners/` | Monthly Budget Planners & Printables |
| Money Organization | `/money-organization/` | Simple Money Organization |

**US spelling is mandatory** (`BRAND_VOICE` §7). *Organization*, never *organisation* — in category
names, slugs, titles and body copy. This is a keyword issue: US searchers type "organize."

---

## 7. Cadence — locked

**Months 1–3: two posts per month. Six articles total. 1,200–1,800 words each.**

Down from four at 1,500–2,000. Quality over volume, and it fits 2.5 hr/week honestly rather than
optimistically.

Every article: search-focused · connected to a Pinterest board · includes the free tracker CTA.

---

## 8. Article skeleton — use every time

A fixed structure turns writing into filling rather than composing.

1. **H1** — keyword-first, US spelling
2. **Recognition opening**, 2–3 sentences — the specific scene, per `BRAND_VOICE` §3. Never "in
   today's world," "we all know," or "in this article we'll explore"
3. **One line** on what the post covers
4. **Three to five H2 sections**, one idea each
5. **One worked example with real numbers** — specific beats generic
6. **Inline tracker CTA**, after the problem is established, never before
7. **FAQ block**, 3–4 questions
8. **One small action** she can take today
9. **Closing CTA** — download the tracker

**Voice:** `BRAND_VOICE` applies in full. Both banned-phrase groups checked every draft — naming-
the-judgment and founder voice (`BRAND_VOICE` §8).

---

## 9. The first six articles

| # | Working title | Category | Intent |
|---|---|---|---|
| 1 | How To Find Your Hidden Spending | Spending Trackers | Problem awareness |
| 2 | How To Start Budgeting When You're Completely New To It | Budgeting for Beginners | Beginner education |
| 3 | The 15-Minute Weekly Money Routine For Busy People | Budgeting for Beginners | Consistency |
| 4 | Why Budget Spreadsheets Feel Overwhelming (And What To Do Instead) | Spending Trackers | Alternative solution |
| 5 | Simple Budget Categories For A Beginner Monthly Budget | Budget Planners & Printables | Implementation |
| 6 | How To Prepare Your Money Before A New Month | Money Organization | Planning |

All six CTA to the free tracker.

### ⚠️ Title 1 — do not use the product name

The original title was *"Where Did My Money Go? How To Find Your Hidden Spending."* That is the
exact lead magnet name and the exact landing page target phrase.

**Two problems, one immediate:**

**Search:** the landing page targets *where did my money go printable free*, the post would target
the bare phrase. Those are close enough that Google may conflate them and pick one.

**Pinterest, and this is the faster failure:** pins for the post and pins for the landing page
would carry the *same headline* into the same feed for the same query.
`PINTEREST_CONTENT_ENGINE` §3 requires the keyword to be visible on the pin, so both sets of pins
would look and read alike — competing with each other for the same tap, in a system already
limited to 5–7 pins/week.

**Rule: the brand phrase belongs to the landing page only.** Blog titles use adjacent
informational phrasing — *how to find hidden spending*, *where does my money go each month* —
never the product name.

### Note on article 3

*The 15-Minute Weekly Money Routine* teaches the paid system's promise. In Phase 1 that's
permitted — the post teaches, the CTA is the tracker. Same resolution as Angle 3 in
`PINTEREST_CONTENT_ENGINE` §4. Do not let the CTA drift toward a product that doesn't exist, and
do not imply one is coming on a date.

---

## 10. Internal linking — pillars deferred

**Hub-and-spoke remains the target structure. It is not built yet.**

**Now:** posts link laterally to each other (2–4 in-body, descriptive anchor text) and to
`/free-budget-tracker` — exactly one inline CTA plus the closing CTA. Category pages do light duty.

**After six articles:** review Pinterest clicks, search impressions, email signups and keyword
performance, then build pillars **around proven interest** rather than assumed interest. A pillar
written after six posts summarizes real content; one written first is a guess.

### Candidate pillars and their clusters

| Pillar | Cluster |
|---|---|
| Spending Awareness | where did my money go · spending tracker · hidden expenses · spending habits |
| Beginner Budgeting | budget categories · monthly budget · beginner budget |
| Money Organization | bills · subscriptions · financial routines |
| Printable Tools | budget planner · trackers · worksheets |

**Pillar spec when built:** 2,500–3,500 words, targets the cluster's head phrase, links down to
every post in its category, updated on each new publish. Posts link up once, early.

---

## 11. Keyword rules

### Intent separation — hard rule

**Two pages never target the same intent.**

| Page | Intent | Query type |
|---|---|---|
| `/free-budget-tracker/` | Transactional — download | *where did my money go printable free* |
| Blog | Informational — teach, then introduce the tracker | *how to find hidden spending* |

Before publishing anything, check the target phrase against every existing page. One page, one
primary query. See §9 for why title 1 was changed.

### Sourcing

Pinterest autocomplete (method in `TARGET_AUDIENCE` §8) · Google autocomplete · Google Trends ·
Search Console once data exists. No paid keyword tool named, so none assumed.

---

## 12. AI workflow

**Step 1 — Keyword.** Human chooses. At two posts a month there is no room for a wrong bet.

**Step 2 — Draft.** AI produces outline, FAQ, examples, meta description against §8.

**Step 3 — Human edit.** Non-negotiable. Check: would Sarah understand it without looking anything
up · is it practical · supportive without performing warmth · both banned-phrase groups stripped ·
**financial advice stripped**.

**Step 4 — Repurpose.** One article → 5 pins (time counted in §4) · 1 newsletter · notes toward
future products.

Worked example — article 2 produces: five pins (beginner budget checklist · first budget steps ·
simple budget categories · budget mistakes · free tracker CTA), one newsletter (*why budgets fail
after week two*), and product notes (beginner budget system, weekly routine page, category
worksheet).

### The financial-advice strip — every draft, no exceptions

All five of these sound like helpful blog content. All five are advice, forbidden by
`TARGET_AUDIENCE` §13.

1. **Percentages and benchmarks** — *"save 20% of your income," "groceries should be 10–15%"*
2. **Prescriptive "you should"** about money decisions
3. **Debt payoff ordering** — snowball, avalanche, which debt first
4. **Investing, retirement accounts, credit score tactics** — excluded by `TARGET_AUDIENCE` §12
5. **Emergency fund sizing** — *"three to six months of expenses"*

**If an external AI tool drafts posts it has no access to these files.** Paste `BRAND_VOICE` §8's
banned lists and the five patterns above into the prompt every time.

---

## 13. Drift rules

Never: get-rich content · investing advice · luxury lifestyle finance · shame-based spending
content · *"stop buying coffee"* · business or freelance finance (`TARGET_AUDIENCE` §12).

**Crisis handling** (`TARGET_AUDIENCE` §12): where content brushes against genuine financial
crisis, signpost to real help and stop. Verify any named resource is current before publishing.

Every post passes `TARGET_AUDIENCE` §13: *will this help Sarah feel more confident, organized, or
in control of her money today?*

---

## 14. Measurement

Primary: **email signups from blog traffic.** Secondary: organic impressions, clicks, average
position, and which posts route best to the tracker.

---

## 15. Open questions

### Closed since v2 was written

1. ~~Email platform and checkout~~ — **Kit, live.** Form and tag working; Gumroad deferred to
   Phase 2.
2. ~~Canva brand kit hex values~~ — **fixed** in `BRAND_VISUAL_IDENTITY` §3, with contrast ratios.
3. ~~Hosting~~ — **Netlify.** Domain **registered but suspended** — see below.
4. ~~Minimum plugin set~~ — **void.** A WordPress concept that survived the platform override;
   superseded by dependency discipline in §5.

### Still open

5. **Domain registered but on `clientHold`** *(corrected on export — previously recorded as "not
   registered")*. `budgetcraftstudio.com` is registered at Squarespace Domains II LLC through
   24 Feb 2027; the registry has pulled it from DNS, so it does not resolve. Until the hold
   clears it still blocks canonical URLs, Open Graph and the sitemap — but the fix is
   **reactivation, not purchase.**
6. **Prata and Work Sans availability in Canva** — `BRAND_VISUAL_IDENTITY` §12. Blocks the tracker
   and all pin templates. **Binary:** if present, the 0.130 in column clearance in
   `TRACKER_CANVA_BUILD_SPEC` §4 holds; if absent, the substitute face has different metrics and
   that measurement is void.
7. **Idea Pin status and description character limit** — `PINTEREST_CONTENT_ENGINE` §13.
8. **All copy unapproved** — `BRAND_VOICE` §9. *(Exception: the five welcome emails were approved
   in commit `6cb6d43`.)*
9. **Keyword expansion not yet run** — `PINTEREST_CONTENT_ENGINE` §2. First task before any pin.

### Critical path

Visibility flip → push → merge → sender `from_name` → Canva font check → tracker built → PDFs
hosted → sequence URLs wired → automation activated → end-to-end test → first pin.
