import type { Metadata } from "next";
import { VpsContent } from "./VpsContent";
import { CloudVpsPlans } from "@/components/sections/CloudVpsPlans";
import { VpsFeatures } from "@/components/sections/VpsFeatures";

export const metadata: Metadata = {
  title: "Linux VPS Hosting Tanzania",
  description:
    "Linux & Cloud VPS hosting in Tanzania. Full root access, free SSL, NVMe/SSD storage. Cloud VPS plans from TSh 19,500/month.",
  keywords: ["VPS Tanzania", "VPS hosting Tanzania", "Linux VPS Tanzania", "cheap VPS Tanzania", "virtual private server Tanzania", "VPS server Dar es Salaam", "cloud VPS Tanzania"],
  alternates: { canonical: "/vps" },
  openGraph: {
    title: "Linux VPS Hosting Tanzania — Moinfo Hosting",
    description:
      "Linux & Cloud VPS hosting in Tanzania. Full root access, free SSL. Cloud VPS plans from TSh 19,500/month.",
    url: "https://moinfo.co.tz/vps",
  },
};

export default function VpsPage() {
  return (
    <>
      <VpsContent />
      <CloudVpsPlans />
      <VpsFeatures />
    </>
  );
}
