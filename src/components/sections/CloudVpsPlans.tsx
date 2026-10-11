"use client";

import { Container } from "@mantine/core";
import {
  cloudVpsOrderUrl,
  cloudVpsPlans,
  formatTzs,
  monthlyTzs,
} from "@/data/cloud-vps";
import { useLanguage } from "@/i18n/LanguageContext";
import card from "@/components/ui/PricingCard.module.css";
import classes from "./HostingHero.module.css";

/**
 * Cloud VPS plans, priced in TZS from src/data/cloud-vps.ts. Shown on /vps
 * under the existing MIT plans; reuses the pricing card styles.
 */
export function CloudVpsPlans() {
  const { t } = useLanguage();
  const plans = cloudVpsPlans.filter((p) => !p.hidden);

  return (
    <section className={classes.plans} id="cloud-vps">
      <Container size="xl">
        <div className={classes.plansHead}>
          <div className={classes.plansEyebrow}>{t("cloudVps.eyebrow")}</div>
          <h2 className={classes.plansTitle}>{t("cloudVps.title")}</h2>
          <p className={classes.lede}>{t("cloudVps.description")}</p>
        </div>

        <div
          className={classes.grid}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${card.card} ${plan.popular ? card.popular : ""}`}
            >
              {plan.popular && (
                <span className={card.popularBadge}>
                  {t("pricing.mostPopular")}
                </span>
              )}

              <div className={card.head}>
                <span className={card.planName}>{plan.name}</span>
                <span className={card.tier}>
                  {t(
                    plan.cpu === "dedicated"
                      ? "cloudVps.dedicatedCpu"
                      : "cloudVps.sharedCpu",
                  )}
                </span>
              </div>

              <div className={card.priceRow}>
                <span className={card.price}>{formatTzs(monthlyTzs(plan))}</span>
                <span className={card.period}>
                  TSh / {t("cloudVps.month")}
                </span>
              </div>

              <div className={card.specGrid}>
                <div className={card.specCell}>
                  <div className={card.specLabel}>vCPU</div>
                  <div className={card.specValue}>{plan.vcpu}</div>
                </div>
                <div className={card.specCell}>
                  <div className={card.specLabel}>RAM</div>
                  <div className={card.specValue}>{plan.ramGb} GB</div>
                </div>
                <div className={card.specCell}>
                  <div className={card.specLabel}>{t("spec.disk")}</div>
                  <div className={card.specValue}>{plan.diskGb} GB SSD</div>
                </div>
                <div className={card.specCell}>
                  <div className={card.specLabel}>{t("spec.bandwidth")}</div>
                  <div className={card.specValue}>{plan.transferTb} TB</div>
                </div>
              </div>

              <a
                href={cloudVpsOrderUrl(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card.order} ${plan.popular ? card.orderPopular : ""}`}
              >
                {t("pricing.orderNow")}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
