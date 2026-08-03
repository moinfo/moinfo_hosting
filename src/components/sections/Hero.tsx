"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import Link from "next/link";
import { tldPrices } from "@/data/domains";
import { fromPrice, priceIndexRows } from "@/data/priceIndex";
import {
  checkDomain,
  domainUrl,
  normaliseDomain,
  type DomainCheckResult,
} from "@/data/mobilling";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Hero.module.css";

/** "TSh 19,999" -> "19,999" — the rail and chips show bare digits in mono. */
const digitsOf = (price: string) => price.replace(/[^\d,]/g, "");

export function Hero() {
  const { t } = useLanguage();
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<DomainCheckResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState(false);

  // The design mocks this field with a static "mybusiness.co.tz" and a blinking
  // cursor. We have a real public availability endpoint, so it actually works —
  // still no sign-in needed until the customer goes to register.
  const handleCheck = async () => {
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

  const chips = tldPrices.slice(0, 6);
  const remaining = tldPrices.length - chips.length;

  return (
    <section className={`${classes.hero} ${"dcWash"}`}>
      <div className="dcGrid" aria-hidden="true" />

      <Container size="xl" className={classes.inner}>
        <div className={classes.main}>
          <div className={classes.eyebrow}>
            <span className={classes.eyebrowRule} aria-hidden="true" />
            {t("hero.eyebrow")}
          </div>

          <h1 className={classes.title}>{t("hero.title")}</h1>
          <p className={classes.lede}>{t("hero.lede")}</p>

          {/* Terminal-style availability panel */}
          <div className={classes.panel}>
            <div className={classes.panelHead}>
              <span>{t("hero.domainAvailability")}</span>
              <span>{t("hero.registryLive")}</span>
            </div>

            <div className={classes.searchRow}>
              <div className={classes.field}>
                <span className={classes.prompt} aria-hidden="true">
                  $
                </span>
                <input
                  className={classes.input}
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.currentTarget.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                  placeholder={t("hero.domainPlaceholder")}
                  aria-label={t("hero.domainAvailability")}
                />
              </div>
              <button
                type="button"
                className={classes.check}
                onClick={handleCheck}
                disabled={checking || !domain.trim()}
              >
                {checking ? t("domain.checking") : t("hero.check")}
              </button>
            </div>

            {(error || result) && (
              <div
                className={`${classes.result} ${
                  result?.offered && result.available
                    ? classes.resultOk
                    : classes.resultBad
                }`}
              >
                {error && <span>{t("domain.error")}</span>}
                {!error && result && !result.offered && (
                  <span>{result.message ?? t("domain.notOffered")}</span>
                )}
                {!error && result?.offered && result.available === false && (
                  <span>
                    <strong>{result.name}</strong> {t("domain.taken")}
                  </span>
                )}
                {!error && result?.offered && result.available === true && (
                  <>
                    <span>
                      <strong>{result.name}</strong> {t("domain.available")}
                      {result.pricing && (
                        <>
                          {" "}
                          <span className={classes.resultPrice}>
                            {result.pricing.register_price.toLocaleString("en-US")}
                            <span className={classes.per}>{t("index.perYearShort")}</span>
                          </span>
                        </>
                      )}
                    </span>
                    <a
                      className={classes.register}
                      href={domainUrl(normaliseDomain(domain))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("domain.registerNow")}
                    </a>
                  </>
                )}
              </div>
            )}

            <div className={classes.chips}>
              {chips.map((tld, i) => (
                <span
                  key={tld.tld}
                  className={`${classes.chip} ${i === 0 ? classes.chipLead : ""}`}
                >
                  {tld.tld}
                  <span className={classes.chipPrice}>{digitsOf(tld.price)}</span>
                </span>
              ))}
              {remaining > 0 && (
                <span className={classes.chipMore}>
                  +{remaining} {t("hero.moreTlds")}
                </span>
              )}
            </div>
          </div>

          <div className={classes.trust}>
            <span>{t("hero.trustMigration")}</span>
            <span className={classes.sep} aria-hidden="true">
              |
            </span>
            <span>{t("hero.trustMoneyBack")}</span>
            <span className={classes.sep} aria-hidden="true">
              |
            </span>
            <span>{t("hero.trustPay")}</span>
          </div>
        </div>

        {/*
          Price index. Every figure is derived from pricingCategories — see
          src/data/priceIndex.ts for why these must not be retyped.
        */}
        <aside className={classes.index}>
          <div className={classes.indexHead}>{t("index.title")}</div>
          {priceIndexRows.map((row) => {
            const price = fromPrice(row.categoryKey);
            if (!price) return null;
            return (
              <Link key={row.categoryKey} href={row.href} className={classes.indexRow}>
                <span className={classes.indexLabels}>
                  <span className={classes.indexName}>{t(row.labelKey)}</span>
                  <span className={classes.indexDetail}>{t(row.detailKey)}</span>
                </span>
                <span className={classes.indexPrice}>
                  {price.digits}
                  <span className={classes.per}>{t(row.periodKey)}</span>
                </span>
              </Link>
            );
          })}
        </aside>
      </Container>
    </section>
  );
}
