import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Moinfo Hosting",
  description:
    "Learn how Moinfo Hosting collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
