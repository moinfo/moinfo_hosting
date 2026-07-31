"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

import { orderUrl } from "@/data/mobilling";

const STORE = orderUrl("vps");

export function VpsContent() {
  const { t } = useLanguage();

  return (
    <HostingHero
      categoryKey="vps"
      title={t("vpsHosting.title")}
      description={t("vpsHosting.description")}
      orderUrl={STORE}
    />
  );
}
