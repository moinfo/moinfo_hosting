"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

import { orderUrl } from "@/data/mobilling";

const STORE = orderUrl("email-hosting");

export function EmailHostingContent() {
  const { t } = useLanguage();

  return (
    <HostingHero
      categoryKey="email"
      title={t("emailHosting.title")}
      description={t("emailHosting.description")}
      orderUrl={STORE}
    />
  );
}
