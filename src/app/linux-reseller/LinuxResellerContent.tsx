"use client";

import { HostingHero } from "@/components/sections/HostingHero";

import { orderUrl } from "@/data/mobilling";

const STORE = orderUrl("reseller-hosting");

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
