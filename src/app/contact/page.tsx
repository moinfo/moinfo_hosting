import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Moinfo Hosting — Kibaha, Tanzania",
  description:
    "Talk to Moinfo Hosting: phone, WhatsApp, email or visit us at Njuweni Hotel, Kibaha. Sales, support, billing and abuse contacts, plus opening hours.",
  keywords: [
    "contact Moinfo Hosting",
    "hosting support Tanzania",
    "Kibaha web hosting",
    "Moinfo Tech contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Moinfo Hosting",
    description:
      "Phone, WhatsApp, email or visit us in Kibaha. Sales, support, billing and abuse contacts.",
    url: "https://moinfo.co.tz/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
