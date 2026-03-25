import type { Metadata } from "next";
import { EmailHostingContent } from "./EmailHostingContent";

export const metadata: Metadata = {
  title: "Business Email Hosting Tanzania",
  description:
    "Cheap professional business email hosting in Tanzania from TSh 60,000/year. Disaster recovery backups, spam protection, 24/7 support, and 30-day money-back guarantee.",
  keywords: ["email hosting Tanzania", "business email Tanzania", "cheap email hosting Tanzania", "professional email Tanzania", "barua pepe Tanzania", "email hosting Dar es Salaam"],
  alternates: { canonical: "/email-hosting" },
  openGraph: {
    title: "Cheap Business Email Hosting Tanzania — Moinfo Hosting",
    description:
      "Professional business email hosting in Tanzania from TSh 60,000/year. Disaster recovery, spam protection, and 24/7 support.",
    url: "https://moinfo.co.tz/email-hosting",
  },
};

export default function EmailHostingPage() {
  return <EmailHostingContent />;
}
