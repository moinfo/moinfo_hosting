import type { Metadata } from "next";
import { ForceLanguage } from "@/i18n/ForceLanguage";
import { WebHostingContent } from "../../web-hosting/WebHostingContent";

export const metadata: Metadata = {
  title: "Hosting Bei Nafuu Tanzania",
  description:
    "Web hosting bei nafuu Tanzania kuanzia TSh 80,500/mwaka. SSL bure, cPanel, msaada 24/7, na dhamana ya kurudisha pesa.",
  keywords: [
    "hosting bei nafuu tanzania",
    "web hosting tanzania",
    "cpanel hosting tanzania",
    "hosting ya tovuti tanzania",
  ],
  alternates: {
    canonical: "/sw/web-hosting",
    languages: {
      en: "https://moinfo.co.tz/web-hosting",
      sw: "https://moinfo.co.tz/sw/web-hosting",
      "x-default": "https://moinfo.co.tz/web-hosting",
    },
  },
  openGraph: {
    title: "Hosting Bei Nafuu Tanzania — Moinfo Hosting",
    description:
      "Web hosting bei nafuu Tanzania kuanzia TSh 80,500/mwaka. SSL bure, cPanel, msaada 24/7.",
    url: "https://moinfo.co.tz/sw/web-hosting",
  },
};

export default function SwWebHostingPage() {
  return (
    <ForceLanguage lang="sw">
      <WebHostingContent />
    </ForceLanguage>
  );
}
