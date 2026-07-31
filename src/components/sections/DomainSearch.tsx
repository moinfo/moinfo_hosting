"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { tldPrices } from "@/data/domains";
import { domainUrl } from "@/data/mobilling";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./DomainSearch.module.css";

const PROMO_START = new Date("2026-04-01T00:00:00");
const PROMO_END = new Date("2026-06-30T23:59:59");

function isPromoActive() {
  const now = new Date();
  return now >= PROMO_START && now <= PROMO_END;
}

export function DomainSearch() {
  const [domain, setDomain] = useState("");
  const { t } = useLanguage();
  const showPromo = isPromoActive();

  const handleSearch = () => {
    if (domain.trim()) {
      window.open(domainUrl(domain), "_blank");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className={classes.section} id="domains">
      <Container size="xl">
        <SectionHeader
          title={t("domain.title")}
          description={t("domain.description")}
        />

        {showPromo && (
          <div className={classes.promoBanner}>
            <span className={classes.promoTag}>🎉 Special Offer</span>
            <span className={classes.promoText}>
              Register any <strong>.tz domain</strong> at our best price — offer valid{" "}
              <strong>1 April – 30 June 2026</strong>
            </span>
          </div>
        )}

        <div className={classes.searchWrapper}>
          <div className={classes.searchBox}>
            <input
              className={classes.searchInput}
              type="text"
              placeholder={t("domain.placeholder")}
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={classes.searchButton}
              onClick={handleSearch}
              type="button"
            >
              {t("domain.searchButton")}
            </button>
          </div>
        </div>

        <div className={classes.pills}>
          {tldPrices.map((tld) => (
            <div key={tld.tld} className={classes.pill}>
              <span className={classes.pillTld}>{tld.tld}</span>
              <span className={classes.pillPrice}>
                {tld.price}
                {tld.period}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
