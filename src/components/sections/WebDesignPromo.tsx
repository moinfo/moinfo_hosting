import { Container, Button } from "@mantine/core";
import { IconCheck, IconPalette } from "@tabler/icons-react";
import classes from "./WebDesignPromo.module.css";

const webDesignFeatures = [
  "Custom responsive design",
  "SEO-optimized structure",
  "Mobile-first approach",
  "Content management system",
  "E-commerce integration",
  "Social media integration",
  "Analytics & reporting",
  "Ongoing maintenance plans",
];

export function WebDesignPromo() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <div className={classes.inner}>
          <div>
            <h2 className={classes.title}>
              Professional Web Design for Your Business
            </h2>
            <p className={classes.description}>
              Need more than hosting? Our expert team designs and builds
              stunning, high-performance websites tailored to Tanzanian
              businesses. From simple landing pages to full e-commerce stores.
            </p>

            <ul className={classes.featureList}>
              {webDesignFeatures.map((feature) => (
                <li key={feature} className={classes.featureItem}>
                  <IconCheck
                    size={18}
                    className={classes.featureIcon}
                    stroke={2}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              component="a"
              href="https://moinfotech.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="gradient"
              gradient={{ from: "brand-blue", to: "brand-green", deg: 135 }}
            >
              Learn More at MoinfoTech
            </Button>
          </div>

          <div className={classes.illustration}>
            <div className={classes.illustrationCard}>
              <IconPalette
                size={56}
                color="var(--mantine-color-brand-blue-5)"
                stroke={1.5}
              />
              <h3 className={classes.illustrationTitle}>Web Design Services</h3>
              <p className={classes.illustrationSub}>
                Starting from
              </p>
              <div className={classes.priceHighlight}>
                <div>
                  <div className={classes.priceLabel}>From</div>
                  <div className={classes.priceAmount}>TSh 25,750</div>
                  <div className={classes.priceUnit}>per month</div>
                </div>
              </div>
              <div className={classes.techStack} style={{ marginTop: 20 }}>
                <span className={classes.techBadge}>WordPress</span>
                <span className={classes.techBadge}>React</span>
                <span className={classes.techBadge}>Next.js</span>
                <span className={classes.techBadge}>PHP</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
