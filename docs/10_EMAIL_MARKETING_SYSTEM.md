# 10_EMAIL_MARKETING_SYSTEM.md

> **CANONICAL — this repository is the single home for this file.**
> Adopted 1 August 2026. The Google Drive copy is **archive-only and superseded**.
> Authority is `git log` on this path. **Cite specs by name, not number** —
> `EMAIL_MARKETING §4`, not `10 §4`. See `CLAUDE.md`.

> ## ⚠️ Four corrections applied on export — 1 August 2026
>
> The Drive copy (last updated 31 July 2026) carried four facts that were true when written
> and are now false. They are corrected in place below and listed here so the change is
> auditable rather than silent.
>
> 1. **The automation ceiling does not bind.** The Drive copy states the Kit free tier allows
>    one automation, consumed by the welcome sequence. The account is verified on the
>    **`creator` plan**, not the free tier. **And the ceiling's meaning has changed:** the one
>    automation now serves *delivery*, not merely nurture — the tracker reaches the subscriber
>    only through the Day 0 sequence email. A second lead magnet would no longer compete with
>    a welcome sequence; it would compete with the only mechanism that hands anyone the
>    tracker. That is a harder constraint than the original text describes, not a softer one.
> 2. **The Kit account is live.** The Drive copy states it is "not yet created, with terms
>    unverified." It was created 2026-07-18, the v4 API key is verified working, form
>    `9746847` and tag `21712788` both resolve, and link-triggered tagging works.
> 3. **The domain is registered, not unavailable.** The Drive copy says availability is
>    unchecked. RDAP, 1 Aug 2026: registered at Squarespace Domains II LLC on 24 Feb 2026,
>    expiring 24 Feb 2027, status **`clientHold`** — the registry has pulled it from DNS,
>    which is why it does not resolve. The blocker is **reactivation, not purchase.**
> 4. **The missing "09" is a citation error, not a missing file.** §14 of the Drive copy
>    reports that `00_LOCKED_DECISIONS.md` cites a source "09" that cannot be found. Per the
>    ownership table in `BRAND_VOICE` §0, `00`'s `07`/`08`/`09` citations are each one low;
>    `00`'s "09" for email topics is **this file**. Note the section numbers do not align
>    (`00` cites "09 §2/§4/§5"; the matching content here is §4/§5/§6), so the underlying
>    rationale may have lived in a predecessor document that was rewritten into this one.
>
> **Not corrected:** `08_SEO_BLOG_ENGINE.md` and `07_PINTEREST_CONTENT_ENGINE.md` — under the
> correct numbering these are `09_SEO_BLOG_ENGINE` and `08_PINTEREST_CONTENT_ENGINE`, and
> neither exists in Drive or on disk under any name. §7, §13 and §14 still report them as
> missing, which remains accurate.

**Brand:** BudgetCraft Studio
**Purpose:** the complete specification for the email system — entry, automation, segmentation,
newsletter, and customer journey. This file synthesizes existing decisions; it does not create
new strategy.
**Last updated:** 31 July 2026 · **corrections applied on export 1 August 2026**

---

## 1. Purpose

This document specifies how subscribers enter the BudgetCraft Studio email list, what happens
automatically after signup, how the newsletter operates, how subscribers are segmented, and how
the email channel supports future product launches. It preserves decisions already recorded in
`00_LOCKED_DECISIONS.md` and the other spec files cited as sources throughout. Where no decision
has been located, the gap is listed in §14 rather than resolved here.

## 2. Entry points

- The lead magnet, "Where Did My Money Go? — A Beginner-Friendly Spending Tracker," the free
  rung of the price ladder (`00` §6, §8; `LEAD_MAGNET_SYSTEM` §1).
- The landing page form connected to the lead magnet.
- Pinterest pins driving to the landing page or blog (`00` §11).
- Blog articles, which also feed the newsletter (`00` §13).
- Future paid products further up the price ladder — single-purpose sheets, the monthly budget
  system, bundles, and a membership (`00` §8). These are Phase 2 and do not yet have separate
  entry-point specifications.

## 3. Subscriber lifecycle

Visitor → Subscriber → Welcome sequence (five emails, Days 0–7) → Newsletter (ongoing, twice per
month) → Survey (format survey on Day 0, product-direction survey on Day 7) → Future customer
(the Phase 2 offer). Fixed by `00` §13 and not altered here.

## 4. Kit automation

**Platform: Kit, `creator` plan** (corrected — see the export note above; `00` §10 previously
recorded free tier). The account is live and verified.

**Constraint, restated:** the original free-tier ceiling of one automation does not apply on the
`creator` plan. **However**, the single welcome automation is now load-bearing for *delivery*,
not just nurture — see correction 1. Treat additional automations as a plan question that is
already answered, and the delivery dependency as the real constraint.

**Required behavior:**

- **Trigger:** form submission on the landing page.
- **Form:** single opt-in, no double opt-in confirmation step (`00` §13).
- **Sequence:** the five-email automation described in §5.
- **Tags:** applied based on lead magnet format and survey responses (§8). Exact tag names and
  rule structure are not specified in any located source.
- **Custom fields:** first name optional, email required. Confirmed at code level in
  `netlify/functions/subscribe.ts` rather than in a spec document.
- **Deliverability checks:** see §9.

## 5. Welcome sequence

Five emails, sent Days 0, 1, 3, 5 and 7, evergreen (`00` §13). Ownership of the welcome sequence
sits with this document per the ownership table in `BRAND_VOICE` §0. The copy itself is not
reproduced here, only its structure and job per day.

- **Day 0:** deliver the tracker, plus the format survey.
- **Day 1:** start — one category.
- **Day 3:** reflect — invites a reply.
- **Day 5:** bridge — name the gap.
- **Day 7:** Phase 1, the product-direction survey; Phase 2, the offer.

Approved copy lives in `docs/welcome-sequence-draft.md`; per-email review status in
`docs/email-review-checklist.md`. Staged in Kit sequence `2844904`, all five **unpublished**.

## 6. Survey logic

Two surveys maximum across the lifecycle (`00` §13).

- The **format survey**, Day 0, collects a preference signal at the point of delivery.
- The **product-direction survey**, Day 7, is the Phase 1 mechanism for validating what to build
  next.

There is no waitlist. Survey replies feed Phase 2 product-direction decisions and are not used to
justify a pitch before Phase 2 begins.

## 7. Newsletter engine

Two newsletters per month, ongoing after Day 7, driven from blog content (`00` §13). Purpose:
keep subscribers engaged between the end of the welcome sequence and any future product launch.
`09_SEO_BLOG_ENGINE.md` is cited elsewhere in the registry as the intended source of blog topics,
**but this file does not exist** (§14). Exact send days and the topic-selection process are not
recorded in any located source.

## 8. Segmentation

No segmentation or tagging scheme is fully specified in the located source files. Based on the
entry points and survey logic above, the following tag categories are implied but not confirmed.

- Lead magnet format chosen, if the Day 0 survey offers one.
- Survey interests and product-direction answers from Day 7.
- Reply activity on Day 3 or Day 7.
- Customer status, once Phase 2 products exist.
- Future product interest, as additional products launch.

Tags can be applied as actions inside the existing welcome automation. A tag-triggered follow-up
automation beyond that sequence is now a plan capability rather than a blocker (correction 1).

## 9. Deliverability

No deliverability testing plan is recorded in any located source. The following checks are
standard practice, listed as required behavior rather than new strategy: inbox placement, the
Gmail promotions tab, spam-filter testing, dark-mode rendering, mobile rendering, and a defined
process for handling reply-to messages. Ownership and cadence are open questions (§14).

**Known defect, added 1 August 2026.** The Kit sending address is `sahjohnny@gmail.com` with
`from_name` set to that same literal string, and `is_dmarc_configured: false`. This violates
`00` §1 / §7 of this file (sender identity is **BudgetCraft Studio**, never a personal address),
and a free-mail `From` sent through an ESP is a standard deliverability liability. See
`00` §18.12. `from_name` is fixable immediately; DMARC waits on the domain hold clearing.

## 10. Customer journey

**Phase 1, current:** the free lead magnet, the five-email welcome sequence, the format survey,
the product-direction survey, and the ongoing newsletter. No product pitch occurs during this
phase (`00` §13 Day 7 note; `00` §8 note that the first price-ladder rung is not in the launch
sequence and the second belongs to Phase 2).

**Phase 2, future:** the first paid product is the monthly budget system at $19–$39, the first
paid rung actually in the launch sequence (`00` §8). Further rungs — single-purpose sheets at
$7–$12, bundles at $49–$99, membership at $10–$15/month — follow in the ladder but are not
scheduled.

No contradiction was found between the Day 7 "Phase 2: the offer" note and the price ladder's
placement of the monthly budget system in Phase 2.

## 11. Failure modes

Not specified in any located source. Listed as standard operational risks the system should be
able to diagnose, not as new strategic decisions.

- Automation stops running.
- Email not delivered. **This has already occurred** — see `00` §18, "Closed by evidence."
- Survey ignored, with no reply by Day 7 or after.
- Low open rate.
- Low click rate.

Diagnosis approach: change one variable per batch before drawing conclusions. Specific thresholds
and an escalation process are not recorded (§14).

## 12. Success metrics

Open rate, click-through rate, reply rate, survey completion rate, and lead magnet download count
are the metric categories implied by the lifecycle above. No target numbers are recorded in any
located source, and none are introduced here.

## 13. Dependencies

- **Kit** — **live**, `creator` plan, v4 key verified (corrected).
- **Netlify**, hosting — free-tier limits unverified (`00` §10).
- **`BudgetCraftStudio.com`** — **registered, on `clientHold`, not resolving** (corrected).
- **The tracker PDFs** — both print and digital. **Neither exists yet.** This is the current
  critical-path blocker; the Day 0 email carries placeholder links until they do.
- **The Privacy Policy page** — present as a placeholder in the site repository.
- **Fonts** — Prata and Work Sans, Canva availability unverified (`00` §10).
- **The blog content pipeline** — `09_SEO_BLOG_ENGINE.md` cited as its source; does not exist.
- **The Pinterest content pipeline** — `08_PINTEREST_CONTENT_ENGINE.md` cited as its source;
  does not exist.

## 14. Open questions

- **Resolved on export:** the "missing 09" reported here was a citation error in `00`, not a
  missing file — see correction 4. Section numbers do not align, so the original rationale may
  have lived in a predecessor document.
- **`08_PINTEREST_CONTENT_ENGINE.md` and `09_SEO_BLOG_ENGINE.md` do not exist** in Drive or on
  disk under any name or numbering. Every citation to them currently resolves to nothing.
- Exact tag names, the full segmentation schema, the newsletter send schedule, deliverability
  testing cadence, failure-mode thresholds, and success-metric targets are not recorded in any
  located source and are not invented here.
- First name optional and email required is confirmed at code level but is not recorded in any
  spec document.
