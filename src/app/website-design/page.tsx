import type { Metadata } from "next";
import { WebDesignContent } from "./WebDesignContent";

export const metadata: Metadata = {
  title: "Website Design Tanzania",
  description:
    "Professional website design in Tanzania for businesses. Responsive, SEO-ready WordPress & custom sites. From TSh 250,000. Get a quote.",
  keywords: ["website design Tanzania", "web design Tanzania", "web design Dar es Salaam", "ecommerce website Tanzania", "WordPress website Tanzania", "cheap website design Tanzania", "website design company Tanzania", "ubunifu wa tovuti"],
  alternates: {
    canonical: "/website-design",
    languages: {
      en: "https://moinfo.co.tz/website-design",
      sw: "https://moinfo.co.tz/sw/website-design",
      "x-default": "https://moinfo.co.tz/website-design",
    },
  },
  openGraph: {
    title: "Professional Website Design Tanzania — Moinfo Hosting",
    description:
      "Professional website design in Tanzania from TSh 250,000. WordPress, eCommerce, SEO friendly, and mobile responsive.",
    url: "https://moinfo.co.tz/website-design",
  },
};

export default function WebDesignPage() {
  return <WebDesignContent />;
}
