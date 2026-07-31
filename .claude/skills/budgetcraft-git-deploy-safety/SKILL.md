---
name: budgetcraft-git-deploy-safety
description: Use before any git commit, push, branch merge, Netlify configuration change, or Kit dashboard-adjacent action in the BudgetCraft-Studio-landing-page repo.
---

This project treats git history and deployment as operator-controlled, even though Claude Code
can read/write the local working tree.

Rules:
1. Commit work in progress promptly rather than leaving it uncommitted — uncommitted files are
   invisible to any reviewer (including other Claude sessions) and easy to lose.
2. Always work on a feature branch. Never push directly to main, and never merge a PR yourself.
3. Never modify netlify.toml, Netlify environment variables (KIT_API_KEY, KIT_FORM_ID,
   NEXT_PUBLIC_SITE_URL), or site access/visibility settings.
4. Never take any action against the Kit account (activating/pausing automations, editing
   Visual Automation 2037998, deleting subscribers or tags, creating new automations). Kit is a
   SaaS dashboard the operator controls manually — it is out of reach for a coding agent by
   design, not an oversight.
5. Before finishing a task, state plainly in your summary: what was committed, what branch it's
   on, whether it was pushed, and confirm nothing was pushed to main or touched in Netlify/Kit.
