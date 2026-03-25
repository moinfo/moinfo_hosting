import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Moinfo Hosting collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Moinfo Hosting",
    description:
      "Learn how Moinfo Hosting collects, uses, and protects your personal information.",
    url: "https://moinfo.co.tz/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
