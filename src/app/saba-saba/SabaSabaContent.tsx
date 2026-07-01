"use client";

import { Container, Title, Text, Button, SimpleGrid, Group } from "@mantine/core";
import { IconBrandWhatsapp, IconConfetti, IconTicket } from "@tabler/icons-react";
import { SabaSabaCard } from "@/components/ui/SabaSabaCard";
import {
  sabaSabaCategories,
  isSabaSabaActive,
  SABA_SABA_CODE,
} from "@/data/sabaSaba";
import { company } from "@/data/company";
import { useLanguage } from "@/i18n/LanguageContext";
import classes from "./SabaSaba.module.css";

export function SabaSabaContent() {
  const { t } = useLanguage();
  const active = isSabaSabaActive();

  return (
    <>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <div className={classes.heroContent}>
            <div className={classes.badge}>
              <IconConfetti size={16} />
              {t("saba.badge")}
            </div>
            <Title order={1} className={classes.heroTitle}>
              {t("saba.hero.title")}
            </Title>
            <div className={classes.dates}>{t("saba.hero.dates")}</div>
            <Text size="lg" c="dimmed" maw={720} ta="center">
              {t("saba.hero.subtitle")}
            </Text>
            {!active && (
              <Text size="sm" c="dimmed" mt="xs" fs="italic">
                {t("saba.hero.ended")}
              </Text>
            )}

            <div className={classes.promoBox}>
              <IconTicket size={22} className={classes.promoIcon} />
              <span className={classes.promoLabel}>{t("saba.promo.label")}</span>
              <span className={classes.promoCode}>{SABA_SABA_CODE}</span>
            </div>
            <Text size="sm" c="dimmed" maw={560} ta="center">
              {t("saba.promo.apply")}
            </Text>

            <Group justify="center" mt="lg">
              <Button
                component="a"
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="gradient"
                gradient={{ from: "brand-green", to: "brand-blue", deg: 135 }}
                leftSection={<IconBrandWhatsapp size={20} />}
              >
                {t("saba.hero.cta")}
              </Button>
            </Group>
          </div>
        </Container>
      </section>

      {/* One section per offer category */}
      {sabaSabaCategories.map((cat) => (
        <section key={cat.key} className={classes.category}>
          <Container size="xl">
            <Title order={2} ta="center" className={classes.catTitle}>
              <span className={classes.catIcon}>{cat.icon}</span> {t(cat.titleKey)}
            </Title>
            <Text ta="center" c="dimmed" mb="xl">
              {t(cat.subtitleKey)}
            </Text>
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: cat.columns }}
              spacing="lg"
              className={cat.columns === 1 ? classes.singleCol : undefined}
            >
              {cat.plans.map((plan) => (
                <SabaSabaCard key={plan.name} plan={plan} />
              ))}
            </SimpleGrid>
          </Container>
        </section>
      ))}

      {/* How to use the promo code */}
      <section className={classes.howto}>
        <Container size="sm">
          <Title order={2} ta="center" mb="xs">
            {t("saba.how.title")}
          </Title>
          <Text ta="center" c="dimmed" mb="xl">
            {t("saba.how.subtitle")}
          </Text>
          <ol className={classes.steps}>
            <li className={classes.step}>{t("saba.how.step1")}</li>
            <li className={classes.step}>{t("saba.how.step2")}</li>
            <li className={classes.step}>{t("saba.how.step3")}</li>
            <li className={classes.step}>
              {t("saba.how.step4a")}{" "}
              <strong className={classes.inlineCode}>{SABA_SABA_CODE}</strong>{" "}
              {t("saba.how.step4b")}
            </li>
            <li className={classes.step}>{t("saba.how.step5")}</li>
          </ol>
          <Text ta="center" size="sm" c="dimmed" mt="lg">
            {t("saba.how.help")}
          </Text>
        </Container>
      </section>

      {/* CTA */}
      <section className={classes.cta}>
        <Container size="md" ta="center">
          <Title order={2} c="white" mb="sm">
            {t("saba.cta.title")}
          </Title>
          <Text c="rgba(255,255,255,0.85)" mb="xl">
            {t("saba.cta.subtitle")}
          </Text>
          <Group justify="center">
            <Button
              component="a"
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
              color="dark"
              leftSection={<IconBrandWhatsapp size={20} />}
            >
              {t("saba.cta.whatsapp")}
            </Button>
            <Button
              component="a"
              href={`tel:${company.phone}`}
              size="lg"
              variant="outline"
              color="white"
            >
              {company.phone}
            </Button>
          </Group>
        </Container>
      </section>
    </>
  );
}
