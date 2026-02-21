import { Button } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import type { PricingPlan } from "@/data/pricing";
import classes from "./PricingCard.module.css";

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div className={`${classes.card} ${plan.popular ? classes.popular : ""}`}>
      {plan.popular && (
        <div className={classes.popularBadge}>Most Popular</div>
      )}
      <div className={classes.planName}>{plan.name}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.period}>
        {isYearly ? "per year" : "per month"}
      </div>

      <ul className={classes.features}>
        {plan.features.map((feature) => (
          <li key={feature} className={classes.featureItem}>
            <IconCheck size={16} className={classes.featureIcon} />
            {feature}
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
        Order Now
      </Button>
    </div>
  );
}
