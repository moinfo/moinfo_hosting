import type { Metadata } from "next";
import { DedicatedContent } from "./DedicatedContent";
import { DedicatedFeatures } from "@/components/sections/DedicatedFeatures";

export const metadata: Metadata = {
  title: "Linux Dedicated Server",
  description:
    "Maximum power with dedicated Linux servers. Full root access, unlimited bandwidth, free SSL, and 24/7 support.",
  alternates: { canonical: "/dedicated-server" },
  openGraph: {
    title: "Linux Dedicated Server — Moinfo Hosting",
    description:
      "Maximum power with dedicated Linux servers. Full root access, unlimited bandwidth, free SSL, and 24/7 support.",
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
