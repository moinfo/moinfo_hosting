import type { Metadata } from "next";
import { TransferContent } from "./TransferContent";

export const metadata: Metadata = {
  title: "Transfer to Moinfo Hosting — Free Migration",
  description:
    "Transfer your website to Moinfo Hosting with our free migration services. Seamless, fast, and fully supported.",
};

export default function TransferPage() {
  return <TransferContent />;
}
