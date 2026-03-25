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

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/website-design";

const packages = [
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
    orderUrl: `${STORE}/reseller-design`,
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
      "1 Free Domain + 1 Yr. WordPress Hosting Included",
      "2 Design Revisions",
      "Delivery Days 5 to 7",
    ],
    orderUrl: `${STORE}/static-website-design`,
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
    orderUrl: `${STORE}/static-website-design`,
  },
];

const benefits = [
  {
    icon: IconDeviceDesktop,
    title: "Professional, Mobile-friendly Website Design",
  },
  {
    icon: IconShoppingCart,
    title: "Seamless eCommerce Integration",
  },
  {
    icon: IconBrandWordpress,
    title: "WordPress/Blog Design and Development",
  },
  {
    icon: IconSearch,
    title: "Increased Search Ranking in Google and Major Search Engines",
  },
  {
    icon: IconWorld,
    title: "Stand Out Online with a Professional Website, Online Store and Blogs",
  },
  {
    icon: IconServer,
    title: "Hosting Services Included",
  },
];

export function WebDesignContent() {
  return (
    <>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <div className={classes.heroContent}>
            <Title order={1} className={classes.heroTitle}>
              Your New Website Awaits
            </Title>
            <Text size="lg" c="dimmed" maw={700} ta="center">
              Pick your path to a brand-new website with one of our web design
              options. Leave the designing to the experts — we have what you need
              to get the website you want.
            </Text>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className={classes.benefits}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xs">
            A Strong Website Accelerates Business Growth
          </Title>
          <Text ta="center" c="dimmed" maw={600} mx="auto" mb="xl">
            Grow your business with our beautiful web design
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
            Website Design Services
          </Title>
          <Text ta="center" c="dimmed" mb="lg">
            Do you want a clean, sharp, professional website design that will
            adapt to the future growth of your business or organization?
          </Text>
          <Text ta="center" c="dimmed">
            You have found your answer with our professional web design
            services. Here your plans meet with our passion for design and your
            dreams match our dedication to providing unique, customized web
            design services that turns your vision into success. We can also
            provide ongoing website maintenance service and manage your web
            hosting and domain name registration.
          </Text>
        </Container>
      </section>

      {/* Packages */}
      <section className={classes.packages}>
        <Container size="xl">
          <Title order={2} ta="center" mb="xl">
            Packages
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
                      Most Popular
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
                    Order Now
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
