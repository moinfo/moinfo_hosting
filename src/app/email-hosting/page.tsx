import type { Metadata } from "next";
import { EmailHostingContent } from "./EmailHostingContent";

export const metadata: Metadata = {
  title: "Business Email Hosting Tanzania",
  description:
    "Professional business email hosting in Tanzania with webmail, IMAP and anti-spam from TSh 60,000/year. Set up your @company email today.",
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
