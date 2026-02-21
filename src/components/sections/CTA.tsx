"use client";

import { Container } from "@mantine/core";
import { company } from "@/data/company";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./CTA.module.css";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className={classes.section}>
      <Container size="md">
        <h2 className={classes.title}>{t("cta.title")}</h2>
        <p className={classes.description}>
          {t("cta.description")}
        </p>
        <div className={classes.buttons}>
          <a href="#pricing" className={classes.primaryBtn}>
            {t("cta.viewPlans")}
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.secondaryBtn}
          >
            {t("cta.whatsapp")}
          </a>
        </div>
      </Container>
    </section>
  );
}
