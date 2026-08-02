import type { Metadata } from "next";
import { KnowledgeBaseContent } from "./KnowledgeBaseContent";

export const metadata: Metadata = {
  title: "Knowledge Base — guides for hosting, email and .tz domains",
  description:
    "Step-by-step guides: register a .co.tz domain, point nameservers, set up business email with SPF and DKIM, pay an invoice with M-Pesa, transfer a domain to Moinfo.",
  keywords: [
    "hosting help Tanzania",
    "cPanel guide",
    "tz domain guide",
    "email setup Tanzania",
    "Moinfo knowledge base",
  ],
  alternates: { canonical: "/knowledge-base" },
  openGraph: {
    title: "Moinfo Hosting Knowledge Base",
    description:
      "Guides for domains, hosting, business email and billing — written for Tanzanian customers.",
    url: "https://moinfo.co.tz/knowledge-base",
  },
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseContent />;
}
