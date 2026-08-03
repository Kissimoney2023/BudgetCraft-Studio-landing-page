---
name: budgetcraft-spec-lookup
description: Use whenever you need to determine which BudgetCraft spec file governs a feature, resolve an ownership question between the numbered docs, or verify a claim before writing code or copy. Trigger this before touching landing page copy, email content, visual style, Pinterest/SEO content, or pricing.
---

BudgetCraft Studio's specification lives in Google Docs as numbered files: 00_LOCKED_DECISIONS.md
(brand constitution, immutable except via the §21 change process), 03_TARGET_AUDIENCE.md,
04_BRAND_VOICE.md (voice rules + ownership table in §0), 05_BRAND_VISUAL_IDENTITY.md,
06_LEAD_MAGNET_SYSTEM.md (tracker/landing/thank-you/opt-in/tagging/launch sequencing),
07_PRODUCT_CREATION_SYSTEM.md, 08_PINTEREST_CONTENT_ENGINE.md, 09_SEO_BLOG_ENGINE.md, and
10_EMAIL_MARKETING_SYSTEM.md (welcome sequence/automation/subscriber lifecycle).

Rules:
1. Each file owns a distinct area. Check 04 §0's ownership table first if you're unsure who
   governs a piece of copy or a feature — but note it may lag behind recent operator edits
   (e.g. it doesn't yet list 10 as an owner even though 10 now owns the welcome sequence).
2. If you find two dated versions of the same spec file, or two spec files that appear to
   claim the same territory, stop and report the conflict in your response. Do not silently
   pick one version or merge them.
3. Never treat this repo's code (lib/content.ts, components) as a source of truth ahead of the
   spec docs. The spec is written first; code mirrors it, never the reverse.
4. 00_LOCKED_DECISIONS.md items are locked. Don't propose changing them; if a task seems to
   require it, flag that explicitly instead of working around it silently.
