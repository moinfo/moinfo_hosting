import { pricingCategories } from "./pricing";

/**
 * "From" prices derived from the pricing table.
 *
 * The redesign's hero carries a price-index rail listing the cheapest price per
 * category. Those figures must come from `pricingCategories` rather than being
 * retyped, because retyping them is exactly how the current site ended up
 * advertising a VPS at "From TSh 25,750/mo" in the hero while the pricing table
 * says TSh 2,150,000/yr — the two lived in different files (i18n vs pricing.ts)
 * and drifted apart, in both languages.
 *
 * Deriving here means there is one number to correct, not three.
 */

export interface FromPrice {
  /** Numeric value, for sorting and comparison. */
  amount: number;
  /** Formatted as the site writes it, e.g. "TSh 80,500". */
  formatted: string;
  /** Bare digits for mono rendering, e.g. "80,500". */
  digits: string;
}

const toAmount = (price: string): number =>
  Number(price.replace(/[^\d]/g, "")) || 0;

/** Cheapest advertised plan in a pricing category, or null if it has none. */
export function fromPrice(categoryKey: string): FromPrice | null {
  const category = pricingCategories.find((c) => c.key === categoryKey);
  if (!category?.plans.length) return null;

  const cheapest = category.plans.reduce((min, plan) =>
    toAmount(plan.yearlyPrice) < toAmount(min.yearlyPrice) ? plan : min,
  );

  const amount = toAmount(cheapest.yearlyPrice);
  return {
    amount,
    formatted: cheapest.yearlyPrice,
    digits: amount.toLocaleString("en-US"),
  };
}

/**
 * Rows for the hero price-index rail, in the order the design lists them.
 * `period` is a translation key so the rail stays bilingual.
 */
export interface PriceIndexRow {
  categoryKey: string;
  labelKey: string;
  detailKey: string;
  href: string;
  periodKey: string;
}

export const priceIndexRows: PriceIndexRow[] = [
  {
    categoryKey: "web",
    labelKey: "index.webHosting",
    detailKey: "index.webHostingDetail",
    href: "/web-hosting",
    periodKey: "index.perYear",
  },
  {
    categoryKey: "email",
    labelKey: "index.emailHosting",
    detailKey: "index.emailHostingDetail",
    href: "/email-hosting",
    periodKey: "index.perYear",
  },
  {
    categoryKey: "vps",
    labelKey: "index.vps",
    detailKey: "index.vpsDetail",
    href: "/vps",
    periodKey: "index.perYear",
  },
  {
    categoryKey: "reseller",
    labelKey: "index.reseller",
    detailKey: "index.resellerDetail",
    href: "/linux-reseller",
    periodKey: "index.perYear",
  },
  {
    categoryKey: "ssl",
    labelKey: "index.ssl",
    detailKey: "index.sslDetail",
    href: "/#pricing",
    periodKey: "index.perYear",
  },
];
