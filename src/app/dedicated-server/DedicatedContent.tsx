"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

import { orderUrl } from "@/data/mobilling";

const STORE = orderUrl("dedicated-server");

export function DedicatedContent() {
  const { t } = useLanguage();

  return (
    <HostingHero
      categoryKey="dedicated"
      title={t("dedicatedHosting.title")}
      description={t("dedicatedHosting.description")}
      orderUrl={STORE}
    />
  );
}
