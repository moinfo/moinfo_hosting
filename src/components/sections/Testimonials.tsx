"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Button,
  Container,
  Title,
  Text,
  Card,
  Group,
  SimpleGrid,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconStar,
  IconStarFilled,
  IconQuote,
} from "@tabler/icons-react";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./Testimonials.module.css";

const testimonials = [
  {
    nameKey: "testimonials.1.name",
    locationKey: "testimonials.1.location",
    textKey: "testimonials.1.text",
    avatar: "JM",
  },
  {
    nameKey: "testimonials.2.name",
    locationKey: "testimonials.2.location",
    textKey: "testimonials.2.text",
    avatar: "AK",
  },
  {
    nameKey: "testimonials.3.name",
    locationKey: "testimonials.3.location",
    textKey: "testimonials.3.text",
    avatar: "FM",
  },
];

const ratings = [
  {
    platform: "Trustpilot",
    score: "4.8",
    color: "#00b67a",
    reviewUrl: "https://www.trustpilot.com/evaluate/moinfo.co.tz",
    label: "Leave a Review",
  },
  {
    platform: "Google",
    score: "4.6",
    color: "#4285f4",
    reviewUrl: null,
    label: "Review on Google",
  },
  {
    platform: "Facebook",
    score: "4.5",
    color: "#1877f2",
    reviewUrl: null,
    label: "Review on Facebook",
  },
];

function Stars({ count }: { count: number }) {
  const full = Math.floor(count);
  const hasHalf = count % 1 >= 0.4;
  return (
    <Group gap={2} justify="center">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full)
          return <IconStarFilled key={i} size={18} color="#f59e0b" />;
        if (i === full && hasHalf)
          return <IconStarFilled key={i} size={18} color="#f59e0b" style={{ opacity: 0.5 }} />;
        return <IconStar key={i} size={18} color="#d1d5db" />;
      })}
    </Group>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[active];

  return (
    <section className={classes.section}>
      <Container size="xl">
        <Title order={2} ta="center" mb={4}>
          {t("testimonials.title")}
        </Title>
        <div className={classes.divider} />
        <Text ta="center" c="dimmed" maw={800} mx="auto" mb="xl">
          {t("testimonials.description")}
        </Text>

        <div className={classes.content}>
          {/* Testimonial Card */}
          <div className={classes.testimonialWrapper}>
            <ActionIcon
              variant="subtle"
              size="xl"
              onClick={prev}
              className={classes.arrow}
              aria-label="Previous testimonial"
            >
              <IconChevronLeft size={24} />
            </ActionIcon>

            <Card className={classes.testimonialCard} padding="xl" radius="md" withBorder>
              <Group gap="sm" mb="md">
                <Avatar size={48} radius="xl" color="brand-blue">
                  {current.avatar}
                </Avatar>
              </Group>
              <Text size="sm" c="dimmed" mb="md" style={{ lineHeight: 1.7 }}>
                {t(current.textKey)}
              </Text>
              <IconQuote
                size={32}
                className={classes.quoteIcon}
              />
              <Text fw={700} size="sm">
                {t(current.nameKey)}
              </Text>
              <Text size="xs" c="dimmed">
                {t(current.locationKey)}
              </Text>
            </Card>

            <ActionIcon
              variant="subtle"
              size="xl"
              onClick={next}
              className={classes.arrow}
              aria-label="Next testimonial"
            >
              <IconChevronRight size={24} />
            </ActionIcon>
          </div>

          {/* Dots */}
          <Group justify="center" gap="xs" mt="md" mb="xl">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${classes.dot} ${i === active ? classes.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </Group>

          {/* Rating Cards */}
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {ratings.map((r) => (
              <Card key={r.platform} padding="lg" radius="md" withBorder ta="center">
                <Text fz="2rem" fw={700} lh={1}>
                  {r.score}
                  <Text component="span" fz="sm" fw={400} c="dimmed">
                    /5
                  </Text>
                </Text>
                <Stars count={parseFloat(r.score)} />
                <Text fw={700} size="lg" mt="xs" c={r.color}>
                  {r.platform}
                </Text>
                {r.reviewUrl && (
                  <Button
                    component="a"
                    href={r.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                    size="xs"
                    mt="sm"
                    color={r.platform === "Trustpilot" ? "teal" : undefined}
                  >
                    {r.label}
                  </Button>
                )}
              </Card>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
}
