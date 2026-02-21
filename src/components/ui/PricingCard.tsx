"use client";

import { Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import type { PricingPlan } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./PricingCard.module.css";

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const { t } = useLanguage();

  return (
    <div className={`${classes.card} ${plan.popular ? classes.popular : ""}`}>
      {plan.popular && (
        <div className={classes.popularBadge}>{t("pricing.mostPopular")}</div>
      )}
      <div className={classes.planName}>{plan.name}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.period}>
        {isYearly ? t("pricing.perYear") : t("pricing.perMonth")}
      </div>

      <ul className={classes.features}>
        {plan.featureKeys.map((key) => (
          <li key={key} className={classes.featureItem}>
            <IconCheck size={16} className={classes.featureIcon} />
            {t(key)}
          </li>
        ))}
      </ul>

      <Button
        component="a"
        href={plan.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth
        variant={plan.popular ? "gradient" : "outline"}
        gradient={
          plan.popular
            ? { from: "brand-blue", to: "brand-green", deg: 135 }
            : undefined
        }
        size="md"
      >
        {t("pricing.orderNow")}
      </Button>
    </div>
  );
}
