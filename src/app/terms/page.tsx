import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — Moinfo Hosting",
  description:
    "Read the terms and conditions governing the use of Moinfo Hosting services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
