import type { Metadata } from "next";
import { HostingPolicyContent } from "./HostingPolicyContent";

export const metadata: Metadata = {
  title: "Hosting Policy — Moinfo Hosting",
  description:
    "Review Moinfo Hosting's hosting policies including acceptable use, resource limits, and billing.",
};

export default function HostingPolicyPage() {
  return <HostingPolicyContent />;
}
