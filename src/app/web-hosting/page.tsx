import type { Metadata } from "next";
import { WebHostingContent } from "./WebHostingContent";

export const metadata: Metadata = {
  title: "Web Hosting Plans — Moinfo Hosting",
  description:
    "Reliable and affordable web hosting plans for Tanzanian businesses. Free SSL, 24/7 support, and money-back guarantee.",
};

export default function WebHostingPage() {
  return <WebHostingContent />;
}
