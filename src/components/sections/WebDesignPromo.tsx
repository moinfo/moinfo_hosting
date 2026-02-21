"use client";

import { Container, Button } from "@mantine/core";
import { IconCheck, IconPalette } from "@tabler/icons-react";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./WebDesignPromo.module.css";

const webDesignFeatureKeys = [
  "webDesign.feature1",
  "webDesign.feature2",
  "webDesign.feature3",
  "webDesign.feature4",
  "webDesign.feature5",
  "webDesign.feature6",
  "webDesign.feature7",
  "webDesign.feature8",
];

export function WebDesignPromo() {
  const { t } = useLanguage();

  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.inner}>
          <div>
            <h2 className={classes.title}>
              {t("webDesign.title")}
            </h2>
            <p className={classes.description}>
              {t("webDesign.description")}
            </p>

            <ul className={classes.featureList}>
              {webDesignFeatureKeys.map((key) => (
                <li key={key} className={classes.featureItem}>
                  <IconCheck
                    size={18}
                    className={classes.featureIcon}
                    stroke={2}
                  />
                  {t(key)}
                </li>
              ))}
            </ul>

            <Button
              component="a"
              href="https://moinfotech.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="gradient"
              gradient={{ from: "brand-blue", to: "brand-green", deg: 135 }}
            >
              {t("webDesign.cta")}
            </Button>
          </div>

          <div className={classes.illustration}>
            <div className={classes.illustrationCard}>
              <IconPalette
                size={56}
                color="var(--mantine-color-brand-blue-5)"
                stroke={1.5}
              />
              <h3 className={classes.illustrationTitle}>{t("webDesign.cardTitle")}</h3>
              <p className={classes.illustrationSub}>
                {t("webDesign.startingFrom")}
              </p>
              <div className={classes.priceHighlight}>
                <div>
                  <div className={classes.priceLabel}>{t("webDesign.from")}</div>
                  <div className={classes.priceAmount}>TSh 25,750</div>
                  <div className={classes.priceUnit}>{t("webDesign.perMonth")}</div>
                </div>
              </div>
              <div className={classes.techStack} style={{ marginTop: 20 }}>
                <span className={classes.techBadge}>WordPress</span>
                <span className={classes.techBadge}>React</span>
                <span className={classes.techBadge}>Next.js</span>
                <span className={classes.techBadge}>PHP</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
