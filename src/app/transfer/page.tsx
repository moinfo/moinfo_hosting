import type { Metadata } from "next";
import { TransferContent } from "./TransferContent";

export const metadata: Metadata = {
  title: "Free Website Migration Tanzania",
  description:
    "Transfer your website to Moinfo Hosting for free. cPanel migration, email migration, and full technical support. No downtime, no waiting period.",
  keywords: ["website migration Tanzania", "transfer hosting Tanzania", "free website transfer", "cPanel migration Tanzania", "hosting migration"],
  alternates: { canonical: "/transfer" },
  openGraph: {
    title: "Free Website Migration — Moinfo Hosting",
    description:
      "Transfer your website to Moinfo Hosting for free. cPanel migration, email migration, and full technical support.",
    url: "https://moinfo.co.tz/transfer",
  },
};

export default function TransferPage() {
  return <TransferContent />;
}
