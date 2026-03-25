import type { Metadata } from "next";
import { LinuxResellerContent } from "./LinuxResellerContent";
import { ResellerFeatures } from "@/components/sections/ResellerFeatures";

export const metadata: Metadata = {
  title: "Linux Reseller Hosting Tanzania",
  description:
    "Start your own hosting business in Tanzania with Linux Reseller Hosting. WHM/cPanel included, free SSL, white-label hosting, and 24/7 support. Plans from TSh 450,000/year.",
  keywords: ["reseller hosting Tanzania", "Linux reseller hosting Tanzania", "start hosting business Tanzania", "WHM cPanel reseller Tanzania", "white label hosting Tanzania", "reseller hosting bei nafuu"],
  alternates: { canonical: "/linux-reseller" },
  openGraph: {
    title: "Linux Reseller Hosting Tanzania — Moinfo Hosting",
    description:
      "Start your own hosting business in Tanzania. WHM/cPanel included, free SSL, and white-label hosting.",
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
