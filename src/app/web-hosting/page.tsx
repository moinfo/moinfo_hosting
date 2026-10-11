import type { Metadata } from "next";
import { WebHostingContent } from "./WebHostingContent";

export const metadata: Metadata = {
  title: "Cheap Web Hosting Tanzania",
  description:
    "Affordable cPanel web hosting in Tanzania from TSh 80,500/year. Free SSL, free migration, 24/7 local support, 99.9% uptime.",
  keywords: ["web hosting Tanzania", "cheap web hosting Tanzania", "best web hosting Tanzania", "cPanel hosting Tanzania", "affordable hosting Tanzania", "hosting bei nafuu"],
  alternates: {
    canonical: "/web-hosting",
    languages: {
      en: "https://moinfo.co.tz/web-hosting",
      sw: "https://moinfo.co.tz/sw/web-hosting",
      "x-default": "https://moinfo.co.tz/web-hosting",
    },
  },
  openGraph: {
    title: "Cheap Web Hosting Plans in Tanzania — Moinfo Hosting",
    description:
      "Best cheap web hosting in Tanzania from TSh 80,500/year. Free SSL, cPanel, 24/7 support, and money-back guarantee.",
    url: "https://moinfo.co.tz/web-hosting",
  },
};

export default function WebHostingPage() {
  return <WebHostingContent />;
}
