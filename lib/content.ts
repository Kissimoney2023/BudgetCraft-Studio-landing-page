/**
 * IMPLEMENTATION FILE — not a source of truth.
 *
 * Copy originates in the project specification
 * (00_locked_decisions.md, 06_lead_magnet_system.md).
 * Update the specification first, then mirror it here.
 */

export const site = {
  name: "BudgetCraft Studio",
  // Used for absolute URLs (canonical, Open Graph, sitemap, JSON-LD).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://budgetcraftstudio.com",
  seo: {
    title: "Where Did My Money Go? Free Spending Tracker",
    description:
      "Download a free beginner-friendly spending tracker to help you understand where your money goes each month.",
    ogImagePath: "/tracker-preview.png",
  },
} as const;

export const hero = {
  heading: "Where Did My Money Go?",
  subtitle: "A Beginner-Friendly Spending Tracker",
  supporting: "Find out where your money goes without complicated spreadsheets.",
  cta: "Get the Free Tracker",
} as const;

export const preview = {
  src: "/tracker-preview.png",
  alt: "Preview of the one-page Where Did My Money Go spending tracker",
  // A4 / Letter-style portrait ratio (8.27 : 11).
  aspectWidth: 827,
  aspectHeight: 1100,
} as const;

export const howItWorks = {
  heading: "How it works",
  steps: [
    "Download the tracker.",
    "Open your banking app.",
    "Write each amount across the row.",
    "Add the totals.",
  ],
} as const;

export const benefits = {
  heading: "Benefits",
  items: ["Simple", "Printable", "Undated", "Works worldwide"],
} as const;

export const signup = {
  heading: "Get the Free Tracker",
  firstNameLabel: "First name",
  firstNameOptional: "optional",
  emailLabel: "Email",
  consentLabel:
    "I agree to receive the tracker and occasional emails from BudgetCraft Studio. Unsubscribe any time.",
  submit: "Send Me the Free Tracker",
  submitting: "Sending",
  errors: {
    firstNameTooLong: "Please use a shorter first name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    consentRequired: "Please tick the box to receive the tracker.",
    generic: "Something went wrong. Please try again in a moment.",
    network: "We could not reach the server. Please check your connection and try again.",
  },
} as const;

export const faq = {
  heading: "Questions",
  items: [
    {
      question: "Is it free?",
      answer:
        "Yes. The tracker is free and there is nothing to buy. You will also get a short series of emails about using it, and you can unsubscribe at any time.",
    },
    {
      question: "Can I print it?",
      answer:
        "Yes. It is one page, sized for both Letter and A4 paper, with room to write by hand.",
    },
    {
      question: "Can I use it digitally?",
      answer:
        "Yes. There is a second version sized for tablet apps like GoodNotes and Notability, and it opens on a computer too.",
    },
    {
      question: "Do I need a spreadsheet?",
      answer: "No. That is rather the point.",
    },
  ],
} as const;

export const footer = {
  wordmark: "BudgetCraft Studio",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: (year: number) => `© ${year} BudgetCraft Studio. All rights reserved.`,
} as const;

export const thankYou = {
  heading: "You're in",
  body: [
    "Your tracker is on its way to your inbox.",
    "If you don't see it within a few minutes, check your Promotions or Spam folder.",
    "You can print the tracker whenever you're ready.",
    "For tonight, simply open your banking app and look through last month's spending.",
    "You don't need to calculate anything yet.",
  ],
  cta: "Back to Home",
} as const;

export const legal = {
  privacy: {
    title: "Privacy Policy",
    // Placeholder only — see app/privacy/page.tsx for the review note.
    placeholder:
      "This page is a placeholder. The privacy policy has not been written yet.",
  },
  terms: {
    title: "Terms of Service",
    placeholder:
      "This page is a placeholder. The terms of service have not been written yet.",
  },
} as const;
