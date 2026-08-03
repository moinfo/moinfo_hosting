/**
 * Full feature list for /features.
 *
 * Four groups of eight, per the design. Every item is something the site
 * already commits to elsewhere (plan features, policy pages, the TCRA
 * accreditation) — this page collects them, it does not invent capabilities.
 */

export interface FeatureItem {
  key: string;
  title: string;
  description: string;
}

export interface FeatureGroup {
  key: string;
  eyebrow: string;
  title: string;
  items: FeatureItem[];
}

export const featureGroups: FeatureGroup[] = [
  {
    key: "platform",
    eyebrow: "01 · Platform",
    title: "The hosting itself",
    items: [
      { key: "cpanel", title: "cPanel control panel", description: "The industry standard. File manager, databases, email, cron and one-click installs." },
      { key: "nvme", title: "SSD/NVMe storage", description: "Solid-state storage across the fleet, so disk reads are not the thing slowing your site down." },
      { key: "uptime", title: "99.9% uptime guarantee", description: "Redundant hardware with monitoring. If we miss it, the guarantee is in our hosting policy." },
      { key: "bandwidth", title: "Generous bandwidth", description: "Traffic spikes do not trigger surprise charges. Higher tiers carry unmetered transfer." },
      { key: "backups", title: "Nightly backups", description: "Automatic off-site copies, retained so a bad deploy is recoverable." },
      { key: "softaculous", title: "One-click installs", description: "WordPress, Joomla, Laravel and the rest, installed and updated from cPanel." },
      { key: "php", title: "Multiple PHP versions", description: "Pick the version per site and switch it yourself when a framework needs it." },
      { key: "dns", title: "Full DNS control", description: "A, CNAME, MX, TXT and nameserver management, at no extra cost." },
    ],
  },
  {
    key: "security",
    eyebrow: "02 · Security",
    title: "Keeping it safe",
    items: [
      { key: "ssl", title: "Free Let's Encrypt SSL", description: "Issued and renewed automatically on every domain you host with us." },
      { key: "firewall", title: "Server firewall", description: "Network-level filtering with rate limiting on the usual attack surfaces." },
      { key: "malware", title: "Malware scanning", description: "Regular scans, with alerts when something turns up in your account." },
      { key: "spam", title: "Anti-spam filtering", description: "Inbound filtering on every mailbox, tuned so real mail still arrives." },
      { key: "isolation", title: "Account isolation", description: "One compromised account on a shared server cannot reach its neighbours." },
      { key: "privacy", title: "WHOIS privacy", description: "Keep your personal details out of the public registry on supported TLDs." },
      { key: "epp", title: "Registrar lock & EPP", description: "Domains stay locked against transfer until you reveal the EPP code yourself." },
      { key: "gdpr", title: "GDPR-aligned handling", description: "How we store and process your data is written down, not assumed." },
    ],
  },
  {
    key: "support",
    eyebrow: "03 · Support",
    title: "When you need a person",
    items: [
      { key: "local", title: "Support in your time zone", description: "Kibaha-based team. No overnight wait for a reply from another continent." },
      { key: "bilingual", title: "English and Swahili", description: "Talk to us in whichever you prefer, on any channel." },
      { key: "whatsapp", title: "WhatsApp support", description: "The fastest route for a quick question, usually answered within the hour." },
      { key: "tickets", title: "Tracked tickets", description: "Every request has a history, so you are never re-explaining the problem." },
      { key: "migration", title: "Free migration", description: "We move your site and email from your current host, including DNS cutover." },
      { key: "onboarding", title: "Setup help", description: "First domain, first mailbox, first deploy — we will walk you through it." },
      { key: "kb", title: "Knowledge base", description: "Written guides for the things customers ask us most often." },
      { key: "emergency", title: "24/7 emergency cover", description: "Site down out of hours is handled through the ticket queue around the clock." },
    ],
  },
  {
    key: "commercial",
    eyebrow: "04 · Commercial",
    title: "Paying and staying",
    items: [
      { key: "mobile", title: "Mobile money", description: "M-Pesa, Tigo Pesa and Airtel Money, alongside card and bank transfer." },
      { key: "tzs", title: "Priced in shillings", description: "No exchange-rate surprises between the quote and the invoice." },
      { key: "moneyback", title: "30-day money back", description: "If the hosting is not right for you in the first month, you get it back." },
      { key: "noLockIn", title: "No lock-in", description: "Your data and your domain are yours. We hand over the EPP code on request." },
      { key: "portal", title: "Self-service portal", description: "Invoices, receipts, statements, renewals and upgrades without emailing anyone." },
      { key: "autorenew", title: "Auto-renew", description: "Optional per domain, so a forgotten renewal never costs you the name." },
      { key: "tcra", title: "TCRA accredited", description: "A registrar in our own right — .tz registrations go straight to the registry." },
      { key: "invoicing", title: "Proper tax invoices", description: "TIN on every invoice, ready for your accountant." },
    ],
  },
];
