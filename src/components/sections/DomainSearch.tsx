"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { tldPrices } from "@/data/domains";
import {
  checkDomain,
  domainUrl,
  normaliseDomain,
  type DomainCheckResult,
} from "@/data/mobilling";
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
  const [result, setResult] = useState<DomainCheckResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();
  const showPromo = isPromoActive();

  // Searching is public — no account needed. Signing in only happens on
  // MoBilling once the visitor decides to register.
  const handleSearch = async () => {
    if (!domain.trim() || checking) return;
    setChecking(true);
    setError(false);
    setResult(null);
    try {
      setResult(await checkDomain(domain));
    } catch {
      setError(true);
    } finally {
      setChecking(false);
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
              disabled={checking || !domain.trim()}
            >
              {checking ? t("domain.checking") : t("domain.searchButton")}
            </button>
          </div>

          {error && (
            <div className={`${classes.result} ${classes.resultError}`}>
              {t("domain.error")}
            </div>
          )}

          {result && !result.offered && (
            <div className={`${classes.result} ${classes.resultError}`}>
              {result.message ?? t("domain.notOffered")}
            </div>
          )}

          {result?.offered && result.available === false && (
            <div className={`${classes.result} ${classes.resultTaken}`}>
              <span>
                <strong>{result.name}</strong> {t("domain.taken")}
              </span>
              <span className={classes.resultHint}>{t("domain.tryAnother")}</span>
            </div>
          )}

          {result?.offered && result.available === true && (
            <div className={`${classes.result} ${classes.resultAvailable}`}>
              <span>
                <strong>{result.name}</strong> {t("domain.available")}
                {result.pricing && (
                  <span className={classes.resultPrice}>
                    {" — TSh "}
                    {result.pricing.register_price.toLocaleString("en-US")}
                    {t("domain.perYear")}
                  </span>
                )}
              </span>
              <a
                className={classes.resultCta}
                href={domainUrl(normaliseDomain(domain))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("domain.registerNow")}
              </a>
            </div>
          )}
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
