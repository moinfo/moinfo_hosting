import type { Metadata } from "next";
import { GdprContent } from "./GdprContent";

export const metadata: Metadata = {
  title: "GDPR Compliance — Moinfo Hosting",
  description:
    "Learn about Moinfo Hosting's commitment to GDPR compliance and data protection practices.",
};

export default function GdprPage() {
  return <GdprContent />;
}
