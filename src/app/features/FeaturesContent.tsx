"use client";

import Link from "next/link";
import { Container } from "@mantine/core";
import { featureGroups } from "@/data/featureGroups";
import { fromPrice } from "@/data/priceIndex";
import classes from "./Features.module.css";

/** Where to go next — prices derive from pricing.ts, never retyped. */
const NEXT_STEPS = [
  { key: "web", href: "/web-hosting", title: "Web Hosting", detail: "cPanel · free SSL · 6 tiers" },
  { key: "email", href: "/email-hosting", title: "Business Email", detail: "Webmail · IMAP · anti-spam" },
  { key: "vps", href: "/vps", title: "Linux VPS", detail: "Root access · NVMe" },
  { key: "reseller", href: "/linux-reseller", title: "Reseller Hosting", detail: "WHM · white-label" },
];

export function FeaturesContent() {
  return (
    <>
      <nav className={classes.breadcrumb} aria-label="Breadcrumb">
        <Container size="xl" className={classes.crumbInner}>
          <Link href="/" className={classes.crumbLink}>
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className={classes.crumbCurrent}>Features</span>
        </Container>
      </nav>

      <section className={`${classes.hero} dcWash`}>
        <div className="dcGrid" aria-hidden="true" />
        <Container size="xl" className={classes.heroInner}>
          <div className={classes.eyebrow}>
            <span className={classes.eyebrowRule} aria-hidden="true" />
            What you actually get
          </div>
          <h1 className={classes.title}>Everything included</h1>
          <p className={classes.lede}>
            No feature here is an add-on you discover at checkout. This is the
            full list, grouped by what it does for you.
          </p>
        </Container>
      </section>

      {featureGroups.map((group, i) => (
        <section
          key={group.key}
          className={`${classes.group} ${i % 2 === 0 ? classes.groupAlt : ""}`}
        >
          <Container size="xl">
            <div className={classes.groupHead}>
              <div className={classes.groupEyebrow}>{group.eyebrow}</div>
              <h2 className={classes.groupTitle}>{group.title}</h2>
            </div>

            {/* Hairline grid — 1px gaps read as exact dividers. */}
            <div className={classes.grid}>
              {group.items.map((item) => (
                <div
                  key={item.key}
                  className={`${classes.item} ${i % 2 === 0 ? classes.itemAlt : ""}`}
                >
                  <div className={classes.itemTitle}>{item.title}</div>
                  <p className={classes.itemDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className={classes.next}>
        <Container size="xl">
          <div className={classes.groupEyebrow}>05 · Where next</div>
          <h2 className={classes.groupTitle}>Pick a service</h2>
          <div className={classes.nextGrid}>
            {NEXT_STEPS.map((s) => {
              const price = fromPrice(s.key);
              return (
                <Link key={s.key} href={s.href} className={classes.nextCard}>
                  <span className={classes.nextTitle}>{s.title}</span>
                  <span className={classes.nextDetail}>{s.detail}</span>
                  {price && (
                    <span className={classes.nextPrice}>
                      {price.digits}
                      <span className={classes.per}>/yr</span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
