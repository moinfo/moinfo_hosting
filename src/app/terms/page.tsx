import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing the use of Moinfo Hosting services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Moinfo Hosting",
    description:
      "Read the terms and conditions governing the use of Moinfo Hosting services.",
    url: "https://moinfo.co.tz/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
