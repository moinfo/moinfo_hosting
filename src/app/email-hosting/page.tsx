import type { Metadata } from "next";
import { EmailHostingContent } from "./EmailHostingContent";

export const metadata: Metadata = {
  title: "Email Hosting Plans — Moinfo Hosting",
  description:
    "Professional business email hosting with disaster recovery, 24/7 support, and 30-day money-back guarantee.",
};

export default function EmailHostingPage() {
  return <EmailHostingContent />;
}
