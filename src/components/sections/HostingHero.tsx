"use client";

import { Button, Container, Title, Text } from "@mantine/core";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./HostingHero.module.css";

interface HostingHeroProps {
  categoryKey: string;
  title: string;
  description: string;
  orderUrl: string;
}

export function HostingHero({ categoryKey, title, description, orderUrl }: HostingHeroProps) {
  const { t } = useLanguage();
  const category = pricingCategories.find((cat) => cat.key === categoryKey);

  if (!category) return null;

  const columns = category.columns ?? 3;

  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.header}>
          <Title order={1} className={classes.title}>
            {title}
          </Title>
          <Text size="lg" c="dimmed" maw={600} ta="center">
            {description}
          </Text>
        </div>

        <div
          className={classes.grid}
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {category.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className={classes.orderButton}>
          <Button
            component="a"
            href={orderUrl}
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
