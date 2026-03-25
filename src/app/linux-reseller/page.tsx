import type { Metadata } from "next";
import { LinuxResellerContent } from "./LinuxResellerContent";
import { ResellerFeatures } from "@/components/sections/ResellerFeatures";

export const metadata: Metadata = {
  title: "Linux Reseller Hosting",
  description:
    "Start your own hosting business with our Linux Reseller Hosting plans. WHM/cPanel included, free SSL, and 24/7 support.",
  alternates: { canonical: "/linux-reseller" },
  openGraph: {
    title: "Linux Reseller Hosting — Moinfo Hosting",
    description:
      "Start your own hosting business with our Linux Reseller Hosting plans. WHM/cPanel included, free SSL, and 24/7 support.",
    url: "https://moinfo.co.tz/linux-reseller",
  },
};

export default function LinuxResellerPage() {
  return (
    <>
      <LinuxResellerContent />
      <ResellerFeatures />
    </>
  );
}
