"use client";

import { Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import type { SabaPlan } from "@/data/sabaSaba";
import { formatTsh } from "@/data/sabaSaba";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./SabaSabaCard.module.css";

interface SabaSabaCardProps {
  plan: SabaPlan;
}

/** Whole-number percent saved, e.g. 80,500 -> 40,250 gives 50. */
function discountPercent(was: number, now: number): number {
  return Math.round((1 - now / was) * 100);
}

export function SabaSabaCard({ plan }: SabaSabaCardProps) {
  const { t } = useLanguage();
  const percent = discountPercent(plan.was, plan.now);
  const isExternal = plan.orderUrl.startsWith("http");

  return (
    <div className={`${classes.card} ${plan.popular ? classes.popular : ""}`}>
      <div className={classes.saveBadge}>-{percent}%</div>

      <div className={classes.planName}>{plan.name}</div>

      <div className={classes.priceRow}>
        <span className={classes.wasPrice}>{formatTsh(plan.was)}</span>
        <span className={classes.nowPrice}>{formatTsh(plan.now)}</span>
      </div>
      <div className={classes.period}>{t("pricing.perYear")}</div>

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
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        fullWidth
        variant="gradient"
        gradient={{ from: "brand-green", to: "brand-blue", deg: 135 }}
        size="md"
      >
        {t("saba.orderNow")}
      </Button>
    </div>
  );
}
