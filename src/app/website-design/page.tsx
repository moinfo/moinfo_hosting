import type { Metadata } from "next";
import { WebDesignContent } from "./WebDesignContent";

export const metadata: Metadata = {
  title: "Website Design Services — Moinfo Hosting",
  description:
    "Professional website design services customized to your needs. Reseller, static, and eCommerce design packages available.",
};

export default function WebDesignPage() {
  return <WebDesignContent />;
}
