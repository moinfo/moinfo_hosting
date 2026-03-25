import type { Metadata } from "next";
import { ResellerHero } from "@/components/sections/ResellerHero";
import { ResellerFeatures } from "@/components/sections/ResellerFeatures";

export const metadata: Metadata = {
  title: "Linux Reseller Hosting — Moinfo Hosting",
  description:
    "Start your own hosting business with our Linux Reseller Hosting plans. WHM/cPanel included, free SSL, and 24/7 support.",
};

export default function LinuxResellerPage() {
  return (
    <>
      <ResellerHero />
      <ResellerFeatures />
    </>
  );
}
