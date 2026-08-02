/**
 * Knowledge base index.
 *
 * These are article *stubs* — title, category and read time — so the page can
 * ship and be searchable now. Bodies live in MoBilling's knowledgebase
 * (/api/portal/knowledgebase), which is currently auth-gated; when a public
 * endpoint exists, this list should come from there instead of being hardcoded.
 * Until then `href` points at the closest existing page rather than a 404.
 */

export interface KbArticle {
  title: string;
  minutes: number;
  href: string;
}

export interface KbCategory {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  articles: KbArticle[];
}

export const kbCategories: KbCategory[] = [
  {
    key: "getting-started",
    eyebrow: "01 · Getting started",
    title: "Your first week",
    description: "From ordering to a live site.",
    articles: [
      { title: "Register your first .co.tz domain", minutes: 4, href: "/domains" },
      { title: "Choose the right hosting tier", minutes: 5, href: "/web-hosting" },
      { title: "Log in to cPanel for the first time", minutes: 3, href: "https://mobilling.co.tz/portal/login" },
      { title: "Point your domain at our nameservers", minutes: 6, href: "/domains" },
      { title: "Upload your site with File Manager", minutes: 5, href: "/web-hosting" },
      { title: "Install WordPress in one click", minutes: 4, href: "/web-hosting" },
    ],
  },
  {
    key: "email",
    eyebrow: "02 · Email",
    title: "Mailboxes and delivery",
    description: "Setting up business email and keeping it out of spam folders.",
    articles: [
      { title: "Create a mailbox on your domain", minutes: 3, href: "/email-hosting" },
      { title: "Connect Outlook, Gmail or your phone", minutes: 6, href: "/email-hosting" },
      { title: "Set up SPF, DKIM and DMARC", minutes: 8, href: "/email-hosting" },
      { title: "Why your mail lands in spam", minutes: 7, href: "/email-hosting" },
      { title: "Forwarding and catch-all addresses", minutes: 4, href: "/email-hosting" },
      { title: "Recover a mailbox password", minutes: 2, href: "https://mobilling.co.tz/portal/login" },
    ],
  },
  {
    key: "domains",
    eyebrow: "03 · Domains",
    title: "Registration and transfers",
    description: "Everything about .tz names, renewals and moving registrars.",
    articles: [
      { title: "Which .tz extension can I register?", minutes: 4, href: "/domains" },
      { title: "Transfer a domain to Moinfo", minutes: 6, href: "/transfer" },
      { title: "Get your EPP / auth code", minutes: 2, href: "https://mobilling.co.tz/portal/domains" },
      { title: "Turn on auto-renew", minutes: 2, href: "https://mobilling.co.tz/portal/domains" },
      { title: "Manage DNS records", minutes: 7, href: "/domains" },
      { title: "What happens when a domain expires", minutes: 5, href: "/domains" },
    ],
  },
  {
    key: "billing",
    eyebrow: "04 · Billing",
    title: "Invoices and payments",
    description: "Paying, renewing and getting the paperwork your accountant needs.",
    articles: [
      { title: "Pay an invoice with M-Pesa", minutes: 3, href: "https://mobilling.co.tz/portal/invoices" },
      { title: "Download a receipt or tax invoice", minutes: 2, href: "https://mobilling.co.tz/portal/invoices" },
      { title: "Read your account statement", minutes: 4, href: "https://mobilling.co.tz/portal/statement" },
      { title: "Upgrade a hosting plan mid-term", minutes: 5, href: "https://mobilling.co.tz/portal/hosting" },
      { title: "Cancel a service", minutes: 3, href: "/cancellation-policy" },
      { title: "Our 30-day money-back guarantee", minutes: 4, href: "/hosting-policy" },
    ],
  },
];

export const kbArticleCount = kbCategories.reduce(
  (total, c) => total + c.articles.length,
  0,
);
