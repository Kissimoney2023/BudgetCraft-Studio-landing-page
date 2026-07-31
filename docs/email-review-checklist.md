# Welcome Sequence — Review Checklist

Operator review workflow for the five drafted welcome emails in `welcome-sequence-draft.md`.
Mark **Status** as `Draft` → `Approved` → `Published` as each email moves through review and into Kit.
Nothing here is in Kit yet. Copy is unapproved until the operator signs off (04 §9).

**Brand-voice checklist (applies to every email):**
`we/you voice · no founder "I" · no exclamation marks · no emoji · US spelling · neutral idiom · no currency symbols · no income/savings claims · judgment demonstrated not stated · no banned phrases · no over-reassurance`

---

## Email 1 — Day 0 — Deliver

- **Subject:** Your tracker is here
- **Preview text:** The tracker first, and one small question at the end.
- **Goal:** Deliver the tracker; run the format survey. No selling. (06 §8)
- **Primary CTA:** Download your tracker (must be first and most prominent).
- **Expected reader action:** Download the PDF; optionally answer the format survey.
- **Links used:** `REPLACE_WITH_TRACKER_DOWNLOAD_URL` (download); 5 survey links → `planner_format_print / _digital / _computer / _elsewhere / _unknown`.
- **Brand-voice check:** [x] pass — plus confirm download-before-survey ordering (06 §8 hard requirement).
- **Status:** Approved

## Email 2 — Day 1 — Start

- **Subject:** Where to start
- **Preview text:** One category, not the whole month.
- **Goal:** Prevent abandonment; prompt one small action. No selling. (06 §8)
- **Primary CTA:** None (behavioral nudge, not a click) — "start with one category."
- **Expected reader action:** Open banking app; fill in one category.
- **Links used:** None.
- **Brand-voice check:** [x] pass
- **Status:** Approved

## Email 3 — Day 3 — Reflect

- **Subject:** What surprised you
- **Preview text:** A question, not a task.
- **Goal:** Create the insight moment; invite a reply (deliverability + signal). No selling. (06 §8)
- **Primary CTA:** Reply to the email.
- **Expected reader action:** Reply naming the surprising category.
- **Links used:** None (reply-based).
- **Brand-voice check:** [x] pass — confirm "tell us," not "tell me" (04 §1).
- **Status:** Approved

## Email 4 — Day 5 — Bridge

- **Subject:** The part that's harder
- **Preview text:** Seeing it is step one.
- **Goal:** Name the gap between tracking and a routine. **Soft mention only.** (06 §8)
- **Primary CTA:** None (no pitch at this stage).
- **Expected reader action:** Keep using the tracker; register the "routine" idea.
- **Links used:** None.
- **Brand-voice check:** [x] pass — confirm "it is why BudgetCraft Studio exists," never "why I created" (founder voice, 04 §1); confirm no product/date implied.
- **Status:** Approved

## Email 5 — Day 7 — Present (Phase 1, no offer)

- **Subject:** What would help most next
- **Preview text:** One question to close.
- **Goal:** Phase 1 product-direction survey — validate what to build next. **No offer.** (06 §8, §11)
- **Primary CTA:** Choose a product-direction option (or reply).
- **Expected reader action:** Click one option, or reply in words.
- **Links used:** 5 survey links → `wants_budget_system / wants_bill_tracker / wants_savings_challenge / wants_weekly_routine / wants_other`.
- **Brand-voice check:** [x] pass — **critical:** must not imply a product is coming on a date (no "launching soon," "watch this space"); confirm it reads as validation, not a pitch.
- **Status:** Approved

---

## Sequence-level checks (from the operator review criteria)

1. **Five-email structure** — Days 0, 1, 3, 5, 7. [ ] confirmed
2. **Phase 1 constraint** — Day 7 introduces **no paid offer** and no product date. [ ] confirmed
3. **Brand voice** — we/you; no founder voice; no exaggerated promises; no timeline guarantees. [ ] confirmed
4. **Operational consistency**
   - Trigger tag is exactly `budgetcraft-leadmagnet` (id 21712788). [ ] confirmed
   - Links are placeholders where required (tracker PDF, survey links). [ ] confirmed
   - Tracker references are not fabricated (no invented URL, page count matches the one-page spec). [ ] confirmed
5. **Delays** — 0 / +1d / +2d / +2d / +2d, matching Days 0/1/3/5/7. [ ] confirmed

## After approval (operator, in Kit — not a repo action)

- Build the 5 Send-Email + delay steps in Visual Automation 2037998 using approved copy.
- Wire the survey link-click tags (`planner_format_*`, `wants_*`).
- Set the real tracker download URL in Email 1.
- Confirm sender name / reply-to; keep the automation **Paused** until reviewed, then Activate.
