import type { Metadata } from "next";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Everything included — Moinfo Hosting features",
  description:
    "The full list: cPanel, NVMe storage, free SSL, nightly backups, malware scanning, local bilingual support, mobile money billing and TCRA-accredited .tz registration.",
  keywords: [
    "hosting features Tanzania",
    "cPanel hosting features",
    "free SSL hosting Tanzania",
    "Moinfo Hosting features",
  ],
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Everything included — Moinfo Hosting",
    description:
      "cPanel, NVMe storage, free SSL, nightly backups, local bilingual support and mobile money billing.",
    url: "https://moinfo.co.tz/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
