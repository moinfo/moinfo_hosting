"use client";

import Link from "next/link";
import { Button, Container, Tabs } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./PricingPlans.module.css";

export function PricingPlans() {
  const { t } = useLanguage();
  const visibleCategories = pricingCategories.filter((cat) => !cat.hidden);

  return (
    <section className={classes.section} id="pricing">
      <Container size="xl">
        <div className={classes.eyebrow}>{t("pricing.eyebrow")}</div>
        <SectionHeader
          title={t("pricing.title")}
          description={t("pricing.description")}
        />

        <Tabs defaultValue="web" keepMounted={false}>
          <Tabs.List justify="center" mb="xl">
            {visibleCategories.map((cat) => (
              <Tabs.Tab key={cat.key} value={cat.key}>
                {t(cat.labelKey)}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {visibleCategories.map((cat) => (
            <Tabs.Panel key={cat.key} value={cat.key}>
              <div
                className={classes.grid}
                style={cat.columns ? { gridTemplateColumns: `repeat(${cat.columns}, 1fr)` } : undefined}
              >
                {cat.plans.map((plan) => (
                  <PricingCard
                    key={plan.name}
                    plan={plan}
                  />
                ))}
              </div>
              {cat.readMoreUrl && (
                <div className={classes.readMore}>
                  <Button
                    component={Link}
                    href={cat.readMoreUrl}
                    variant="outline"
                    size="md"
                  >
                    {t(cat.readMoreKey ?? "pricing.readMore")}
                  </Button>
                </div>
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
