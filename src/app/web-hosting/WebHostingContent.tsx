"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/web-hosting";

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
