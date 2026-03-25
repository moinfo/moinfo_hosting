import type { Metadata } from "next";
import { CancellationContent } from "./CancellationContent";

export const metadata: Metadata = {
  title: "Cancellation Policy — Moinfo Hosting",
  description:
    "Understand the cancellation, refund, and account reactivation policies at Moinfo Hosting.",
};

export default function CancellationPolicyPage() {
  return <CancellationContent />;
}
