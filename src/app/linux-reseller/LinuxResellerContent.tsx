"use client";

import { HostingHero } from "@/components/sections/HostingHero";

const STORE = "https://moinfo.co.tz/portal/index.php?rp=/store/linux-reseller-hosting";

export function LinuxResellerContent() {
  return (
    <HostingHero
      categoryKey="reseller"
      title="Linux Reseller Hosting"
      description="Start your own hosting business with WHM/cPanel, free SSL, and full white-label support."
      orderUrl={STORE}
    />
  );
}
