// Saba Saba (7 July) 2026 promotional offer.
// Runs 1–16 July 2026 and auto-expires: every surface that shows the promo
// gates on isSabaSabaActive(), so nothing needs to be removed by hand afterwards.

export const SABA_SABA_START = new Date("2026-07-01T00:00:00");
export const SABA_SABA_END = new Date("2026-07-16T23:59:59");

/** Promo code customers enter at WHMCS checkout to unlock the Saba Saba price. */
export const SABA_SABA_CODE = "MOINFO50";

/** True while the promo window is open. Used by TopBar, Hero banner and the page. */
export function isSabaSabaActive(now: Date = new Date()): boolean {
  return now >= SABA_SABA_START && now <= SABA_SABA_END;
}

export interface SabaPlan {
  name: string;
  /** Original price in TSh (numeric, no separators). */
  was: number;
  /** Saba Saba price in TSh. */
  now: number;
  /** Translation keys describing what the plan includes. */
  featureKeys: string[];
  orderUrl: string;
  popular?: boolean;
}

export interface SabaCategory {
  key: string;
  /** Translation key for the category heading. */
  titleKey: string;
  /** Translation key for the short category subtitle. */
  subtitleKey: string;
  /** Emoji shown beside the category title. */
  icon: string;
  /** Number of columns for the card grid on wide screens. */
  columns: number;
  plans: SabaPlan[];
}

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store";
const DOMAIN_REGISTER = "https://moinfo.co.tz/portal/cart.php?a=add&domain=register";

/** Format a TSh amount the same way the rest of the site does, e.g. "TSh 40,250". */
export function formatTsh(amount: number): string {
  return `TSh ${amount.toLocaleString("en-US")}`;
}

export const sabaSabaCategories: SabaCategory[] = [
  {
    key: "web",
    titleKey: "saba.cat.web.title",
    subtitleKey: "saba.cat.web.subtitle",
    icon: "💻",
    columns: 4,
    plans: [
      {
        name: "University",
        was: 80500,
        now: 40250,
        featureKeys: ["pf.emails20", "pf.disk4gb", "pf.bw4gb"],
        orderUrl: `${STORE}/web-hosting`,
      },
      {
        name: "Personal",
        was: 120000,
        now: 60000,
        featureKeys: ["pf.emails40", "pf.disk8gb", "pf.bw8gb"],
        orderUrl: `${STORE}/web-hosting`,
      },
      {
        name: "Professional",
        was: 150000,
        now: 75000,
        popular: true,
        featureKeys: ["pf.emails60", "pf.disk12gb", "pf.bw12gb"],
        orderUrl: `${STORE}/web-hosting`,
      },
      {
        name: "Premier",
        was: 200000,
        now: 100000,
        featureKeys: ["pf.emails80", "pf.disk20gb", "pf.unlimitedBandwidth"],
        orderUrl: `${STORE}/web-hosting`,
      },
    ],
  },
  {
    key: "email",
    titleKey: "saba.cat.email.title",
    subtitleKey: "saba.cat.email.subtitle",
    icon: "✉️",
    columns: 4,
    plans: [
      {
        name: "Email Starter",
        was: 60000,
        now: 30000,
        featureKeys: ["pf.emailAccounts20", "pf.disk4gb", "pf.bw4gb"],
        orderUrl: `${STORE}/email-hosting`,
      },
      {
        name: "Email Medium",
        was: 100000,
        now: 50000,
        popular: true,
        featureKeys: ["pf.emailAccounts40", "pf.disk8gb", "pf.bw8gb"],
        orderUrl: `${STORE}/email-hosting`,
      },
      {
        name: "Email Premier",
        was: 130000,
        now: 65000,
        featureKeys: ["pf.emailAccounts60", "pf.disk12gb", "pf.bw12gb"],
        orderUrl: `${STORE}/email-hosting`,
      },
      {
        name: "Email Plus",
        was: 350000,
        now: 175000,
        featureKeys: ["pf.emailAccounts100", "pf.disk50gb", "pf.bw50gb"],
        orderUrl: `${STORE}/email-hosting`,
      },
    ],
  },
  {
    key: "domain",
    titleKey: "saba.cat.domain.title",
    subtitleKey: "saba.cat.domain.subtitle",
    icon: "🌐",
    columns: 2,
    plans: [
      {
        name: ".co.tz / .or.tz / .ac.tz",
        was: 19999,
        now: 18999,
        featureKeys: [
          "saba.f.oneYear",
          "saba.f.fastReg",
          "saba.f.freeTransfer",
          "saba.f.dnsEmail",
          "saba.f.support247",
        ],
        orderUrl: DOMAIN_REGISTER,
      },
      {
        name: ".tz Premium",
        was: 95000,
        now: 79999,
        popular: true,
        featureKeys: [
          "saba.f.oneYear",
          "saba.f.premiumTz",
          "saba.f.freeTransfer",
          "saba.f.dnsEmail",
          "saba.f.support247",
        ],
        orderUrl: DOMAIN_REGISTER,
      },
    ],
  },
  {
    key: "webdesign",
    titleKey: "saba.cat.webdesign.title",
    subtitleKey: "saba.cat.webdesign.subtitle",
    icon: "🎨",
    columns: 1,
    plans: [
      {
        name: "Professional Website Design",
        was: 1800000,
        now: 999999,
        popular: true,
        featureKeys: [
          "saba.f.pages15",
          "saba.f.products15",
          "saba.f.adminPanel",
          "saba.f.logoDesign",
          "saba.f.companyProfile",
          "saba.f.emails20",
          "saba.f.freeDomainYear",
          "saba.f.freeHostingYear",
          "saba.f.mobileResponsive",
          "saba.f.seoFriendly",
          "saba.f.delivery",
        ],
        orderUrl: "/website-design",
      },
    ],
  },
];
