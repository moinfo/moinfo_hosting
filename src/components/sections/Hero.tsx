"use client";

import { Container, Button } from "@mantine/core";
import {
  IconRocket,
  IconShieldCheck,
  IconServer,
  IconCloud,
  IconMail,
  IconWorldWww,
  IconCheck,
} from "@tabler/icons-react";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Hero.module.css";

const floatingCards = [
  {
    icon: IconServer,
    color: "var(--mantine-color-brand-blue-5)",
    bg: "rgba(26, 111, 196, 0.1)",
    titleKey: "hero.cardWebHosting",
    subKey: "hero.cardWebHostingSub",
  },
  {
    icon: IconWorldWww,
    color: "var(--mantine-color-brand-green-5)",
    bg: "rgba(46, 182, 125, 0.1)",
    titleKey: "hero.cardDomainNames",
    subKey: "hero.cardDomainNamesSub",
  },
  {
    icon: IconMail,
    color: "var(--mantine-color-brand-orange-5)",
    bg: "rgba(245, 130, 32, 0.1)",
    titleKey: "hero.cardEmailHosting",
    subKey: "hero.cardEmailHostingSub",
  },
  {
    icon: IconCloud,
    color: "var(--mantine-color-brand-blue-5)",
    bg: "rgba(26, 111, 196, 0.1)",
    titleKey: "hero.cardVpsServers",
    subKey: "hero.cardVpsServersSub",
  },
  {
    icon: IconShieldCheck,
    color: "var(--mantine-color-brand-green-5)",
    bg: "rgba(46, 182, 125, 0.1)",
    titleKey: "hero.cardSslCerts",
    subKey: "hero.cardSslCertsSub",
  },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className={classes.hero}>
      <Container size="xl">
        <div className={classes.heroInner}>
          <div className={classes.content}>
            <div className={classes.badge}>
              <IconRocket size={16} />
              {t("hero.badge")}
            </div>

            <h1 className={classes.title}>
              {t("hero.titleLine1")}{" "}
              <span className={classes.titleGradient}>{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titleLine2")}
            </h1>

            <p className={classes.subtitle}>
              {t("hero.subtitle")}
            </p>

            <div className={classes.ctaGroup}>
              <Button
                component="a"
                href="#pricing"
                size="lg"
                variant="gradient"
                gradient={{ from: "brand-blue", to: "brand-green", deg: 135 }}
              >
                {t("hero.viewPlans")}
              </Button>
              <Button
                component="a"
                href="#domains"
                size="lg"
                variant="outline"
              >
                {t("hero.searchDomains")}
              </Button>
            </div>

            <div className={classes.trustBadges}>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                {t("hero.trustCpanel")}
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                {t("hero.trustSsl")}
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                {t("hero.trustUptime")}
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                {t("hero.trustSupport")}
              </div>
            </div>

            <div className={classes.statsRow}>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>100+</div>
                <div className={classes.statLabel}>{t("hero.statWebsites")}</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>500+</div>
                <div className={classes.statLabel}>{t("hero.statDomains")}</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>200+</div>
                <div className={classes.statLabel}>{t("hero.statClients")}</div>
              </div>
            </div>
          </div>

          <div className={classes.cardsArea}>
            {floatingCards.map((card) => (
              <div key={card.titleKey} className={classes.floatingCard}>
                <div
                  className={classes.floatingCardIcon}
                  style={{ background: card.bg }}
                >
                  <card.icon size={22} color={card.color} />
                </div>
                <div>
                  <div className={classes.floatingCardTitle}>{t(card.titleKey)}</div>
                  <div className={classes.floatingCardSub}>{t(card.subKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
