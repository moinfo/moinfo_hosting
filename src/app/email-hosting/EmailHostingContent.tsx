"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/email-hosting";

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
