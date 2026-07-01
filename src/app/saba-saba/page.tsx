import type { Metadata } from "next";
import { SabaSabaContent } from "./SabaSabaContent";

export const metadata: Metadata = {
  title: "Saba Saba Offer 2026 — Up to 50% OFF Hosting, Email & Domains",
  description:
    "Moinfo Saba Saba 2026 offer (1–16 July): 50% OFF web hosting & business email, discounted .tz domains, and a professional website design at TSh 999,999. Limited time.",
  keywords: [
    "Saba Saba offer",
    "Saba Saba 2026",
    "punguzo hosting Tanzania",
    "offer ya hosting",
    "cheap web hosting Tanzania",
    "50% off hosting Tanzania",
    "discount domain Tanzania",
    "Saba Saba web hosting",
    "ofa ya Saba Saba",
    "web design offer Tanzania",
  ],
  alternates: { canonical: "/saba-saba" },
  openGraph: {
    title: "Saba Saba Offer 2026 — Up to 50% OFF | Moinfo Hosting",
    description:
      "1–16 July 2026: 50% OFF web hosting & email, discounted .tz domains, professional website design at TSh 999,999.",
    url: "https://moinfo.co.tz/saba-saba",
  },
};

export default function SabaSabaPage() {
  return <SabaSabaContent />;
}
