import type { Metadata } from "next";
import { DedicatedContent } from "./DedicatedContent";
import { DedicatedFeatures } from "@/components/sections/DedicatedFeatures";

export const metadata: Metadata = {
  title: "Linux Dedicated Server Tanzania",
  description:
    "Powerful Linux dedicated servers in Tanzania. Up to 960GB SSD, 64GB RAM, unlimited bandwidth, free SSL, and full root access. Plans from TSh 3,600,000/year.",
  keywords: ["dedicated server Tanzania", "Linux dedicated server Tanzania", "dedicated hosting Tanzania", "cheap dedicated server Tanzania", "server Tanzania", "dedicated server Dar es Salaam"],
  alternates: { canonical: "/dedicated-server" },
  openGraph: {
    title: "Linux Dedicated Server Tanzania — Moinfo Hosting",
    description:
      "Powerful Linux dedicated servers in Tanzania. Up to 960GB SSD, 64GB RAM, unlimited bandwidth, and full root access.",
    url: "https://moinfo.co.tz/dedicated-server",
  },
};

export default function DedicatedServerPage() {
  return (
    <>
      <DedicatedContent />
      <DedicatedFeatures />
    </>
  );
}
