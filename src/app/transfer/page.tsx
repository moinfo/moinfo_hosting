import type { Metadata } from "next";
import { TransferContent } from "./TransferContent";

export const metadata: Metadata = {
  title: "Transfer to Moinfo Hosting",
  description:
    "Transfer your website to Moinfo Hosting with our free migration services. Seamless, fast, and fully supported.",
  alternates: { canonical: "/transfer" },
  openGraph: {
    title: "Transfer to Moinfo Hosting — Moinfo Hosting",
    description:
      "Transfer your website to Moinfo Hosting with our free migration services. Seamless, fast, and fully supported.",
    url: "https://moinfo.co.tz/transfer",
  },
};

export default function TransferPage() {
  return <TransferContent />;
}
