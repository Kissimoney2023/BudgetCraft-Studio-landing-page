# End-to-End QA Checklist — Final Customer Test

**Prepared, not executed.** Run this only after the welcome copy is approved, the five email
steps are built in Kit automation 2037998, the automation is Active, and the real tracker PDF +
download link are in place. Do not run it against production before those exist.

**Boundaries:** this is a test plan. Executing it sends real email and creates a real subscriber —
an operator action. Use a fresh, controlled address you own (a plus-address works).

## Pre-conditions (confirm all before starting)
- [ ] Welcome copy in `docs/welcome-sequence-draft.md` marked **Approved** in `docs/email-review-checklist.md`.
- [ ] All five Send-Email + delay steps built in Kit Visual Automation **2037998**.
- [ ] Automation **2037998** switched from Paused to **Active**.
- [ ] Real tracker PDF hosted; Email 1 download link points to it (no `REPLACE_WITH_...`).
- [ ] `public/tracker-preview.png` replaced with real artwork (if the preview is part of the test scope).
- [ ] Survey link-click tags wired (`planner_format_*`, `wants_*`).

## Test steps
1. **Signup** — submit the live landing-page form (`budgetcraft-free.netlify.app`) with a fresh email + first name.
   - [ ] Form shows loading state, then redirects to `/thank-you`.
   - [ ] `/thank-you` renders the correct copy ("You're in" / tracker-ready message), no layout breakage, light + dark mode.
2. **Function result** — confirm in Kit:
   - [ ] Subscriber created, `state: active`.
   - [ ] Attached to the tracker signup form (the one whose ID is set as `KIT_FORM_ID`).
   - [ ] Tagged **budgetcraft-leadmagnet**.
3. **Email 1 (Day 0)** arrives:
   - [ ] Lands in Gmail **Primary** (check Promotions/Spam too, and a second provider e.g. Outlook/Apple Mail).
   - [ ] Renders on mobile + desktop, and in **dark mode** (text/background contrast holds).
   - [ ] **Download link resolves** to the real tracker PDF.
   - [ ] Format survey options are clickable and apply the correct `planner_format_*` tag; a plain reply also works.
4. **Emails 2–5 (Days 1/3/5/7)** each arrive **on the correct day**:
   - [ ] Day 1 (+1), Day 3 (+2), Day 5 (+2), Day 7 (+2) — confirm the delay fires in days, not another unit.
   - [ ] Each renders correctly (mobile/desktop/dark), no broken links.
   - [ ] Day 7 product-direction survey applies the correct `wants_*` tag; **no product offer, no launch-date language**.
5. **Reply path** — reply to Day 3 (and Day 7); confirm replies reach a monitored inbox.
6. **Automation integrity** — subscriber shows a clean single pass through the sequence; no duplicate enrollment.

## Pass criteria
- [ ] Subscriber + form + tag all correct.
- [ ] All five emails delivered on schedule, inbox placement acceptable.
- [ ] Tracker PDF link resolves; thank-you page renders.
- [ ] No brand-voice or Phase-1 violations in the delivered emails.

## After the test
- [ ] Operator decides whether to remove the test subscriber (housekeeping).
- [ ] Log any issues; fix by editing the live email content in place (do not delete/recreate steps mid-sequence).
