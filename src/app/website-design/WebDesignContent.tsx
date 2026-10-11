"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Button,
  List,
  ThemeIcon,
  Card,
  Badge,
  Group,
  Stack,
} from "@mantine/core";
import {
  IconCheck,
  IconDeviceDesktop,
  IconShoppingCart,
  IconBrandWordpress,
  IconSearch,
  IconWorld,
  IconServer,
} from "@tabler/icons-react";
import classes from "./WebDesign.module.css";

import { orderUrl } from "@/data/mobilling";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";

interface PackageItem {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  orderUrl: string;
}

const packagesByLang: Record<Language, PackageItem[]> = {
  en: [
    {
      name: "Reseller Design",
      price: "TSh 250,000",
      features: [
        "Select from Existing Templates (WordPress)",
        "5 Pages",
        "10 Images",
        "SEO Friendly",
        "3 Banners",
        "SSL Enabled",
        "Mobile Responsive Design",
        "2 Design Revisions",
        "Payment Gateway Integration",
        "Domain Reseller Integration",
        "Delivery Days 3 to 5",
      ],
      orderUrl: orderUrl("website-design", "reseller-design"),
    },
    {
      name: "Static Website Design",
      price: "TSh 500,000",
      popular: true,
      features: [
        "WordPress Free Templates",
        "Inbuilt Templates",
        "5 Pages",
        "Logo Included",
        "SEO Friendly",
        "10 Images Included",
        "SSL Enabled",
        "Responsive Website Design",
        "1 Yr. WordPress Hosting Included",
        "2 Design Revisions",
        "Delivery Days 5 to 7",
      ],
      orderUrl: orderUrl("website-design", "static-website-design"),
    },
    {
      name: "eCommerce Design",
      price: "TSh 1,800,000",
      features: [
        "WordPress Premium Theme Included",
        "15 Custom Pages",
        "Powered by WordPress Page Editor",
        "SSL Enabled",
        "SEO Friendly",
        "Mobile Responsive Design",
        "15 Products Integrated",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Logo Included",
        "Delivery Days 15 to 20",
      ],
      orderUrl: orderUrl("website-design", "ecommerce-website-design"),
    },
  ],
  sw: [
    {
      name: "Ubunifu wa Reseller",
      price: "TSh 250,000",
      features: [
        "Chagua kutoka Templates Zilizopo (WordPress)",
        "Kurasa 5",
        "Picha 10",
        "Inafaa kwa SEO",
        "Banners 3",
        "SSL Imewashwa",
        "Ubunifu Unaofaa kwa Simu",
        "Marekebisho 2 ya Ubunifu",
        "Muunganiko wa Payment Gateway",
        "Muunganiko wa Domain Reseller",
        "Siku za Kukamilisha 3 hadi 5",
      ],
      orderUrl: orderUrl("website-design", "reseller-design"),
    },
    {
      name: "Ubunifu wa Tovuti ya Kawaida",
      price: "TSh 500,000",
      popular: true,
      features: [
        "Templates Bure za WordPress",
        "Templates Zilizojengwa Ndani",
        "Kurasa 5",
        "Logo Imejumuishwa",
        "Inafaa kwa SEO",
        "Picha 10 Zimejumuishwa",
        "SSL Imewashwa",
        "Ubunifu wa Tovuti Unaojirekebisha",
        "Mwaka 1 wa WordPress Hosting Umejumuishwa",
        "Marekebisho 2 ya Ubunifu",
        "Siku za Kukamilisha 5 hadi 7",
      ],
      orderUrl: orderUrl("website-design", "static-website-design"),
    },
    {
      name: "Ubunifu wa eCommerce",
      price: "TSh 1,800,000",
      features: [
        "Theme ya Premium ya WordPress Imejumuishwa",
        "Kurasa 15 Maalum",
        "Inaendeshwa na WordPress Page Editor",
        "SSL Imewashwa",
        "Inafaa kwa SEO",
        "Ubunifu Unaofaa kwa Simu",
        "Bidhaa 15 Zimeunganishwa",
        "Muunganiko wa Payment Gateway",
        "Muunganiko wa Mitandao ya Kijamii",
        "Logo Imejumuishwa",
        "Siku za Kukamilisha 15 hadi 20",
      ],
      // Was pointing at static-website-design under WHMCS; MoBilling has a
      // matching "Ecommerce Website Design" product at the same 1,800,000 price.
      orderUrl: orderUrl("website-design", "ecommerce-website-design"),
    },
  ],
};

interface BenefitItem {
  icon: typeof IconDeviceDesktop;
  title: string;
}

const benefitsByLang: Record<Language, BenefitItem[]> = {
  en: [
    { icon: IconDeviceDesktop, title: "Professional, Mobile-friendly Website Design" },
    { icon: IconShoppingCart, title: "Seamless eCommerce Integration" },
    { icon: IconBrandWordpress, title: "WordPress/Blog Design and Development" },
    { icon: IconSearch, title: "Increased Search Ranking in Google and Major Search Engines" },
    { icon: IconWorld, title: "Stand Out Online with a Professional Website, Online Store and Blogs" },
    { icon: IconServer, title: "Hosting Services Included" },
  ],
  sw: [
    { icon: IconDeviceDesktop, title: "Ubunifu wa Tovuti wa Kitaalamu, Unaofaa kwa Simu" },
    { icon: IconShoppingCart, title: "Muunganiko Rahisi wa eCommerce" },
    { icon: IconBrandWordpress, title: "Ubunifu na Uundaji wa WordPress/Blog" },
    { icon: IconSearch, title: "Nafasi Bora ya Utafutaji kwenye Google na Injini Nyingine Kubwa" },
    { icon: IconWorld, title: "Jitokeze Mtandaoni kwa Tovuti ya Kitaalamu, Duka la Mtandaoni na Blogu" },
    { icon: IconServer, title: "Huduma za Hosting Zimejumuishwa" },
  ],
};

const copyByLang = {
  en: {
    heroTitle: "Your New Website Awaits",
    heroDescription:
      "Pick your path to a brand-new website with one of our web design options. Leave the designing to the experts — we have what you need to get the website you want.",
    benefitsTitle: "A Strong Website Accelerates Business Growth",
    benefitsSubtitle: "Grow your business with our beautiful web design",
    aboutTitle: "Website Design Services",
    aboutLead:
      "Do you want a clean, sharp, professional website design that will adapt to the future growth of your business or organization?",
    aboutBody:
      "You have found your answer with our professional web design services. Here your plans meet with our passion for design and your dreams match our dedication to providing unique, customized web design services that turns your vision into success. We can also provide ongoing website maintenance service and manage your web hosting and domain name registration.",
    packagesTitle: "Packages",
    mostPopular: "Most Popular",
    orderNow: "Order Now",
  },
  sw: {
    heroTitle: "Tovuti Yako Mpya Inakusubiri",
    heroDescription:
      "Chagua njia yako kuelekea tovuti mpya kwa mojawapo ya chaguo zetu za ubunifu wa tovuti. Acha ubunifu kwa wataalamu — tuna kila unachohitaji kupata tovuti unayotaka.",
    benefitsTitle: "Tovuti Imara Inaongeza Kasi ya Ukuaji wa Biashara",
    benefitsSubtitle: "Kuza biashara yako kwa ubunifu wetu mzuri wa tovuti",
    aboutTitle: "Huduma za Ubunifu wa Tovuti",
    aboutLead:
      "Unataka ubunifu safi, mzuri na wa kitaalamu wa tovuti utakaokua pamoja na biashara au taasisi yako?",
    aboutBody:
      "Umepata jibu lako kwenye huduma zetu za kitaalamu za ubunifu wa tovuti. Hapa mipango yako inakutana na shauku yetu ya ubunifu, na ndoto zako zinalingana na kujitoa kwetu kutoa huduma za kipekee za ubunifu wa tovuti zinazobadilisha maono yako kuwa mafanikio. Pia tunaweza kutoa huduma endelevu za matengenezo ya tovuti na kusimamia hosting yako na usajili wa jina la domain.",
    packagesTitle: "Vifurushi",
    mostPopular: "Maarufu Zaidi",
    orderNow: "Agiza Sasa",
  },
};

export function WebDesignContent() {
  const { language } = useLanguage();
  const copy = copyByLang[language];
  const packages = packagesByLang[language];
  const benefits = benefitsByLang[language];

  return (
    <>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <div className={classes.heroContent}>
            <Title order={1} className={classes.heroTitle}>
              {copy.heroTitle}
            </Title>
            <Text size="lg" c="dimmed" maw={700} ta="center">
              {copy.heroDescription}
            </Text>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className={classes.benefits}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xs">
            {copy.benefitsTitle}
          </Title>
          <Text ta="center" c="dimmed" maw={600} mx="auto" mb="xl">
            {copy.benefitsSubtitle}
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {benefits.map((b) => (
              <Card key={b.title} padding="lg" radius="md" withBorder>
                <Group gap="sm" align="flex-start">
                  <ThemeIcon
                    size={40}
                    radius="md"
                    variant="light"
                    color="brand-blue"
                  >
                    <b.icon size={22} />
                  </ThemeIcon>
                  <Text fw={600} size="sm" style={{ flex: 1 }}>
                    {b.title}
                  </Text>
                </Group>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* About */}
      <section className={classes.about}>
        <Container size="md">
          <Title order={2} ta="center" mb="xs">
            {copy.aboutTitle}
          </Title>
          <Text ta="center" c="dimmed" mb="lg">
            {copy.aboutLead}
          </Text>
          <Text ta="center" c="dimmed">
            {copy.aboutBody}
          </Text>
        </Container>
      </section>

      {/* Packages */}
      <section className={classes.packages}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xl">
            {copy.packagesTitle}
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                padding="xl"
                radius="md"
                withBorder
                className={pkg.popular ? classes.popularCard : undefined}
              >
                <Stack gap="md">
                  {pkg.popular && (
                    <Badge
                      variant="gradient"
                      gradient={{ from: "brand-blue", to: "brand-green" }}
                      size="lg"
                      mx="auto"
                    >
                      {copy.mostPopular}
                    </Badge>
                  )}
                  <Title order={3} ta="center">
                    {pkg.name}
                  </Title>
                  <Text
                    ta="center"
                    fz="2rem"
                    fw={700}
                    c="brand-blue"
                  >
                    {pkg.price}
                  </Text>

                  <List
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size={20} radius="xl" color="teal">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    {pkg.features.map((f) => (
                      <List.Item key={f}>{f}</List.Item>
                    ))}
                  </List>

                  <Button
                    component="a"
                    href={pkg.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    variant={pkg.popular ? "gradient" : "outline"}
                    gradient={
                      pkg.popular
                        ? { from: "brand-blue", to: "brand-green", deg: 135 }
                        : undefined
                    }
                    size="md"
                    mt="auto"
                  >
                    {copy.orderNow}
                  </Button>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
