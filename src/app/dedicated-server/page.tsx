import type { Metadata } from "next";
import { DedicatedContent } from "./DedicatedContent";
import { DedicatedFeatures } from "@/components/sections/DedicatedFeatures";

export const metadata: Metadata = {
  title: "Linux Dedicated Server — Moinfo Hosting",
  description:
    "Maximum power with dedicated Linux servers. Full root access, unlimited bandwidth, free SSL, and 24/7 support.",
};

export default function DedicatedServerPage() {
  return (
    <>
      <DedicatedContent />
      <DedicatedFeatures />
    </>
  );
}
