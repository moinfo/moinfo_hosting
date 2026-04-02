"use client";

import { useState } from "react";
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
import { DOMAIN_SEARCH_URL } from "@/data/navigation";
import classes from "./Domains.module.css";

const features = [
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
    title: "Free Domain Transfer",
    description:
      "Transfer your existing domain to us for free. We handle the entire migration process.",
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
];

const faqs = [
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
    a: "Yes! We offer free domain transfers. Simply unlock your domain at your current registrar, get the EPP/transfer code, and initiate the transfer with us.",
  },
  {
    q: "How long does domain registration take?",
    a: ".co.tz and other Tanzanian domains are registered instantly. International domains like .com are also activated within minutes after payment.",
  },
  {
    q: "Do you offer bulk domain registration discounts?",
    a: "Yes, contact our sales team for bulk domain registration pricing. We offer discounts for 10+ domain registrations.",
  },
];

export function DomainsContent() {
  const [domain, setDomain] = useState("");

  const handleSearch = () => {
    if (domain.trim()) {
      window.open(
        `${DOMAIN_SEARCH_URL}${encodeURIComponent(domain.trim())}`,
        "_blank"
      );
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
              TCRA Accredited Registrar
            </Badge>
            <Title order={1} className={classes.heroTitle}>
              Register Your Domain Name in Tanzania
            </Title>
            <Text size="lg" c="dimmed" maw={700} ta="center">
              Get your perfect domain name starting from TSh 19,999/year.
              Register .co.tz, .tz, .com, and more with Tanzania&apos;s trusted
              TCRA accredited domain registrar.
            </Text>

            <div className={classes.searchBox}>
              <IconSearch size={20} className={classes.searchIcon} />
              <input
                className={classes.searchInput}
                type="text"
                placeholder="Search your domain name... e.g. mybusiness.co.tz"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className={classes.searchButton}
                onClick={handleSearch}
                type="button"
              >
                Search Domain
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Table */}
      <section className={classes.pricing}>
        <Container size="md">
          <Title order={2} ta="center" mb="xs">
            Domain Pricing
          </Title>
          <Text ta="center" c="dimmed" mb="xl">
            Affordable domain registration for Tanzanian businesses
          </Text>

          <Card withBorder radius="md" padding={0}>
            <Table striped highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Extension</Table.Th>
                  <Table.Th>Registration</Table.Th>
                  <Table.Th>Renewal</Table.Th>
                  <Table.Th>Transfer</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {tldPrices.map((tld) => (
                  <Table.Tr key={tld.tld}>
                    <Table.Td fw={700}>{tld.tld}</Table.Td>
                    <Table.Td>
                      {tld.price}
                      {tld.period}
                    </Table.Td>
                    <Table.Td>
                      {tld.price}
                      {tld.period}
                    </Table.Td>
                    <Table.Td>Free</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>

          <Text ta="center" size="sm" c="dimmed" mt="md">
            All prices include free DNS management. Domains can be registered
            for 1-5 years.
          </Text>
        </Container>
      </section>

      {/* Features */}
      <section className={classes.features}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xs">
            Why Register Your Domain With Us?
          </Title>
          <Text ta="center" c="dimmed" maw={600} mx="auto" mb="xl">
            Tanzania&apos;s trusted domain registrar with TCRA accreditation and
            24/7 support
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
            Every Domain Includes
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
              <List.Item>Free DNS Management</List.Item>
              <List.Item>Free Domain Forwarding</List.Item>
              <List.Item>Free Email Forwarding</List.Item>
              <List.Item>WHOIS Privacy (supported TLDs)</List.Item>
            </List>
            <List
              spacing="sm"
              icon={
                <ThemeIcon size={24} radius="xl" color="teal">
                  <IconCheck size={14} />
                </ThemeIcon>
              }
            >
              <List.Item>Domain Lock Protection</List.Item>
              <List.Item>Auto-Renewal Option</List.Item>
              <List.Item>Easy Domain Management Panel</List.Item>
              <List.Item>24/7 Technical Support</List.Item>
            </List>
          </SimpleGrid>
        </Container>
      </section>

      {/* FAQ */}
      <section className={classes.faq}>
        <Container size="md">
          <Title order={2} ta="center" mb="xl">
            Frequently Asked Questions
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
            Ready to Register Your Domain?
          </Title>
          <Text c="rgba(255,255,255,0.8)" mb="xl">
            Search and register your perfect domain name today. TCRA accredited,
            instant activation, and 24/7 support.
          </Text>
          <Group justify="center">
            <Button
              component="a"
              href="https://moinfo.co.tz/portal/cart.php?a=add&domain=register"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
              color="dark"
            >
              Register a Domain
            </Button>
            <Button
              component="a"
              href="https://moinfo.co.tz/portal/cart.php?a=add&domain=transfer"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              color="white"
            >
              Transfer a Domain
            </Button>
          </Group>
        </Container>
      </section>
    </>
  );
}
