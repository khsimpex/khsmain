"use client";

import ProductTabs from "../components/ProductTabs";

// Home Components
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProductCategoriesSection from "../components/home/ProductCategoriesSection";
import CapabilitiesSection from "../components/home/CapabilitiesSection";
import InnovationSection from "../components/home/InnovationSection";
import CommitmentSection from "../components/home/CommitmentSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grow">
        <HeroSection />
        <AboutSection />
        <ProductCategoriesSection />
        <ProductTabs />
        <CapabilitiesSection />
        <InnovationSection />
        <CommitmentSection />
        <ContactSection onOpenRfq={() => window.dispatchEvent(new Event('open-rfq'))} />
      </main>
    </>
  );
}
