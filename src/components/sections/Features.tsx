import { Container } from "@mantine/core";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/features";
import classes from "./Features.module.css";

export function Features() {
  return (
    <section className={classes.section} id="features">
      <Container size="xl">
        <SectionHeader
          title="Why Choose Moinfo Hosting?"
          description="Everything you need to power your online presence, with enterprise-grade infrastructure and local support."
        />

        <div className={classes.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={classes.card}>
              <div className={classes.iconWrapper}>
                <feature.icon
                  size={28}
                  color="var(--mantine-color-brand-blue-5)"
                  stroke={1.5}
                />
              </div>
              <h3 className={classes.cardTitle}>{feature.title}</h3>
              <p className={classes.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
