import { Hero } from "@/components/sections/Hero";
import { DomainSearch } from "@/components/sections/DomainSearch";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Features } from "@/components/sections/Features";
import { WebDesignPromo } from "@/components/sections/WebDesignPromo";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DomainSearch />
      <PricingPlans />
      <Features />
      <WebDesignPromo />
      <Stats />
      <CTA />
    </>
  );
}
