"use client";

import { useEffect, useState } from "react";
import { Container } from "@mantine/core";
import Link from "next/link";
import { company } from "@/data/company";
import { isSabaSabaActive } from "@/data/sabaSaba";
import { useScrolled } from "@/hooks/useScrolled";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./TopBar.module.css";

/**
 * Dar es Salaam wall clock, rendered client-side only.
 *
 * Server and client would format different times, so SSR would hydrate-mismatch
 * on every load. Returning null on the first paint keeps the markup identical
 * on both sides; the clock appears a tick later.
 */
function DarClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Africa/Dar_es_Salaam",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span className={classes.clock}>DAR ES SALAAM {time}</span>;
}

export function TopBar() {
  const scrolled = useScrolled(100);
  const { t } = useLanguage();
  const showSabaSaba = isSabaSabaActive();

  return (
    <div className={`${classes.topBar} ${scrolled ? classes.hidden : ""}`}>
      <Container size="xl" className={classes.inner}>
        {/* Status strip. The design shows a measured "99.98% / 30d"; we state
            the uptime guarantee the site already advertises instead, so we are
            not publishing a monitoring figure nothing actually measures. */}
        <div className={classes.statusGroup}>
          <span className={classes.status}>
            <span className={classes.statusDot} aria-hidden="true" />
            {t("topbar.status")}
          </span>
          <DarClock />
        </div>

        <div className={classes.contactGroup}>
          {showSabaSaba && (
            <Link href="/saba-saba" className={classes.sabaSabaBadge}>
              {t("topbar.sabaSaba")}
            </Link>
          )}
          <a href={`tel:${company.phone}`} className={classes.contactItem}>
            {company.phone}
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.contactItem}
          >
            {t("topbar.whatsapp")}
          </a>
          <a href={`mailto:${company.email}`} className={classes.contactItem}>
            {company.email}
          </a>
        </div>
      </Container>
    </div>
  );
}
