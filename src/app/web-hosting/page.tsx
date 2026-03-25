import type { Metadata } from "next";
import { WebHostingContent } from "./WebHostingContent";

export const metadata: Metadata = {
  title: "Web Hosting Plans",
  description:
    "Best cheap web hosting in Tanzania from TSh 80,500/year. Free SSL, cPanel, 24/7 support, and money-back guarantee. TCRA accredited hosting provider.",
  keywords: ["web hosting Tanzania", "cheap web hosting Tanzania", "best web hosting Tanzania", "cPanel hosting Tanzania", "affordable hosting Tanzania", "hosting bei nafuu"],
  alternates: { canonical: "/web-hosting" },
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
