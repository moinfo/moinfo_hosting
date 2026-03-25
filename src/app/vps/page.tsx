import type { Metadata } from "next";
import { VpsContent } from "./VpsContent";
import { VpsFeatures } from "@/components/sections/VpsFeatures";

export const metadata: Metadata = {
  title: "VPS Hosting Plans",
  description:
    "High-performance VPS hosting with full root access, free SSL, and 100% uptime guarantee. Choose from MIT 500, MIT 600, or MIT 700.",
  alternates: { canonical: "/vps" },
  openGraph: {
    title: "VPS Hosting Plans — Moinfo Hosting",
    description:
      "High-performance VPS hosting with full root access, free SSL, and 100% uptime guarantee. Choose from MIT 500, MIT 600, or MIT 700.",
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
