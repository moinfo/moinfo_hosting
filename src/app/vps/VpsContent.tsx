"use client";

import { HostingHero } from "@/components/sections/HostingHero";
import { useLanguage } from "@/i18n/LanguageContext";

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/vps";

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
