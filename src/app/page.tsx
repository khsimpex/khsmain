"use client";

import { useState, useEffect } from "react";
import RFQModal from "../components/RFQModal";
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
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenRfq = () => setRfqModalOpen(true);
    window.addEventListener('open-rfq', handleOpenRfq);
    return () => window.removeEventListener('open-rfq', handleOpenRfq);
  }, []);

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
        <ContactSection onOpenRfq={() => setRfqModalOpen(true)} />
      </main>

      <RFQModal isOpen={rfqModalOpen} onClose={() => setRfqModalOpen(false)} />
    </>
  );
}
