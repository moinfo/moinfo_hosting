import type { Metadata } from "next";
import { ForceLanguage } from "@/i18n/ForceLanguage";
import { DomainsContent } from "../../domains/DomainsContent";

export const metadata: Metadata = {
  title: "Sajili Domain .co.tz Tanzania",
  description:
    "Sajili domain .co.tz Tanzania kuanzia TSh 19,999/mwaka. Msajili aliyeidhinishwa na TCRA, uanzishaji wa papo hapo, na usimamizi bure wa DNS.",
  keywords: [
    "sajili domain tanzania",
    "kununua domain tanzania",
    "domain bei nafuu tanzania",
    "vikoa tanzania",
    "sajili kikoa tanzania",
  ],
  alternates: {
    canonical: "/sw/domains",
    languages: {
      en: "https://moinfo.co.tz/domains",
      sw: "https://moinfo.co.tz/sw/domains",
      "x-default": "https://moinfo.co.tz/domains",
    },
  },
  openGraph: {
    title: "Sajili Domain .co.tz Tanzania — Moinfo Hosting",
    description:
      "Sajili domain .co.tz Tanzania kuanzia TSh 19,999/mwaka. TCRA accredited registrar.",
    url: "https://moinfo.co.tz/sw/domains",
  },
};

export default function SwDomainsPage() {
  return (
    <ForceLanguage lang="sw">
      <DomainsContent />
    </ForceLanguage>
  );
}
