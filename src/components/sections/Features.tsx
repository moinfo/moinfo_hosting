"use client";

import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/features";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Features.module.css";

export function Features() {
  const { t } = useLanguage();

  return (
    <section className={classes.section} id="features">
      <Container size="xl">
        <SectionHeader
          title={t("features.title")}
          description={t("features.description")}
        />

        <div className={classes.grid}>
          {features.map((feature) => (
            <div key={feature.titleKey} className={classes.card}>
              <div className={classes.iconWrapper}>
                <feature.icon
                  size={28}
                  color="var(--mantine-color-brand-blue-5)"
                  stroke={1.5}
                />
              </div>
              <h3 className={classes.cardTitle}>{t(feature.titleKey)}</h3>
              <p className={classes.cardDescription}>{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
