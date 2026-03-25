import type { Metadata } from "next";
import { GdprContent } from "./GdprContent";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description:
    "Learn about Moinfo Hosting's commitment to GDPR compliance and data protection practices.",
  alternates: { canonical: "/gdpr" },
  openGraph: {
    title: "GDPR Compliance — Moinfo Hosting",
    description:
      "Learn about Moinfo Hosting's commitment to GDPR compliance and data protection practices.",
    url: "https://moinfo.co.tz/gdpr",
  },
};

export default function GdprPage() {
  return <GdprContent />;
}
