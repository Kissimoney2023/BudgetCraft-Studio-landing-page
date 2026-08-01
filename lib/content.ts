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
    rateLimited: "That is a few tries in a row. Please wait a minute and try again.",
    unreachable: "We could not reach our email service just now. Please try again shortly.",
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
  download: "Download your tracker (PDF)",
  cta: "Back to Home",
} as const;

/**
 * DRAFT — NOT LEGALLY REVIEWED. The legal copy below is placeholder reference
 * copy pending review by a qualified attorney. It is not legal advice and not
 * final. Unresolved fields are explicit "[... — PLACEHOLDER]" tokens and must be
 * filled in (or the copy replaced) by counsel before launch. Update
 * `lastUpdated` whenever the text changes.
 */
export const legal = {
  lastUpdated: "July 31, 2026",
  reviewNotice:
    "DRAFT — NOT LEGALLY REVIEWED. This is placeholder reference copy pending review by a qualified attorney. It is not legal advice and not final, and must not be relied upon until reviewed. Bracketed [PLACEHOLDER] fields still need real values.",
  privacy: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains what information BudgetCraft Studio collects when you request the free spending tracker, how that information is used, and the choices you have.",
    sections: [
      {
        heading: "Who we are",
        body: [
          'This site is operated by [COMPANY LEGAL NAME — PLACEHOLDER] ("BudgetCraft Studio," "we," "us"), [BUSINESS ADDRESS — PLACEHOLDER]. You can contact us at [CONTACT EMAIL — PLACEHOLDER].',
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "When you sign up, we collect the email address you provide and, if you choose to give it, your first name. Providing a first name is optional.",
          "Our hosting and email providers may automatically record limited technical information, such as your IP address, browser type, and the time of your request, in order to deliver and secure the service.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "We use your email address to send you the tracker and a short series of related emails. If you provide a first name, we may use it to personalize those messages.",
          "We use limited technical information to operate, secure, and improve the site.",
        ],
      },
      {
        heading: "The basis for using your information",
        body: [
          "Where this applies to you, we rely on the consent you give by submitting the signup form. You can withdraw that consent at any time by unsubscribing.",
        ],
      },
      {
        heading: "Service providers",
        body: [
          "We use Kit (formerly ConvertKit) to manage signups and send email, and Netlify to host the site and run the signup function. These providers process your information on our behalf and may store it on servers located in other countries.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies and tracking",
        body: [
          "This site does not use advertising or analytics tracking cookies. Our providers may set limited cookies that are necessary for the site and the signup to function.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "We keep your email address for as long as you remain subscribed. If you unsubscribe or ask us to delete your information, we remove it from our active mailing list, subject to any records we are required to keep.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you, to object to or restrict its use, and to receive a copy of it. You can unsubscribe from our emails at any time using the link in every message.",
          "To make a request, contact us at [CONTACT EMAIL — PLACEHOLDER].",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Because our providers operate internationally, your information may be transferred to and processed in countries other than your own. We rely on our providers' safeguards for these transfers.",
        ],
      },
      {
        heading: "Children",
        body: [
          "This site is not directed to children, and we do not knowingly collect information from children. If you believe a child has provided us information, contact us and we will remove it.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy from time to time. The date at the top of the page shows when it was last changed.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "If you have questions about this policy or how your information is handled, contact us at [CONTACT EMAIL — PLACEHOLDER].",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      'These Terms of Service are an agreement between you and [COMPANY LEGAL NAME — PLACEHOLDER] ("BudgetCraft Studio," "we," "us") and govern your use of the site and the free spending tracker. Please read them before using the site.',
    sections: [
      {
        heading: "Acceptance of these terms",
        body: [
          "By using this site or requesting the free tracker, you agree to these terms. If you do not agree, please do not use the site.",
        ],
      },
      {
        heading: "The free tracker",
        body: [
          "The spending tracker is provided free of charge for your personal, non-commercial use. You may print it and use it for yourself. You may not resell it or distribute it as your own.",
        ],
      },
      {
        heading: "Not financial advice",
        body: [
          "The tracker and any related emails are provided for general informational purposes only and are not financial, accounting, tax, or legal advice. You are responsible for your own financial decisions and should consult a qualified professional for advice about your situation.",
        ],
      },
      {
        heading: "Email communications",
        body: [
          "When you sign up, you agree to receive the tracker and a short series of related emails. You can unsubscribe at any time using the link in every message.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The site, the tracker, and their content are owned by BudgetCraft Studio and are protected by applicable intellectual property laws. These terms do not transfer any ownership to you.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You agree not to misuse the site, including by attempting to disrupt it, access it in unauthorized ways, or submit false or automated signups.",
        ],
      },
      {
        heading: "Availability and changes",
        body: [
          "We may change, suspend, or discontinue any part of the site or the tracker at any time, and we may update these terms. Continued use after a change means you accept the updated terms.",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "The site and the tracker are provided on an as is and as available basis, without warranties of any kind, to the extent permitted by law.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "[LIMITATION OF LIABILITY — PLACEHOLDER: final language to be drafted by counsel.] To the extent permitted by law, BudgetCraft Studio is not liable for any indirect, incidental, or consequential damages arising from your use of the site or the tracker.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of [GOVERNING-LAW JURISDICTION — PLACEHOLDER]. The governing jurisdiction and the dispute-resolution process must be confirmed by counsel before launch.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about these terms can be sent to [CONTACT EMAIL — PLACEHOLDER].",
        ],
      },
    ],
  },
} as const;
