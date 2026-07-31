"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

import { orderUrl } from "@/data/mobilling";

const STORE = orderUrl("web-hosting");

export function WebHostingContent() {
  const { t } = useLanguage();

  return (
    <HostingHero
      categoryKey="web"
      title={t("webHosting.title")}
      description={t("webHosting.description")}
      orderUrl={STORE}
    />
  );
}
