"use client";

import { useState, useEffect } from "react";
import RFQModal from "./RFQModal";

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenRfq = () => setRfqModalOpen(true);
    window.addEventListener('open-rfq', handleOpenRfq);
    return () => window.removeEventListener('open-rfq', handleOpenRfq);
  }, []);

  return (
    <>
      {children}
      <RFQModal isOpen={rfqModalOpen} onClose={() => setRfqModalOpen(false)} />
    </>
  );
}
