---
name: budgetcraft-content-centralization
description: Use when adding or changing any visitor-facing string, color, or style token in the Next.js codebase.
---

This repo centralizes content and style so the spec docs stay the single source of truth.

Rules:
1. Every visitor-facing string lives in lib/content.ts. Never hardcode copy inside a component —
   import it from lib/content.ts instead, adding a new entry if needed.
2. The five brand color tokens are defined once in app/globals.css as CSS custom properties and
   mapped to semantic Tailwind names in tailwind.config.ts. Never introduce a raw hex value in a
   component; use bg-background, text-foreground, bg-accent, border-secondary, etc.
3. muted (warm sand) is for fills only, never text — per 05_BRAND_VISUAL_IDENTITY.md.
4. When a spec doc changes, update lib/content.ts (or globals.css for style) to mirror it —
   the spec is edited first, the code follows, never the other way around.
5. Flag, rather than silently fix, any visitor-facing string or color you find that doesn't
   match lib/content.ts / globals.css conventions or the current spec.
