import { orderUrl } from "@/data/mobilling";

/**
 * Cloud VPS (resold Linode / Akamai Cloud) — the ONLY place to change prices.
 *
 * Customer price (TZS / month) = ceil(usdCost × USD_TO_TZS × (1 + MARKUP) / ROUND_TO) × ROUND_TO
 *
 * To change prices edit one of these, then rebuild and deploy (see DEPLOYMENT.md):
 *   - USD_TO_TZS   when the dollar moves
 *   - MARKUP       your profit margin, 0.30 = 30%
 *   - priceTzs     on one plan, to set an exact price and ignore the formula
 *   - usdCost      when Linode changes its own price
 */

/** TZS per 1 USD. */
export const USD_TO_TZS = 3000;

/** Your margin on top of Linode's price. PLACEHOLDER — 0.30 means +30%. */
export const MARKUP = 0.3;

/** Round customer prices up to the nearest multiple of this (TZS). */
export const ROUND_TO = 500;

export interface CloudVpsPlan {
  name: string;
  /** URL slug — matches a PLAN_SLUG_TO_PRODUCT key under "cloud-vps/" in mobilling.ts. */
  slug: string;
  /** Linode's list price in USD per month (akamai.com/cloud/pricing/cpu). */
  usdCost: number;
  vcpu: number;
  ramGb: number;
  diskGb: number;
  transferTb: number;
  /** "shared" or "dedicated" CPU. */
  cpu: "shared" | "dedicated";
  popular?: boolean;
  /** Fixed monthly TZS price; skips USD_TO_TZS and MARKUP for this plan. */
  priceTzs?: number;
  /** Set to true to hide a plan without deleting it. */
  hidden?: boolean;
}

export const cloudVpsPlans: CloudVpsPlan[] = [
  { name: "Cloud 1GB",  slug: "cloud-1gb",  usdCost: 5,  vcpu: 1, ramGb: 1,  diskGb: 25,  transferTb: 1, cpu: "shared" },
  { name: "Cloud 2GB",  slug: "cloud-2gb",  usdCost: 12, vcpu: 1, ramGb: 2,  diskGb: 50,  transferTb: 2, cpu: "shared" },
  { name: "Cloud 4GB",  slug: "cloud-4gb",  usdCost: 24, vcpu: 2, ramGb: 4,  diskGb: 80,  transferTb: 4, cpu: "shared", popular: true },
  { name: "Cloud 8GB",  slug: "cloud-8gb",  usdCost: 48, vcpu: 4, ramGb: 8,  diskGb: 160, transferTb: 5, cpu: "shared" },
  { name: "Cloud 16GB", slug: "cloud-16gb", usdCost: 96, vcpu: 6, ramGb: 16, diskGb: 320, transferTb: 8, cpu: "shared" },
  { name: "Dedicated 4GB", slug: "dedicated-4gb", usdCost: 36, vcpu: 2, ramGb: 4, diskGb: 80,  transferTb: 4, cpu: "dedicated" },
  { name: "Dedicated 8GB", slug: "dedicated-8gb", usdCost: 72, vcpu: 4, ramGb: 8, diskGb: 160, transferTb: 5, cpu: "dedicated" },
];

/** Monthly customer price in TZS for a plan. */
export function monthlyTzs(plan: CloudVpsPlan): number {
  if (plan.priceTzs !== undefined) return plan.priceTzs;
  const raw = plan.usdCost * USD_TO_TZS * (1 + MARKUP);
  return Math.ceil(raw / ROUND_TO) * ROUND_TO;
}

export function formatTzs(amount: number): string {
  return amount.toLocaleString("en-US");
}

/** Deep-links to MoBilling's /order/cloud-vps?plan=<slug> — the VPS is auto-provisioned once the invoice is paid. */
export function cloudVpsOrderUrl(plan: CloudVpsPlan): string {
  return orderUrl("cloud-vps", plan.slug);
}
