import type { Metadata } from "next";
import { DomainsContent } from "./DomainsContent";

export const metadata: Metadata = {
  title: "Cheap Domain Registration Tanzania",
  description:
    "Register .co.tz domain from TSh 19,999/year. Cheap .tz, .com, .or.tz, .ac.tz domain registration in Tanzania. TCRA accredited registrar. Free DNS management and domain privacy.",
  keywords: [
    "cheap domain Tanzania",
    "domain registration Tanzania",
    "buy domain Tanzania",
    ".co.tz domain",
    ".co.tz domain registration",
    ".tz domain registration",
    ".tz domain",
    "register .co.tz domain",
    "buy .co.tz domain",
    ".or.tz domain",
    ".ac.tz domain",
    "TCRA accredited registrar",
    "TCRA domain registrar Tanzania",
    "domain name Tanzania",
    "cheap domain registration Tanzania",
    "domain bei nafuu Tanzania",
    "sajili kikoa Tanzania",
    "vikoa Tanzania",
    ".com domain Tanzania",
    "domain search Tanzania",
    "transfer domain Tanzania",
    "renew domain Tanzania",
  ],
  alternates: { canonical: "/domains" },
  openGraph: {
    title: "Cheap Domain Registration Tanzania — Moinfo Hosting",
    description:
      "Register .co.tz domain from TSh 19,999/year. TCRA accredited registrar. Free DNS management.",
    url: "https://moinfo.co.tz/domains",
  },
};

export default function DomainsPage() {
  return <DomainsContent />;
}
