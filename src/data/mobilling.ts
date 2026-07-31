/**
 * MoBilling client portal — single source of truth for every outbound billing
 * link on this site. Replaces the retired WHMCS portal at moinfo.co.tz/portal.
 *
 * Keep all portal URLs here. Nothing else in the app should hardcode a
 * mobilling.co.tz address, so a future domain or route change is a one-file edit.
 */

export const MOBILLING_BASE = "https://mobilling.co.tz";

/**
 * MoBilling API root. Override with NEXT_PUBLIC_MOBILLING_API when running the
 * site against a local backend (e.g. http://localhost:8000/api).
 */
export const MOBILLING_API =
  process.env.NEXT_PUBLIC_MOBILLING_API ?? `${MOBILLING_BASE}/api`;

/** Default extension used when a visitor searches a bare name. */
export const DEFAULT_TLD = "co.tz";

export interface DomainCheckResult {
  name: string;
  /** False when we don't sell that extension — `available` is then null. */
  offered: boolean;
  available: boolean | null;
  pricing?: {
    tld: string;
    register_price: number;
    transfer_price: number;
    years_min: number;
    years_max: number;
  };
  message?: string;
}

/**
 * Check a domain against the registry without signing in.
 *
 * Backed by GET /api/public/domains/check, which is unauthenticated so visitors
 * can search and see prices before creating an account. Ordering still requires
 * login — that happens on MoBilling, via domainUrl() below.
 */
export async function checkDomain(input: string): Promise<DomainCheckResult> {
  const name = normaliseDomain(input);
  const res = await fetch(
    `${MOBILLING_API}/public/domains/check?name=${encodeURIComponent(name)}`,
    { headers: { Accept: "application/json" } },
  );

  if (!res.ok && res.status !== 422) {
    throw new Error(`Domain check failed (${res.status})`);
  }
  return res.json();
}

/** "mybusiness" -> "mybusiness.co.tz"; leaves an explicit extension alone. */
export function normaliseDomain(input: string): string {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");
  return cleaned.includes(".") ? cleaned : `${cleaned}.${DEFAULT_TLD}`;
}

/** Digits only, no "+". Used to build wa.me links. */
export const WHATSAPP_NUMBER = "255689011111";

/**
 * Client Area login.
 *
 * Not /login — that is MoBilling's own SaaS sign-in ("Billing & Statutory
 * Management Made Simple"), which is the wrong product to show a hosting
 * customer. /portal/login carries the Moinfotech branding and speaks about
 * domains, cPanel and invoices. Both accept the same credentials and land a
 * client on /portal/dashboard.
 */
export const CLIENT_LOGIN = `${MOBILLING_BASE}/portal/login`;

/** Client self-registration (email OTP). */
export const CLIENT_REGISTER = `${MOBILLING_BASE}/portal/register`;

export const KNOWLEDGEBASE_URL = `${MOBILLING_BASE}/portal/knowledgebase`;

export const SUPPORT_TICKET_URL = `${MOBILLING_BASE}/portal/tickets/new`;

/** Customer-facing product groups on the MoBilling order page. */
export type OrderCategory =
  | "web-hosting"
  | "email-hosting"
  | "vps"
  | "dedicated-server"
  | "reseller-hosting"
  | "website-design"
  | "domain";

/**
 * Contract for the MoBilling order page.
 *
 * `product_services` has no slug column and POST /api/portal/orders takes a
 * UUID, so the order page must resolve `?plan=<slug>` to a product itself.
 * This table is that contract — the right-hand side is the exact `name` value
 * in MoBilling as migrated from WHMCS. Note the migration added prefixes
 * ("University" -> "Web Hosting University"), so slug and name differ.
 *
 * The DB `category` column holds provisioning buckets (`cpanel`, `whmcs`), not
 * these groups, so the order page cannot group by it directly.
 */
export const PLAN_SLUG_TO_PRODUCT: Record<string, string> = {
  "web-hosting/university": "Web Hosting University",
  "web-hosting/personal": "Web Hosting Personal",
  "web-hosting/professional": "Web Hosting Professional",
  "web-hosting/premier": "Web Hosting Premier",
  "web-hosting/plus": "Web Hosting Plus",
  "email-hosting/starter": "Business Email Starter",
  "email-hosting/medium": "Business Email Medium",
  "email-hosting/premier": "Business Email Premier",
  "email-hosting/plus": "Business Email Plus",
  "vps/linux-mit-500": "Linux MIT 500",
  "vps/linux-mit-600": "Linux MIT 600",
  "vps/linux-mit-700": "Linux MIT 700",
  "dedicated-server/linux-server-mit-450": "Linux Server - MIT 450",
  "dedicated-server/linux-server-mit-550": "Linux Server - MIT 550",
  "dedicated-server/linux-server-mit-650": "Linux Server - MIT 650",
  "reseller-hosting/linux-reseller-starter": "Linux Reseller Starter",
  "reseller-hosting/linux-reseller-medium": "Linux Reseller Medium",
  "reseller-hosting/linux-reseller-premium": "Linux Reseller Premium",
  "reseller-hosting/linux-reseller-business": "Linux Reseller Business",
  "website-design/reseller-design": "Reseller Design",
  "website-design/static-website-design": "Static Website Design",
  "website-design/ecommerce-website-design": "Ecommerce Website Design",
};

/**
 * Build an order link. `plan` deep-links straight to a tier so the customer
 * lands on the configured plan instead of the category listing. `coupon`
 * pre-applies a promo code (validated by POST /api/portal/coupons/validate).
 *
 * orderUrl("vps", "linux-mit-500") -> https://mobilling.co.tz/order/vps?plan=linux-mit-500
 */
export function orderUrl(
  category: OrderCategory,
  plan?: string,
  coupon?: string,
): string {
  const params = new URLSearchParams();
  if (plan) params.set("plan", plan);
  if (coupon) params.set("coupon", coupon);
  const query = params.toString();
  return `${MOBILLING_BASE}/order/${category}${query ? `?${query}` : ""}`;
}

/**
 * Build a domain register/transfer link, optionally pre-filled with a query
 * typed on this site so the customer does not retype it.
 */
export function domainUrl(
  query?: string,
  action: "register" | "transfer" = "register",
  coupon?: string,
): string {
  const params = new URLSearchParams({ action });
  if (query?.trim()) params.set("query", query.trim());
  if (coupon) params.set("coupon", coupon);
  return `${MOBILLING_BASE}/order/domain?${params.toString()}`;
}

/**
 * Fallback for plans MoBilling cannot sell yet (WordPress hosting, SSL
 * certificates, the Web Hosting System tier). Those products are either
 * portal_visible = 0 or still carry unconverted USD prices, so an order link
 * would dead-end. Route the customer to the sales desk on WhatsApp instead.
 *
 * Swap these back to orderUrl() once the products are fixed in MoBilling.
 */
export function enquiryUrl(planName: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    enquiryMessage(planName),
  )}`;
}

/**
 * The WhatsApp message a customer sends when they tap "Enquire".
 *
 * TODO(moinfo): write the message your sales desk wants to receive.
 * See the note in the migration summary — this is customer-facing copy and
 * the sales team's first impression, so it is yours to word.
 */
function enquiryMessage(planName: string): string {
  return `Hello Moinfo, I would like to order the ${planName} plan.`;
}
