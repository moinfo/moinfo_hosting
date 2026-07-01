"use client";

import { Container } from "@mantine/core";
import { IconPhone, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { company, } from "@/data/company";
import { isSabaSabaActive } from "@/data/sabaSaba";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./TopBar.module.css";

export function TopBar() {
  const scrolled = useScrolled(100);
  const { t } = useLanguage();
  const showSabaSaba = isSabaSabaActive();

  return (
    <div className={`${classes.topBar} ${scrolled ? classes.hidden : ""}`}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.contactGroup}>
          <a href={`tel:${company.phone}`} className={classes.contactItem}>
            <IconPhone size={14} />
            <span>{company.phone}</span>
          </a>
          <a href={`tel:${company.phone2}`} className={classes.contactItem}>
            <IconPhone size={14} />
            <span>{company.phone2}</span>
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.contactItem}
          >
            <IconBrandWhatsapp size={14} />
            <span>{t("topbar.whatsapp")}</span>
          </a>
          <a href={`mailto:${company.email}`} className={classes.contactItem}>
            <IconMail size={14} />
            <span>{company.email}</span>
          </a>
        </div>

        <div className={classes.rightGroup}>
          {showSabaSaba && (
            <Link href="/saba-saba" className={classes.sabaSabaBadge}>
              {t("topbar.sabaSaba")}
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
