import type { Metadata } from "next";
import { AcceptableUseContent } from "./AcceptableUseContent";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — Moinfo Hosting",
  description:
    "Review the acceptable use policy for Moinfo Hosting services including web hosting, email, and dedicated servers.",
};

export default function AcceptableUsePage() {
  return <AcceptableUseContent />;
}
