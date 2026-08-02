"use client";

import { IconCheck } from "@tabler/icons-react";
import type { PricingPlan } from "@/data/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./PricingCard.module.css";

interface PricingCardProps {
  plan: PricingPlan;
}

/** "TSh 80,500" -> { currency: "TSh", amount: "80,500" } so the amount can be mono. */
function splitPrice(price: string) {
  const match = price.match(/^(\D*)\s*([\d,.]+)$/);
  return match
    ? { currency: match[1].trim(), amount: match[2] }
    : { currency: "", amount: price };
}

export function PricingCard({ plan }: PricingCardProps) {
  const { t } = useLanguage();
  const { currency, amount } = splitPrice(plan.yearlyPrice);

  return (
    <div className={`${classes.card} ${plan.popular ? classes.popular : ""}`}>
      {plan.popular && (
        <span className={classes.popularBadge}>{t("pricing.mostPopular")}</span>
      )}

      <div className={classes.head}>
        <span className={classes.planName}>{plan.name}</span>
        {plan.tierKey && <span className={classes.tier}>{t(plan.tierKey)}</span>}
      </div>

      {/* The price is data, so it is mono — the split is the core of the design. */}
      <div className={classes.priceRow}>
        <span className={classes.price}>{amount}</span>
        <span className={classes.period}>
          {currency} / {t("pricing.year")}
        </span>
      </div>

      {plan.specs ? (
        // Hairline grid: 1px gaps over a light background, each cell repainted
        // the page colour. Exact dividers, no border doubling.
        <div className={classes.specGrid}>
          {plan.specs.map((spec) => (
            <div key={spec.labelKey} className={classes.specCell}>
              <div className={classes.specLabel}>{t(spec.labelKey)}</div>
              <div className={classes.specValue}>
                {spec.valueKey ? t(spec.valueKey) : spec.value}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className={classes.features}>
          {plan.featureKeys.map((key) => (
            <li key={key} className={classes.featureItem}>
              <IconCheck size={15} className={classes.featureIcon} />
              {t(key)}
            </li>
          ))}
        </ul>
      )}

      {plan.specs && (
        <p className={classes.blurb}>
          {plan.featureKeys
            .slice(3)
            .map((key) => t(key))
            .join(" · ")}
        </p>
      )}

      <a
        href={plan.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes.order} ${plan.popular ? classes.orderPopular : ""}`}
      >
        {t("pricing.orderNow")}
      </a>
    </div>
  );
}
