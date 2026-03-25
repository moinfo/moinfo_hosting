import type { Metadata } from "next";
import { VpsContent } from "./VpsContent";
import { VpsFeatures } from "@/components/sections/VpsFeatures";

export const metadata: Metadata = {
  title: "VPS Hosting Plans — Moinfo Hosting",
  description:
    "High-performance VPS hosting with full root access, free SSL, and 100% uptime guarantee. Choose from MIT 500, MIT 600, or MIT 700.",
};

export default function VpsPage() {
  return (
    <>
      <VpsContent />
      <VpsFeatures />
    </>
  );
}
