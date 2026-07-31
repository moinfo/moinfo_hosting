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
      { labelKey: "nav.hosting.dedicated", href: "/dedicated-server" },
      { labelKey: "nav.hosting.reseller", href: "/linux-reseller" },
    ],
  },
  { labelKey: "nav.domains", href: "/domains" },
  { labelKey: "nav.webDesign", href: "/website-design" },
  { labelKey: "nav.features", href: "/#features" },
  { labelKey: "nav.contact", href: "/#footer" },
];

// Portal links now live in @/data/mobilling — import CLIENT_LOGIN, orderUrl()
// and domainUrl() from there.
