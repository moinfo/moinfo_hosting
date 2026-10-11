import type { Metadata } from "next";
import { ForceLanguage } from "@/i18n/ForceLanguage";
import { WebDesignContent } from "../../website-design/WebDesignContent";

export const metadata: Metadata = {
  title: "Kutengeneza Website Tanzania",
  description:
    "Kutengeneza website kwa bei nafuu Tanzania. WordPress, eCommerce na tovuti maalum. Inafaa kwa SEO, inajirekebisha kwa simu. Kuanzia TSh 250,000.",
  keywords: [
    "kutengeneza website tanzania",
    "ubunifu wa tovuti tanzania",
    "website design tanzania",
    "ubunifu wa tovuti dar es salaam",
  ],
  alternates: {
    canonical: "/sw/website-design",
    languages: {
      en: "https://moinfo.co.tz/website-design",
      sw: "https://moinfo.co.tz/sw/website-design",
      "x-default": "https://moinfo.co.tz/website-design",
    },
  },
  openGraph: {
    title: "Kutengeneza Website Tanzania — Moinfo Hosting",
    description:
      "Kutengeneza website kwa bei nafuu Tanzania kuanzia TSh 250,000. WordPress, eCommerce, inafaa kwa SEO.",
    url: "https://moinfo.co.tz/sw/website-design",
  },
};

export default function SwWebDesignPage() {
  return (
    <ForceLanguage lang="sw">
      <WebDesignContent />
    </ForceLanguage>
  );
}
