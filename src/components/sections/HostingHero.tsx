"use client";

import Link from "next/link";
import { Container } from "@mantine/core";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricingCategories } from "@/data/pricing";
import { domainUrl } from "@/data/mobilling";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./HostingHero.module.css";

interface HostingHeroProps {
  categoryKey: string;
  title: string;
  description: string;
  orderUrl: string;
  /** Breadcrumb tail, e.g. "Web Hosting". Falls back to the page title. */
  crumb?: string;
  /** Mono eyebrow above the h1. Falls back to the TCRA registrar line. */
  eyebrowKey?: string;
}

/**
 * Shared template behind the five service pages.
 *
 * Design order: breadcrumb → hero (eyebrow, 62px h1, 54ch lede, two CTAs, 2×2
 * stat panel) → plans. Every figure comes from pricing.ts via PricingCard, so
 * a service page can never quote a price the pricing table disagrees with.
 */
export function HostingHero({
  categoryKey,
  title,
  description,
  orderUrl,
  crumb,
  eyebrowKey = "hero.eyebrow",
}: HostingHeroProps) {
  const { t } = useLanguage();
  const category = pricingCategories.find((cat) => cat.key === categoryKey);

  if (!category) return null;

  const columns = category.columns ?? 3;

  // Facts the site already commits to elsewhere — nothing invented here.
  const stats = [
    { labelKey: "svc.statUptime", value: "99.9%" },
    { labelKey: "svc.statSupport", value: "24/7" },
    { labelKey: "svc.statSsl", valueKey: "svc.free" },
    { labelKey: "svc.statMigration", valueKey: "svc.free" },
  ];

  return (
    <>
      <nav className={classes.breadcrumb} aria-label="Breadcrumb">
        <Container size="xl" className={classes.crumbInner}>
          <Link href="/" className={classes.crumbLink}>
            {t("nav.home")}
          </Link>
          <span aria-hidden="true">/</span>
          <span className={classes.crumbCurrent}>{crumb ?? title}</span>
        </Container>
      </nav>

      <section className={`${classes.hero} dcWash`}>
        <div className="dcGrid" aria-hidden="true" />
        <Container size="xl" className={classes.heroInner}>
          <div className={classes.heroMain}>
            <div className={classes.eyebrow}>
              <span className={classes.eyebrowRule} aria-hidden="true" />
              {t(eyebrowKey)}
            </div>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.lede}>{description}</p>

            <div className={classes.ctas}>
              <a className={classes.ctaPrimary} href="#plans">
                {t("svc.seePlans")}
              </a>
              <a
                className={classes.ctaSecondary}
                href={domainUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.searchDomains")}
              </a>
            </div>
          </div>

          {/* 2×2 hairline stat panel */}
          <div className={classes.statPanel}>
            {stats.map((s) => (
              <div key={s.labelKey} className={classes.stat}>
                <div className={classes.statLabel}>{t(s.labelKey)}</div>
                <div className={classes.statValue}>
                  {s.valueKey ? t(s.valueKey) : s.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={classes.plans} id="plans">
        <Container size="xl">
          <div className={classes.plansHead}>
            <div className={classes.plansEyebrow}>{t("svc.plansEyebrow")}</div>
            <h2 className={classes.plansTitle}>{t("svc.plansTitle")}</h2>
          </div>

          <div
            className={classes.grid}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {category.plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <div className={classes.orderRow}>
            <a
              className={classes.ctaPrimary}
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("pricing.orderNow")}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
