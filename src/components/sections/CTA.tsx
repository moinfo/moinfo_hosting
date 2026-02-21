import { Container } from "@mantine/core";
import { company } from "@/data/company";
import classes from "./CTA.module.css";

export function CTA() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <h2 className={classes.title}>Ready to Get Started?</h2>
        <p className={classes.description}>
          Join hundreds of Tanzanian businesses who trust Moinfo Hosting for
          their online presence. Get started today with our reliable hosting
          solutions.
        </p>
        <div className={classes.buttons}>
          <a href="#pricing" className={classes.primaryBtn}>
            View Hosting Plans
          </a>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.secondaryBtn}
          >
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
