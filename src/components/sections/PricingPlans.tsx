"use client";

import { useState } from "react";
import { Container, Tabs, SegmentedControl } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";
import classes from "./PricingPlans.module.css";

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className={classes.section} id="pricing">
      <Container size="xl">
        <SectionHeader
          title="Hosting Plans & Pricing"
          description="Choose the perfect hosting plan for your needs. All plans include free SSL, 24/7 support, and a 30-day money-back guarantee."
        />

        <div className={classes.controls}>
          <SegmentedControl
            value={isYearly ? "yearly" : "monthly"}
            onChange={(val) => setIsYearly(val === "yearly")}
            data={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
            size="md"
          />
        </div>

        <Tabs defaultValue="web" keepMounted={false}>
          <Tabs.List justify="center" mb="xl">
            {pricingCategories.map((cat) => (
              <Tabs.Tab key={cat.key} value={cat.key}>
                {cat.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {pricingCategories.map((cat) => (
            <Tabs.Panel key={cat.key} value={cat.key}>
              <div className={classes.grid}>
                {cat.plans.map((plan) => (
                  <PricingCard
                    key={plan.name}
                    plan={plan}
                    isYearly={isYearly}
                  />
                ))}
              </div>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
