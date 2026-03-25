export interface NavLink {
  labelKey: string;
  href: string;
  children?: { labelKey: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { labelKey: "nav.home", href: "/" },
  {
    labelKey: "nav.hosting",
    href: "/#pricing",
    children: [
      { labelKey: "nav.hosting.web", href: "/web-hosting" },
      { labelKey: "nav.hosting.email", href: "/email-hosting" },
      { labelKey: "nav.hosting.vps", href: "/vps" },
      { labelKey: "nav.hosting.reseller", href: "/linux-reseller" },
    ],
  },
  { labelKey: "nav.domains", href: "/#domains" },
  { labelKey: "nav.features", href: "/#features" },
  { labelKey: "nav.contact", href: "/#footer" },
];

export const WHMCS_BASE = "https://moinfo.co.tz/portal/index.php?rp=";
export const CLIENT_LOGIN = `${WHMCS_BASE}/login`;
export const DOMAIN_SEARCH_URL = "https://moinfo.co.tz/portal/cart.php?a=add&domain=register&query=";
