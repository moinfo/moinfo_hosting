"use client";

import { useState } from "react";
import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { tldPrices } from "@/data/domains";
import { DOMAIN_SEARCH_URL } from "@/data/navigation";
import classes from "./DomainSearch.module.css";

export function DomainSearch() {
  const [domain, setDomain] = useState("");

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
          title="Find Your Perfect Domain"
          description="Search for your ideal domain name. We're a TCRA accredited .tz domain registrar with the best prices in Tanzania."
        />

        <div className={classes.searchWrapper}>
          <div className={classes.searchBox}>
            <input
              className={classes.searchInput}
              type="text"
              placeholder="Enter your domain name (e.g. mybusiness.co.tz)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={classes.searchButton}
              onClick={handleSearch}
              type="button"
            >
              Search Domain
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
