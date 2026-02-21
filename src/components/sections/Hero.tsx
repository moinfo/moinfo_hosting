"use client";

import { Container, Button } from "@mantine/core";
import {
  IconRocket,
  IconShieldCheck,
  IconServer,
  IconCloud,
  IconMail,
  IconWorldWww,
  IconCheck,
} from "@tabler/icons-react";
import classes from "./Hero.module.css";

const floatingCards = [
  {
    icon: IconServer,
    color: "var(--mantine-color-brand-blue-5)",
    bg: "rgba(26, 111, 196, 0.1)",
    title: "Web Hosting",
    sub: "From TSh 80,500/yr",
  },
  {
    icon: IconWorldWww,
    color: "var(--mantine-color-brand-green-5)",
    bg: "rgba(46, 182, 125, 0.1)",
    title: "Domain Names",
    sub: ".co.tz from TSh 20,000",
  },
  {
    icon: IconMail,
    color: "var(--mantine-color-brand-orange-5)",
    bg: "rgba(245, 130, 32, 0.1)",
    title: "Email Hosting",
    sub: "From TSh 60,000/yr",
  },
  {
    icon: IconCloud,
    color: "var(--mantine-color-brand-blue-5)",
    bg: "rgba(26, 111, 196, 0.1)",
    title: "VPS Servers",
    sub: "From TSh 25,750/mo",
  },
  {
    icon: IconShieldCheck,
    color: "var(--mantine-color-brand-green-5)",
    bg: "rgba(46, 182, 125, 0.1)",
    title: "SSL Certificates",
    sub: "From TSh 5,150/mo",
  },
];

export function Hero() {
  return (
    <section className={classes.hero}>
      <Container size="xl">
        <div className={classes.heroInner}>
          <div className={classes.content}>
            <div className={classes.badge}>
              <IconRocket size={16} />
              TCRA Accredited .tz Domain Registrar
            </div>

            <h1 className={classes.title}>
              Fast & Reliable{" "}
              <span className={classes.titleGradient}>Web Hosting</span> for
              Tanzanian Businesses
            </h1>

            <p className={classes.subtitle}>
              Premium hosting solutions with 99.9% uptime, free SSL, cPanel
              access, and 24/7 local support. Power your online presence with
              Tanzania&apos;s trusted hosting provider.
            </p>

            <div className={classes.ctaGroup}>
              <Button
                component="a"
                href="#pricing"
                size="lg"
                variant="gradient"
                gradient={{ from: "brand-blue", to: "brand-green", deg: 135 }}
              >
                View Hosting Plans
              </Button>
              <Button
                component="a"
                href="#domains"
                size="lg"
                variant="outline"
              >
                Search Domains
              </Button>
            </div>

            <div className={classes.trustBadges}>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                cPanel Included
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                Free SSL
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                99.9% Uptime
              </div>
              <div className={classes.trustItem}>
                <IconCheck size={16} color="var(--mantine-color-brand-green-5)" />
                24/7 Support
              </div>
            </div>

            <div className={classes.statsRow}>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>100+</div>
                <div className={classes.statLabel}>Websites Hosted</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>500+</div>
                <div className={classes.statLabel}>Domains Managed</div>
              </div>
              <div className={classes.statItem}>
                <div className={classes.statNumber}>200+</div>
                <div className={classes.statLabel}>Happy Clients</div>
              </div>
            </div>
          </div>

          <div className={classes.cardsArea}>
            {floatingCards.map((card) => (
              <div key={card.title} className={classes.floatingCard}>
                <div
                  className={classes.floatingCardIcon}
                  style={{ background: card.bg }}
                >
                  <card.icon size={22} color={card.color} />
                </div>
                <div>
                  <div className={classes.floatingCardTitle}>{card.title}</div>
                  <div className={classes.floatingCardSub}>{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
