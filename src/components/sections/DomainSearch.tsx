"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { tldPrices } from "@/data/domains";
import { DOMAIN_SEARCH_URL } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./DomainSearch.module.css";

export function DomainSearch() {
  const [domain, setDomain] = useState("");
  const { t } = useLanguage();

  const handleSearch = () => {
    if (domain.trim()) {
      window.open(`${DOMAIN_SEARCH_URL}${encodeURIComponent(domain.trim())}`, "_blank");
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
