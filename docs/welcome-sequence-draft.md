# Welcome Sequence — Draft Copy

**Status: DRAFT — pending operator approval.** Not published, not in Kit.
Per the COPY APPROVAL RULE (04_BRAND_VOICE.md §9, referenced in 06_LEAD_MAGNET_SYSTEM.md), this copy is a reference candidate, not settled brand language. Do not load into Kit until approved.

**Spec of record:** 06_LEAD_MAGNET_SYSTEM.md §8 (sequence) and §9 (tagging), cross-checked against 10_EMAIL_MARKETING_SYSTEM.md §5 and 00_LOCKED_DECISIONS.md §13. Voice rules from 04_BRAND_VOICE.md. Twelve categories from 06 §3 / 00 §5.

**Structure:** five emails, Days 0 / 1 / 3 / 5 / 7, evergreen (not calendar-gated). Day 7 uses the **Phase 1 (no-offer)** version, because the paid Budget System is Phase 2 and does not exist yet (06 §11).

**Sender:** BudgetCraft Studio (never "Team"). **Reply-to:** must reach a monitored inbox (Days 3 and 7 invite replies).

**Placeholder:** every tracker link below is `REPLACE_WITH_TRACKER_DOWNLOAD_URL` — set once the final hosted PDF exists. Survey options marked *(link)* are link-click tags; their URLs are also placeholders.

---

## Email 1 — Day 0 — Deliver

- **Send:** immediately on the `budgetcraft-leadmagnet` trigger.
- **Subject:** Your tracker is here
- **Preview text:** The tracker first, and one small question at the end.

**Body:**

Here is your tracker.

[Download your tracker](REPLACE_WITH_TRACKER_DOWNLOAD_URL)

It is one page. Print it on Letter or A4 paper, or open it on a tablet — either works, and there is no setup.

There is nothing to fill in tonight. If you want to do one thing, open your banking app and scroll back through last month. You do not need to write anything down yet. Just look.

More on how to use the page in a day or two.

Quick question, only if you feel like it. How do you usually use printables like this one?

- I print them at home *(link → planner_format_print)*
- I use them on my tablet *(link → planner_format_digital)*
- I use them on my computer *(link → planner_format_computer)*
- I print them somewhere else *(link → planner_format_elsewhere)*
- I'm not sure yet *(link → planner_format_unknown)*

Either click the one that fits or reply in a line.

BudgetCraft Studio

> **Ordering is a hard requirement (06 §8):** the download comes first and prominent; the survey sits below, quieter, as a closing question — never a competing button. This format survey answers the open "does she print?" question (06 §13); it is not optional.
> **Survey wording:** the customer-facing question uses "printables like this one" to match the product; the tags remain `planner_format_*` (internal names, unchanged).

---

## Email 2 — Day 1 — Start

- **Send:** 2 days after Email 1 (Day 1... i.e., +1 day from signup; see delay note below).
- **Subject:** Where to start
- **Preview text:** One category, not the whole month.

**Body:**

You do not need to make this perfect.

Open your banking app, look back through your recent spending, and start with one category. Just one — groceries is an easy first one.

Write each amount on the line for that category as you find it. Do not sort anything first, and do not add anything up yet.

Some days you will write one amount. Some days several. A missed day does not break anything — pick it up whenever you remember.

BudgetCraft Studio

> **Goal (06 §8):** prevent abandonment; prompt one small action. No selling. Addresses the real enemy — the blank page (03 §7, 04 §3 recognition rule).

---

## Email 3 — Day 3 — Reflect

- **Send:** 2 days after Email 2.
- **Subject:** What surprised you
- **Preview text:** A question, not a task.

**Body:**

By now a few categories probably have numbers next to them.

Here is the only question for today: what surprised you most?

Not the biggest number — the one you did not expect. It is usually a small amount that happened more often than it felt like at the time.

You do not have to do anything with it. Noticing is the whole point.

If you want to, reply and tell us which one it was. We read every reply.

BudgetCraft Studio

> **Goal (06 §8):** create the insight moment; invite a reply (replies help deliverability and reveal what she cares about). No selling. "reply and tell us" uses brand "we," not "me" (04 §1).

---

## Email 4 — Day 5 — Bridge

- **Send:** 2 days after Email 3.
- **Subject:** The part that's harder
- **Preview text:** Seeing it is step one.

**Body:**

Seeing where your money went is the first step. It is also the easier one.

The harder part is having a simple routine you can keep coming back to — something that survives a busy week, a missed day, and the temptation to start over from scratch.

That is a different job than a single tracker does, and it is why BudgetCraft Studio exists.

For now, keep going with the page you have. Two more days of noticing is plenty.

BudgetCraft Studio

> **Goal (06 §8):** name the gap between tracking and having a routine. **Soft mention only** — no pitch. **Voice check (06 §8):** never "this is why I created…" (founder voice, 04 §1). Draft uses the approved form "it is why BudgetCraft Studio exists." No date implied.

---

## Email 5 — Day 7 — Present (Phase 1, no offer)

- **Send:** 2 days after Email 4.
- **Subject:** What would help most next
- **Preview text:** One question to close.

**Body:**

That is the tracker — one page, twelve categories, and whatever the totals showed you.

There is nothing to buy here and nothing else to sign up for. One last question, and it genuinely shapes what we work on next:

What part of budgeting would you most like support with?

- A complete monthly budget system *(link → wants_budget_system)*
- A simple bill tracker *(link → wants_bill_tracker)*
- A savings challenge *(link → wants_savings_challenge)*
- A weekly money routine *(link → wants_weekly_routine)*
- Something else *(link → wants_other)*

Click the one that fits, or reply in your own words.

Whatever you choose tells us where to put our attention. That is the only reason we're asking.

BudgetCraft Studio

> **Phase 1 (06 §8, §11):** the Budget System is Phase 2 and does not exist yet, so Day 7 closes with a **product-direction survey, not an offer.** Tags: `wants_budget_system`, `wants_bill_tracker`, `wants_savings_challenge`, `wants_weekly_routine`, `wants_other`.
> **Hard constraint:** do not imply a product is coming on a date — no "launching soon," no "watch this space." The draft avoids both; the closing question is framed as validation, not a launch promise.
> **Phase 2 swap (future):** replace this with the offer, led by cost/effort per 04 §6 — not built here.

---

## Delays (relative), for the Kit automation builder

The automation trigger is the `budgetcraft-leadmagnet` tag. Steps, each delay measured from the previous email:

| Email | Day (from signup) | Delay before this email |
| --- | --- | --- |
| 1 — Deliver | 0 | none (immediate on trigger) |
| 2 — Start | 1 | +1 day |
| 3 — Reflect | 3 | +2 days |
| 4 — Bridge | 5 | +2 days |
| 5 — Present | 7 | +2 days |

> Building these steps inside Kit's Visual Automation (2037998) is a **manual operator action** (SaaS dashboard), not a repo change. This file only supplies the approved-pending copy and timing.

## Brand-voice conformance (applied to all five)

- "we / you" voice; no first-person founder "I" (04 §1, §8).
- No exclamation marks, no emoji, no all-caps emphasis (04 §7).
- US spelling, internationally neutral idiom, no currency symbols (04 §7).
- No income claims, guaranteed savings, or financial advice (03 §13, 06 §1).
- Absence of judgment is demonstrated, never stated — no "no judgment / no shame" (04 §8).
- No banned phrases (financial freedom, master your money, etc. — 04 §8).
- No over-reassurance stacking ("easy," "math-free," "don't worry") (04 §5).
