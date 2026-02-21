"use client";

import { Container } from "@mantine/core";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import classes from "./Stats.module.css";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

function StatItem({ end, suffix, label }: StatItemProps) {
  const { count, ref } = useAnimatedCounter(end);

  return (
    <div className={classes.stat} ref={ref}>
      <div className={classes.number}>
        {count}
        <span className={classes.suffix}>{suffix}</span>
      </div>
      <div className={classes.label}>{label}</div>
    </div>
  );
}

const stats = [
  { end: 100, suffix: "+", label: "Websites Hosted" },
  { end: 500, suffix: "+", label: "Domains Managed" },
  { end: 200, suffix: "+", label: "Happy Clients" },
  { end: 99.9, suffix: "%", label: "Uptime Guarantee" },
];

export function Stats() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
