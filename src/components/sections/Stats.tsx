"use client";

import { Container } from "@mantine/core";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Stats.module.css";

interface StatItemProps {
  end: number;
  suffix: string;
  labelKey: string;
}

function StatItem({ end, suffix, labelKey }: StatItemProps) {
  const { count, ref } = useAnimatedCounter(end);
  const { t } = useLanguage();

  return (
    <div className={classes.stat} ref={ref}>
      <div className={classes.number}>
        {count}
        <span className={classes.suffix}>{suffix}</span>
      </div>
      <div className={classes.label}>{t(labelKey)}</div>
    </div>
  );
}

const stats = [
  { end: 100, suffix: "+", labelKey: "stats.websites" },
  { end: 500, suffix: "+", labelKey: "stats.domains" },
  { end: 200, suffix: "+", labelKey: "stats.clients" },
  { end: 99.9, suffix: "%", labelKey: "stats.uptime" },
];

export function Stats() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.labelKey} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
