import type { Metadata } from "next";
import { HostingPolicyContent } from "./HostingPolicyContent";

export const metadata: Metadata = {
  title: "Hosting Policy",
  description:
    "Review Moinfo Hosting's hosting policies including acceptable use, resource limits, and billing.",
  alternates: { canonical: "/hosting-policy" },
  openGraph: {
    title: "Hosting Policy — Moinfo Hosting",
    description:
      "Review Moinfo Hosting's hosting policies including acceptable use, resource limits, and billing.",
    url: "https://moinfo.co.tz/hosting-policy",
  },
};

export default function HostingPolicyPage() {
  return <HostingPolicyContent />;
}
