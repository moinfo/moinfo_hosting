"use client";

import { Button, Container, Title, Text } from "@mantine/core";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./ResellerHero.module.css";

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/linux-reseller-hosting";

export function ResellerHero() {
  const { t } = useLanguage();
  const resellerCategory = pricingCategories.find((cat) => cat.key === "reseller");

  if (!resellerCategory) return null;

  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.header}>
          <Title order={1} className={classes.title}>
            Linux Reseller Hosting
          </Title>
          <Text size="lg" c="dimmed" maw={600} ta="center">
            Start your own hosting business with WHM/cPanel, free SSL, and full white-label support.
          </Text>
        </div>

        <div className={classes.grid}>
          {resellerCategory.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className={classes.orderButton}>
          <Button
            component="a"
            href={STORE}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="gradient"
            gradient={{ from: "brand-blue", to: "brand-green", deg: 135 }}
          >
            {t("pricing.orderNow")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
