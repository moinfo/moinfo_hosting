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
}

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store";

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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/web-hosting`,
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
        orderUrl: `${STORE}/wordpress-hosting`,
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
        orderUrl: `${STORE}/wordpress-hosting`,
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
        orderUrl: `${STORE}/wordpress-hosting`,
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
        orderUrl: `${STORE}/email-hosting`,
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
        orderUrl: `${STORE}/email-hosting`,
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
        orderUrl: `${STORE}/email-hosting`,
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
        orderUrl: `${STORE}/email-hosting`,
      },
    ],
  },
  {
    key: "vps",
    labelKey: "pricing.cat.vps",
    hidden: true,
    plans: [
      {
        name: "VPS Basic",
        yearlyPrice: "TSh 20,600",
        featureKeys: [
          "pf.vcpu2",
          "pf.ram2gb",
          "pf.ssd40gb",
          "pf.bw1tb",
          "pf.fullRootAccess",
          "pf.ip1",
        ],
        orderUrl: `${STORE}/vps`,
      },
      {
        name: "VPS Pro",
        yearlyPrice: "TSh 41,200",
        popular: true,
        featureKeys: [
          "pf.vcpu4",
          "pf.ram4gb",
          "pf.ssd80gb",
          "pf.bw2tb",
          "pf.fullRootAccess",
          "pf.ip2",
          "pf.freeCpanel",
        ],
        orderUrl: `${STORE}/vps`,
      },
      {
        name: "VPS Elite",
        yearlyPrice: "TSh 82,400",
        featureKeys: [
          "pf.vcpu8",
          "pf.ram8gb",
          "pf.ssd160gb",
          "pf.unlimitedBandwidth",
          "pf.fullRootAccess",
          "pf.ip3",
          "pf.freeCpanel",
          "pf.ddosProtection",
        ],
        orderUrl: `${STORE}/vps`,
      },
    ],
  },
  {
    key: "reseller",
    labelKey: "pricing.cat.reseller",
    columns: 2,
    readMoreUrl: "/linux-reseller",
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
        orderUrl: `${STORE}/linux-reseller-hosting/linux-reseller-starter`,
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
        orderUrl: `${STORE}/linux-reseller-hosting/linux-reseller-medium`,
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
        orderUrl: `${STORE}/linux-reseller-hosting/linux-reseller-premium`,
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
        orderUrl: `${STORE}/linux-reseller-hosting/linux-reseller-business`,
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
        orderUrl: `${STORE}/ssl-certificates`,
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
        orderUrl: `${STORE}/ssl-certificates`,
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
        orderUrl: `${STORE}/ssl-certificates`,
      },
    ],
  },
];
