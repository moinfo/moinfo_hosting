import type { Metadata } from "next";
import { VpsContent } from "./VpsContent";
import { VpsFeatures } from "@/components/sections/VpsFeatures";

export const metadata: Metadata = {
  title: "Linux VPS Hosting Tanzania",
  description:
    "Best Linux VPS hosting in Tanzania. Full root access, free SSL, free domain, cPanel/WHM included, and 100% uptime guarantee. Plans from TSh 2,150,000/year.",
  keywords: ["VPS Tanzania", "VPS hosting Tanzania", "Linux VPS Tanzania", "cheap VPS Tanzania", "virtual private server Tanzania", "VPS server Dar es Salaam", "cloud VPS Tanzania"],
  alternates: { canonical: "/vps" },
  openGraph: {
    title: "Linux VPS Hosting Tanzania — Moinfo Hosting",
    description:
      "Best Linux VPS hosting in Tanzania. Full root access, free SSL, cPanel/WHM, and 100% uptime guarantee.",
    url: "https://moinfo.co.tz/vps",
  },
};

export default function VpsPage() {
  return (
    <>
      <VpsContent />
      <VpsFeatures />
    </>
  );
}
