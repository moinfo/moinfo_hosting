import { enquiryUrl, orderUrl } from "@/data/mobilling";

export interface PricingPlan {
  name: string;
  yearlyPrice: string;
  featureKeys: string[];
  orderUrl: string;
  popular?: boolean;
}

export interface PricingCategory {
  key: string;
  labelKey: string;
  plans: PricingPlan[];
  hidden?: boolean;
  columns?: number;
  readMoreUrl?: string;
  readMoreKey?: string;
}

export const pricingCategories: PricingCategory[] = [
  {
    key: "web",
    labelKey: "pricing.cat.web",
    plans: [
      {
        name: "University",
        yearlyPrice: "TSh 80,500",
        featureKeys: [
          "pf.disk4gb",
          "pf.bw4gb",
          "pf.emails20",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        orderUrl: orderUrl("web-hosting", "university"),
      },
      {
        name: "Personal",
        yearlyPrice: "TSh 120,000",
        featureKeys: [
          "pf.disk8gb",
          "pf.bw8gb",
          "pf.emails40",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        orderUrl: orderUrl("web-hosting", "personal"),
      },
      {
        name: "Professional",
        yearlyPrice: "TSh 150,000",
        popular: true,
        featureKeys: [
          "pf.disk12gb",
          "pf.bw12gb",
          "pf.emails60",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        orderUrl: orderUrl("web-hosting", "professional"),
      },
      {
        name: "Premier",
        yearlyPrice: "TSh 200,000",
        featureKeys: [
          "pf.disk20gb",
          "pf.bw20gb",
          "pf.emails80",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        orderUrl: orderUrl("web-hosting", "premier"),
      },
      {
        name: "System",
        yearlyPrice: "TSh 250,000",
        featureKeys: [
          "pf.disk15gb",
          "pf.unlimitedBandwidth",
          "pf.unlimitedEmails",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        // Not orderable in MoBilling: the portal-visible row is priced 216,000
        // (site advertises 250,000) and the correct row is portal_visible = 0.
        orderUrl: enquiryUrl("Web Hosting System"),
      },
      {
        name: "Plus",
        yearlyPrice: "TSh 500,000",
        featureKeys: [
          "pf.disk100gb",
          "pf.bw100gb",
          "pf.emails200",
          "pf.freeLetsEncryptSsl",
          "pf.freeMigrations",
          "pf.moneyBackGuarantee",
          "pf.onlineSupport247",
        ],
        orderUrl: orderUrl("web-hosting", "plus"),
      },
    ],
  },
  {
    key: "wordpress",
    labelKey: "pricing.cat.wordpress",
    hidden: true,
    plans: [
      {
        name: "WP Starter",
        yearlyPrice: "TSh 6,180",
        featureKeys: [
          "pf.wp1site",
          "pf.ssd10gb",
          "pf.autoWpUpdates",
          "pf.freeSslCert",
          "pf.dailyBackups",
          "pf.stagingEnv",
        ],
        // WordPress plans are portal_visible = 0 in MoBilling and still hold
        // unconverted USD prices — enquiry until the catalog is fixed.
        orderUrl: enquiryUrl("WP Starter"),
      },
      {
        name: "WP Business",
        yearlyPrice: "TSh 12,360",
        popular: true,
        featureKeys: [
          "pf.wp3sites",
          "pf.ssd30gb",
          "pf.autoWpUpdates",
          "pf.freeSslCert",
          "pf.dailyBackups",
          "pf.stagingEnv",
          "pf.freeDomain",
        ],
        orderUrl: enquiryUrl("WP Business"),
      },
      {
        name: "WP Enterprise",
        yearlyPrice: "TSh 20,600",
        featureKeys: [
          "pf.wpUnlimited",
          "pf.ssd100gb",
          "pf.autoWpUpdates",
          "pf.freeSslCert",
          "pf.dailyBackups",
          "pf.stagingEnv",
          "pf.freeDomain",
          "pf.premiumThemes",
        ],
        orderUrl: enquiryUrl("WP Enterprise"),
      },
    ],
  },
  {
    key: "email",
    labelKey: "pricing.cat.email",
    columns: 2,
    plans: [
      {
        name: "Starter",
        yearlyPrice: "TSh 60,000",
        featureKeys: [
          "pf.disk4gb",
          "pf.bw4gb",
          "pf.emailAccounts20",
          "pf.disasterRecovery",
          "pf.onlineSupport247",
          "pf.moneyBack30days",
        ],
        orderUrl: orderUrl("email-hosting", "starter"),
      },
      {
        name: "Medium",
        yearlyPrice: "TSh 100,000",
        popular: true,
        featureKeys: [
          "pf.disk8gb",
          "pf.bw8gb",
          "pf.emailAccounts40",
          "pf.disasterRecovery",
          "pf.onlineSupport247",
          "pf.moneyBack30days",
        ],
        orderUrl: orderUrl("email-hosting", "medium"),
      },
      {
        name: "Premier",
        yearlyPrice: "TSh 130,000",
        featureKeys: [
          "pf.disk12gb",
          "pf.bw12gb",
          "pf.emailAccounts60",
          "pf.disasterRecovery",
          "pf.onlineSupport247",
          "pf.moneyBack30days",
        ],
        orderUrl: orderUrl("email-hosting", "premier"),
      },
      {
        name: "Plus",
        yearlyPrice: "TSh 350,000",
        featureKeys: [
          "pf.disk50gb",
          "pf.bw50gb",
          "pf.emailAccounts100",
          "pf.disasterRecovery",
          "pf.onlineSupport247",
          "pf.moneyBack30days",
        ],
        orderUrl: orderUrl("email-hosting", "plus"),
      },
    ],
  },
  {
    key: "vps",
    labelKey: "pricing.cat.vps",
    readMoreUrl: "/vps",
    readMoreKey: "pricing.readMore.vps",
    plans: [
      {
        name: "MIT 500",
        yearlyPrice: "TSh 2,150,000",
        featureKeys: [
          "pf.vpsSsd50gb",
          "pf.vpsBw5tb",
          "pf.ram2gb",
          "pf.freeLetsEncryptSsl",
          "pf.freeDomain",
          "pf.ip1",
          "pf.vpsCpanelWhm5",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("vps", "linux-mit-500"),
      },
      {
        name: "MIT 600",
        yearlyPrice: "TSh 2,850,000",
        popular: true,
        featureKeys: [
          "pf.vpsSsd100gb",
          "pf.unlimitedBandwidth",
          "pf.ram4gb",
          "pf.freeLetsEncryptSsl",
          "pf.freeDomainCom",
          "pf.ip1",
          "pf.vpsCpanelWhm5",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("vps", "linux-mit-600"),
      },
      {
        name: "MIT 700",
        yearlyPrice: "TSh 3,600,000",
        featureKeys: [
          "pf.vpsSsd160gb",
          "pf.unlimitedBandwidth",
          "pf.ram8gb",
          "pf.freeLetsEncryptSsl",
          "pf.freeDomain",
          "pf.ip1",
          "pf.vpsCpanelWhm5",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("vps", "linux-mit-700"),
      },
    ],
  },
  {
    key: "dedicated",
    labelKey: "pricing.cat.dedicated",
    readMoreUrl: "/dedicated-server",
    readMoreKey: "pricing.readMore.dedicated",
    plans: [
      {
        name: "MIT 450",
        yearlyPrice: "TSh 3,600,000",
        featureKeys: [
          "pf.dsSsd120gb",
          "pf.unlimitedBandwidth",
          "pf.ram8gb",
          "pf.freeLetsEncryptSsl",
          "pf.ip1",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("dedicated-server", "linux-server-mit-450"),
      },
      {
        name: "MIT 550",
        yearlyPrice: "TSh 4,650,000",
        popular: true,
        featureKeys: [
          "pf.dsSsd480gb",
          "pf.unlimitedBandwidth",
          "pf.ram24gb",
          "pf.freeLetsEncryptSsl",
          "pf.ip1",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("dedicated-server", "linux-server-mit-550"),
      },
      {
        name: "MIT 650",
        yearlyPrice: "TSh 6,100,000",
        featureKeys: [
          "pf.dsSsd960gb",
          "pf.unlimitedBandwidth",
          "pf.ram64gb",
          "pf.freeLetsEncryptSsl",
          "pf.freeDomainCom",
          "pf.ip1",
          "pf.fullRootAccess",
        ],
        orderUrl: orderUrl("dedicated-server", "linux-server-mit-650"),
      },
    ],
  },
  {
    key: "reseller",
    labelKey: "pricing.cat.reseller",
    columns: 2,
    readMoreUrl: "/linux-reseller",
    readMoreKey: "pricing.readMore.reseller",
    plans: [
      {
        name: "Linux Reseller Starter",
        yearlyPrice: "TSh 450,000",
        featureKeys: [
          "pf.ssd25gb",
          "pf.bw250gb",
          "pf.cpanel10",
          "pf.freeSslCerts",
          "pf.whmCpanelIncluded",
        ],
        orderUrl: orderUrl("reseller-hosting", "linux-reseller-starter"),
      },
      {
        name: "Linux Reseller Medium",
        yearlyPrice: "TSh 750,000",
        popular: true,
        featureKeys: [
          "pf.ssd50gb",
          "pf.unlimitedBandwidth",
          "pf.cpanel25",
          "pf.freeSslCerts",
          "pf.freeDomainCom",
          "pf.whmCpanelIncluded",
        ],
        orderUrl: orderUrl("reseller-hosting", "linux-reseller-medium"),
      },
      {
        name: "Linux Reseller Premium",
        yearlyPrice: "TSh 950,000",
        featureKeys: [
          "pf.ssd100gb",
          "pf.unlimitedBandwidth",
          "pf.cpanel50",
          "pf.freeSslCerts",
          "pf.freeDomainCom",
          "pf.whmCpanelIncluded",
        ],
        orderUrl: orderUrl("reseller-hosting", "linux-reseller-premium"),
      },
      {
        name: "Linux Reseller Business",
        yearlyPrice: "TSh 1,700,000",
        featureKeys: [
          "pf.unlimitedSsd",
          "pf.unlimitedBandwidth",
          "pf.cpanel100",
          "pf.freeSslCerts",
          "pf.freeDomainCom",
          "pf.whmCpanelIncluded",
        ],
        orderUrl: orderUrl("reseller-hosting", "linux-reseller-business"),
      },
    ],
  },
  {
    key: "ssl",
    labelKey: "pricing.cat.ssl",
    hidden: true,
    plans: [
      {
        name: "Domain SSL",
        yearlyPrice: "TSh 4,120",
        featureKeys: [
          "pf.singleDomain",
          "pf.encryption256",
          "pf.trustSeal",
          "pf.issuance10min",
          "pf.warranty10k",
        ],
        // SSL products are portal_visible = 0 in MoBilling and still hold
        // unconverted USD prices — enquiry until the catalog is fixed.
        orderUrl: enquiryUrl("Domain SSL"),
      },
      {
        name: "Organization SSL",
        yearlyPrice: "TSh 12,360",
        popular: true,
        featureKeys: [
          "pf.singleDomain",
          "pf.encryption256",
          "pf.orgValidated",
          "pf.trustSeal",
          "pf.warranty250k",
          "pf.greenBar",
        ],
        orderUrl: enquiryUrl("Organization SSL"),
      },
      {
        name: "Wildcard SSL",
        yearlyPrice: "TSh 24,720",
        featureKeys: [
          "pf.unlimitedSubdomains",
          "pf.encryption256",
          "pf.orgValidated",
          "pf.trustSeal",
          "pf.warranty1m",
          "pf.greenBar",
          "pf.sanSupport",
        ],
        orderUrl: enquiryUrl("Wildcard SSL"),
      },
    ],
  },
];
