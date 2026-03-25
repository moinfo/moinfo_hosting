import type { Metadata } from "next";
import { CancellationContent } from "./CancellationContent";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Understand the cancellation, refund, and account reactivation policies at Moinfo Hosting.",
  alternates: { canonical: "/cancellation-policy" },
  openGraph: {
    title: "Cancellation Policy — Moinfo Hosting",
    description:
      "Understand the cancellation, refund, and account reactivation policies at Moinfo Hosting.",
    url: "https://moinfo.co.tz/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  return <CancellationContent />;
}
