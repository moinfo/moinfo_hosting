"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Badge,
  Table,
  ThemeIcon,
  List,
  Group,
  Paper,
  TextInput,
  Loader,
  Center,
  ScrollArea,
} from "@mantine/core";
import {
  IconCheck,
  IconSearch,
  IconShield,
  IconWorld,
  IconRefresh,
  IconArrowsTransferDown,
  IconLock,
  IconHeadset,
} from "@tabler/icons-react";
import { tldPrices } from "@/data/domains";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";
import {
  checkDomain,
  domainUrl,
  getDomainCatalog,
  normaliseDomain,
  type DomainCatalogEntry,
  type DomainCheckResult,
} from "@/data/mobilling";
import classes from "./Domains.module.css";

/** "Who it's for" copy only exists for the handful of .tz-family extensions
 * TZNIC restricts to a registrant category — every other TLD (hundreds of
 * open gTLDs from the Name.com catalog) has no such restriction. */
const AUDIENCE_BY_TLD: Record<string, string> = Object.fromEntries(
  tldPrices.map((t) => [t.tld.replace(/^\./, ""), t.audienceKey ?? ""]),
);

function formatTsh(n: number): string {
  return `TSh ${Math.round(n).toLocaleString("en-US")}`;
}

interface FeatureItem {
  icon: typeof IconShield;
  title: string;
  description: string;
}

const featuresByLang: Record<Language, FeatureItem[]> = {
  en: [
    {
      icon: IconShield,
      title: "TCRA Accredited Registrar",
      description:
        "We are officially accredited by TCRA (Tanzania Communications Regulatory Authority) for .tz domain registration.",
    },
    {
      icon: IconWorld,
      title: "Free DNS Management",
      description:
        "Full control over your DNS records. Add A, CNAME, MX, TXT records and manage nameservers at no extra cost.",
    },
    {
      icon: IconRefresh,
      title: "Easy Renewal",
      description:
        "Auto-renewal available so you never lose your domain. Renew for 1-5 years at a time.",
    },
    {
      icon: IconArrowsTransferDown,
      title: "Domain Transfer Support",
      description:
        "Transfer your .tz domain to us for free — fully self-service. For other extensions, our team handles the transfer for you.",
    },
    {
      icon: IconLock,
      title: "Domain Privacy Protection",
      description:
        "Keep your personal information safe with WHOIS privacy protection on supported TLDs.",
    },
    {
      icon: IconHeadset,
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to help with domain registration, transfers, and DNS issues.",
    },
  ],
  sw: [
    {
      icon: IconShield,
      title: "Msajili Aliyeidhinishwa na TCRA",
      description:
        "Tumeidhinishwa rasmi na TCRA (Mamlaka ya Mawasiliano Tanzania) kusajili domain za .tz.",
    },
    {
      icon: IconWorld,
      title: "Usimamizi Bure wa DNS",
      description:
        "Udhibiti kamili wa DNS records zako. Ongeza A, CNAME, MX, TXT records na simamia nameservers bila gharama ya ziada.",
    },
    {
      icon: IconRefresh,
      title: "Uongezaji Muda Rahisi",
      description:
        "Auto-renewal inapatikana ili usipoteze domain yako kamwe. Ongeza muda kwa miaka 1-5 kwa wakati mmoja.",
    },
    {
      icon: IconArrowsTransferDown,
      title: "Msaada wa Kuhamisha Domain",
      description:
        "Hamisha domain yako ya .tz kwetu bure — moja kwa moja mwenyewe. Kwa extensions nyingine, timu yetu inakuhamishia.",
    },
    {
      icon: IconLock,
      title: "Ulinzi wa Faragha ya Domain",
      description:
        "Weka taarifa zako binafsi salama kwa ulinzi wa faragha wa WHOIS kwenye TLD zinazotumika.",
    },
    {
      icon: IconHeadset,
      title: "Msaada wa Saa 24/7",
      description:
        "Timu yetu ya msaada ipo tayari muda wote kukusaidia na usajili wa domain, uhamishaji, na masuala ya DNS.",
    },
  ],
};

interface FaqItem {
  q: string;
  a: string;
}

const faqsByLang: Record<Language, FaqItem[]> = {
  en: [
    {
      q: "How do I register a .co.tz domain?",
      a: "Simply search for your desired domain name above, select .co.tz, and complete the checkout. Registration is instant and your domain will be active within minutes. We are a TCRA accredited registrar.",
    },
    {
      q: "What documents do I need for a .tz domain?",
      a: "For .co.tz domains, no special documents are required. For .or.tz you need organization registration, and for .ac.tz you need proof of being an academic institution.",
    },
    {
      q: "Can I transfer my domain from another registrar?",
      a: "For .tz-family domains (.co.tz, .tz, and similar), yes — transfers are free and self-service: unlock your domain at your current registrar, get the EPP/transfer code, and initiate the transfer with us. For other extensions (.com, .net, .org, and more), contact our support team and we'll handle the transfer for you.",
    },
    {
      q: "How long does domain registration take?",
      a: ".co.tz and other Tanzanian domains are registered instantly. International domains like .com are also activated within minutes after payment.",
    },
    {
      q: "Do you offer bulk domain registration discounts?",
      a: "Yes, contact our sales team for bulk domain registration pricing. We offer discounts for 10+ domain registrations.",
    },
  ],
  sw: [
    {
      q: "Ninawezaje kusajili domain ya .co.tz?",
      a: "Tafuta tu jina la domain unalotaka hapo juu, chagua .co.tz, kisha kamilisha malipo. Usajili ni wa papo hapo na domain yako itakuwa hai ndani ya dakika chache. Sisi ni msajili aliyeidhinishwa na TCRA.",
    },
    {
      q: "Ninahitaji nyaraka gani kwa domain ya .tz?",
      a: "Kwa domain za .co.tz, hakuna nyaraka maalum zinazohitajika. Kwa .or.tz unahitaji usajili wa taasisi, na kwa .ac.tz unahitaji uthibitisho wa kuwa taasisi ya kielimu.",
    },
    {
      q: "Naweza kuhamisha domain yangu kutoka kwa msajili mwingine?",
      a: "Kwa domain za familia ya .tz (.co.tz, .tz, na nyinginezo), ndiyo — uhamishaji ni bure na wa kujitegemea: fungua domain yako kwa msajili wako wa sasa, pata EPP/transfer code, kisha anzisha uhamishaji nasi. Kwa extensions nyingine (.com, .net, .org, na zaidi), wasiliana na timu yetu ya msaada na tutakuhamishia.",
    },
    {
      q: "Usajili wa domain unachukua muda gani?",
      a: "Domain za .co.tz na nyingine za Tanzania zinasajiliwa papo hapo. Domain za kimataifa kama .com pia zinawashwa ndani ya dakika chache baada ya malipo.",
    },
    {
      q: "Mnatoa punguzo la bei kwa usajili wa domain nyingi kwa pamoja?",
      a: "Ndiyo, wasiliana na timu yetu ya mauzo kwa bei maalum za usajili wa domain nyingi. Tunatoa punguzo kwa usajili wa domain 10+.",
    },
  ],
};

const copyByLang = {
  en: {
    badge: "TCRA Accredited Registrar",
    heroTitle: "Register Your Domain Name in Tanzania",
    heroDescription:
      "Get your perfect domain name starting from TSh 19,999/year. Register .co.tz, .tz, .com, and more with Tanzania's trusted TCRA accredited domain registrar.",
    searchPlaceholder: "Search your domain name... e.g. mybusiness.co.tz",
    checking: "Checking…",
    searchButton: "Search Domain",
    checkFailed: "Could not check that domain right now — please try again.",
    taken: "is already taken. Try a different name or extension.",
    available: "is available",
    perYear: "/year",
    registerNow: "Register Now",
    pricingTitle: "Domain Pricing",
    pricingSubtitleWithCatalog: (n: number) =>
      `${n} extensions available — search, register and transfer, all from one account.`,
    pricingSubtitleFallback: "Affordable domain registration for Tanzanian businesses",
    filterPlaceholder: "Filter by extension… e.g. tz, com, info",
    thExtension: "Extension",
    thAudience: "Who it's for",
    thRegistration: "Registration",
    thRenewal: "Renewal",
    thTransfer: "Transfer",
    noMatch: (q: string) => `No extension matches "${q}".`,
    popular: "Popular",
    free: "Free",
    contactUs: "Contact us",
    pricingFootnote:
      "All prices include free DNS management. Domains can be registered for 1-5 years.",
    whyTitle: "Why Register Your Domain With Us?",
    whySubtitle:
      "Tanzania's trusted domain registrar with TCRA accreditation and 24/7 support",
    includedTitle: "Every Domain Includes",
    includedCol1: [
      "Free DNS Management",
      "Free Domain Forwarding",
      "Free Email Forwarding",
      "WHOIS Privacy (supported TLDs)",
    ],
    includedCol2: [
      "Domain Lock Protection",
      "Auto-Renewal Option",
      "Easy Domain Management Panel",
      "24/7 Technical Support",
    ],
    faqTitle: "Frequently Asked Questions",
    ctaTitle: "Ready to Register Your Domain?",
    ctaDescription:
      "Search and register your perfect domain name today. TCRA accredited, instant activation, and 24/7 support.",
    ctaRegister: "Register a Domain",
    ctaTransfer: "Transfer a Domain",
  },
  sw: {
    badge: "Msajili Aliyeidhinishwa na TCRA",
    heroTitle: "Sajili Jina la Domain Yako Tanzania",
    heroDescription:
      "Pata jina bora la domain kuanzia TSh 19,999/mwaka. Sajili .co.tz, .tz, .com, na zaidi na msajili wa domain unayemuamini Tanzania, aliyeidhinishwa na TCRA.",
    searchPlaceholder: "Tafuta jina la domain yako... mfano mybiashara.co.tz",
    checking: "Inakagua…",
    searchButton: "Tafuta Domain",
    checkFailed: "Imeshindikana kukagua domain hiyo kwa sasa — jaribu tena.",
    taken: "tayari imechukuliwa. Jaribu jina lingine au extension nyingine.",
    available: "inapatikana",
    perYear: "/mwaka",
    registerNow: "Sajili Sasa",
    pricingTitle: "Bei za Domain",
    pricingSubtitleWithCatalog: (n: number) =>
      `Extensions ${n} zinapatikana — tafuta, sajili na hamisha, zote kutoka akaunti moja.`,
    pricingSubtitleFallback: "Usajili wa domain wenye bei nafuu kwa biashara za Tanzania",
    filterPlaceholder: "Chuja kwa extension… mfano tz, com, info",
    thExtension: "Extension",
    thAudience: "Kwa Nani",
    thRegistration: "Usajili",
    thRenewal: "Uongezaji Muda",
    thTransfer: "Uhamishaji",
    noMatch: (q: string) => `Hakuna extension inayolingana na "${q}".`,
    popular: "Maarufu",
    free: "Bure",
    contactUs: "Wasiliana nasi",
    pricingFootnote:
      "Bei zote zinajumuisha usimamizi bure wa DNS. Domain zinaweza kusajiliwa kwa miaka 1-5.",
    whyTitle: "Kwa Nini Usajili Domain Yako Nasi?",
    whySubtitle:
      "Msajili wa domain unayemuamini Tanzania, aliyeidhinishwa na TCRA na msaada wa saa 24/7",
    includedTitle: "Kila Domain Inajumuisha",
    includedCol1: [
      "Usimamizi Bure wa DNS",
      "Uhamishaji Bure wa Domain",
      "Uhamishaji Bure wa Barua pepe",
      "Faragha ya WHOIS (TLD zinazotumika)",
    ],
    includedCol2: [
      "Ulinzi wa Kufunga Domain",
      "Chaguo la Auto-Renewal",
      "Paneli Rahisi ya Kusimamia Domain",
      "Msaada wa Kiufundi Saa 24/7",
    ],
    faqTitle: "Maswali Yanayoulizwa Mara kwa Mara",
    ctaTitle: "Uko Tayari Kusajili Domain Yako?",
    ctaDescription:
      "Tafuta na usajili jina bora la domain yako leo. Umeidhinishwa na TCRA, uanzishaji wa papo hapo, na msaada wa saa 24/7.",
    ctaRegister: "Sajili Domain",
    ctaTransfer: "Hamisha Domain",
  },
};

export function DomainsContent() {
  const { t, language } = useLanguage();
  const copy = copyByLang[language];
  const features = featuresByLang[language];
  const faqs = faqsByLang[language];
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<DomainCheckResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState(false);

  // The full on-sale catalog (hundreds of TLDs via our Name.com + FRED
  // integration) — live, so it can never drift from what MoBilling actually
  // sells. Falls back to the short static list if the fetch fails, so the
  // page still shows something rather than an empty table.
  const [catalog, setCatalog] = useState<DomainCatalogEntry[] | null>(null);
  const [catalogError, setCatalogError] = useState(false);
  const [tldFilter, setTldFilter] = useState("");

  useEffect(() => {
    getDomainCatalog()
      .then(setCatalog)
      .catch(() => setCatalogError(true));
  }, []);

  const filterText = tldFilter.trim().toLowerCase().replace(/^\./, "");
  const catalogRows = (catalog ?? []).filter((e) =>
    filterText ? e.tld.toLowerCase().includes(filterText) : true,
  );

  // Public check — visitors see availability and price before being asked to
  // sign in. Login happens on MoBilling only when they go to register.
  const handleSearch = async () => {
    if (!domain.trim() || checking) return;
    setChecking(true);
    setError(false);
    setResult(null);
    try {
      setResult(await checkDomain(domain));
    } catch {
      setError(true);
    } finally {
      setChecking(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      {/* Hero + Search */}
      <section className={classes.hero}>
        <Container size="xl">
          <div className={classes.heroContent}>
            <Badge size="lg" variant="light" color="brand-blue" mb="sm">
              {copy.badge}
            </Badge>
            <Title order={1} className={classes.heroTitle}>
              {copy.heroTitle}
            </Title>
            <Text size="lg" c="dimmed" maw={700} ta="center">
              {copy.heroDescription}
            </Text>

            <div className={classes.searchBox}>
              <IconSearch size={20} className={classes.searchIcon} />
              <input
                className={classes.searchInput}
                type="text"
                placeholder={copy.searchPlaceholder}
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className={classes.searchButton}
                onClick={handleSearch}
                type="button"
                disabled={checking || !domain.trim()}
              >
                {checking ? copy.checking : copy.searchButton}
              </button>
            </div>

            {(error || result) && (
              <Paper
                withBorder
                radius="md"
                p="md"
                mt="md"
                maw={720}
                w="100%"
                style={{
                  borderColor:
                    result?.offered && result.available
                      ? "var(--mantine-color-brand-green-5)"
                      : "var(--mantine-color-brand-orange-5)",
                }}
              >
                {error && <Text size="sm">{copy.checkFailed}</Text>}

                {!error && result && !result.offered && (
                  <Text size="sm">{result.message ?? "We don't offer that extension yet."}</Text>
                )}

                {!error && result?.offered && result.available === false && (
                  <Text size="sm">
                    <strong>{result.name}</strong> {copy.taken}
                  </Text>
                )}

                {!error && result?.offered && result.available === true && (
                  <Group justify="space-between" wrap="wrap" gap="sm">
                    <Text size="sm">
                      <strong>{result.name}</strong> {copy.available}
                      {result.pricing && (
                        <>
                          {" — "}
                          <strong>
                            TSh{" "}
                            {result.pricing.register_price.toLocaleString("en-US")}
                            {copy.perYear}
                          </strong>
                        </>
                      )}
                    </Text>
                    <Button
                      component="a"
                      href={domainUrl(normaliseDomain(domain))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.registerNow}
                    </Button>
                  </Group>
                )}
              </Paper>
            )}
          </div>
        </Container>
      </section>

      {/* Pricing Table */}
      <section className={classes.pricing}>
        <Container size="md">
          <Title order={2} ta="center" mb="xs">
            {copy.pricingTitle}
          </Title>
          <Text ta="center" c="dimmed" mb="xl">
            {catalog
              ? copy.pricingSubtitleWithCatalog(catalog.length)
              : copy.pricingSubtitleFallback}
          </Text>

          <TextInput
            placeholder={copy.filterPlaceholder}
            leftSection={<IconSearch size={16} />}
            value={tldFilter}
            onChange={(e) => setTldFilter(e.currentTarget.value)}
            mb="md"
            maw={360}
            mx="auto"
          />

          <Card withBorder radius="md" padding={0}>
            <ScrollArea.Autosize mah={560}>
              <Table striped highlightOnHover stickyHeader>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>{copy.thExtension}</Table.Th>
                    <Table.Th>{copy.thAudience}</Table.Th>
                    <Table.Th>{copy.thRegistration}</Table.Th>
                    <Table.Th>{copy.thRenewal}</Table.Th>
                    <Table.Th>{copy.thTransfer}</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {!catalog && !catalogError && (
                    <Table.Tr>
                      <Table.Td colSpan={5}>
                        <Center py="md"><Loader size="sm" /></Center>
                      </Table.Td>
                    </Table.Tr>
                  )}

                  {/* Fallback: the short static list, only if the live catalog could not load.
                      Only .tz-family extensions transfer for free — .com (the one non-.tz
                      entry in this list) is Name.com-registered and isn't self-service. */}
                  {catalogError && tldPrices.map((tld) => {
                    const tzFamily = tld.tld.replace(/^\./, "").endsWith("tz");
                    return (
                      <Table.Tr key={tld.tld}>
                        <Table.Td fw={700} ff="var(--dc-font-mono)">{tld.tld}</Table.Td>
                        <Table.Td c="dimmed">
                          {tld.audienceKey ? t(tld.audienceKey) : "—"}
                        </Table.Td>
                        <Table.Td ff="var(--dc-font-mono)">{tld.price}{tld.period}</Table.Td>
                        <Table.Td ff="var(--dc-font-mono)">{tld.price}{tld.period}</Table.Td>
                        <Table.Td c={tzFamily ? "var(--dc-accent-text)" : "dimmed"}>
                          {tzFamily ? copy.free : copy.contactUs}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}

                  {catalog && catalogRows.length === 0 && (
                    <Table.Tr>
                      <Table.Td colSpan={5}>
                        <Text ta="center" c="dimmed" py="md">{copy.noMatch(tldFilter)}</Text>
                      </Table.Td>
                    </Table.Tr>
                  )}

                  {catalog && catalogRows.map((entry) => {
                    const audienceKey = AUDIENCE_BY_TLD[entry.tld];
                    return (
                      <Table.Tr key={entry.tld}>
                        <Table.Td fw={700} ff="var(--dc-font-mono)">
                          .{entry.tld}
                          {entry.is_popular && (
                            <Badge ml={8} size="xs" variant="light" color="brand-blue">{copy.popular}</Badge>
                          )}
                        </Table.Td>
                        <Table.Td c="dimmed">{audienceKey ? t(audienceKey) : "—"}</Table.Td>
                        <Table.Td ff="var(--dc-font-mono)">{formatTsh(entry.register_price)}/yr</Table.Td>
                        <Table.Td ff="var(--dc-font-mono)">{formatTsh(entry.renew_price)}/yr</Table.Td>
                        <Table.Td c={entry.transfer_supported ? "var(--dc-accent-text)" : "dimmed"}>
                          {entry.transfer_supported
                            ? entry.transfer_price > 0
                              ? `${formatTsh(entry.transfer_price)}/yr`
                              : copy.free
                            : copy.contactUs}
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
                </Table.Tbody>
              </Table>
            </ScrollArea.Autosize>
          </Card>

          <Text ta="center" size="sm" c="dimmed" mt="md">
            {copy.pricingFootnote}
          </Text>
        </Container>
      </section>

      {/* Features */}
      <section className={classes.features}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xs">
            {copy.whyTitle}
          </Title>
          <Text ta="center" c="dimmed" maw={600} mx="auto" mb="xl">
            {copy.whySubtitle}
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {features.map((f) => (
              <Card key={f.title} padding="lg" radius="md" withBorder>
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="light"
                  color="brand-blue"
                  mb="sm"
                >
                  <f.icon size={24} />
                </ThemeIcon>
                <Text fw={600} mb={4}>
                  {f.title}
                </Text>
                <Text size="sm" c="dimmed">
                  {f.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* What's Included */}
      <section className={classes.included}>
        <Container size="md">
          <Title order={2} ta="center" mb="xl">
            {copy.includedTitle}
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <List
              spacing="sm"
              icon={
                <ThemeIcon size={24} radius="xl" color="teal">
                  <IconCheck size={14} />
                </ThemeIcon>
              }
            >
              {copy.includedCol1.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
            <List
              spacing="sm"
              icon={
                <ThemeIcon size={24} radius="xl" color="teal">
                  <IconCheck size={14} />
                </ThemeIcon>
              }
            >
              {copy.includedCol2.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
          </SimpleGrid>
        </Container>
      </section>

      {/* FAQ */}
      <section className={classes.faq}>
        <Container size="md">
          <Title order={2} ta="center" mb="xl">
            {copy.faqTitle}
          </Title>
          {faqs.map((faq) => (
            <Card
              key={faq.q}
              withBorder
              radius="md"
              padding="lg"
              mb="md"
            >
              <Text fw={700} mb="xs">
                {faq.q}
              </Text>
              <Text size="sm" c="dimmed">
                {faq.a}
              </Text>
            </Card>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className={classes.cta}>
        <Container size="md" ta="center">
          <Title order={2} c="white" mb="sm">
            {copy.ctaTitle}
          </Title>
          <Text c="rgba(255,255,255,0.8)" mb="xl">
            {copy.ctaDescription}
          </Text>
          <Group justify="center">
            <Button
              component="a"
              href={domainUrl(undefined, "register")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
              color="dark"
            >
              {copy.ctaRegister}
            </Button>
            <Button
              component="a"
              href={domainUrl(undefined, "transfer")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              color="white"
            >
              {copy.ctaTransfer}
            </Button>
          </Group>
        </Container>
      </section>
    </>
  );
}
