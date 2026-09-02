"use client";

import { useEffect, useState } from "react";
import { sendRFQEmail } from "@/actions/sendRFQ";

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RFQModal({ isOpen, onClose }: RFQModalProps) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSuccess(false); // Reset on close
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await sendRFQEmail(formData);

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2200);
    } else {
      setError(result.error || "Failed to send request. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border-2 border-ink max-w-md w-full p-4 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">

        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-ink" aria-label="Close Modal">
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="border-b border-slate-200 pb-3 mb-4">
          <span className="font-technical text-[10px] text-ink font-bold uppercase tracking-widest">// DIRECT EXPORT INQUIRY</span>
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-ink uppercase mt-1">Request Quotation</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 font-body text-sm">
          <div>
            <label className="block font-technical text-[11px] sm:text-xs uppercase font-bold text-ink mb-1">Company / Brand Name *</label>
            <input type="text" name="companyName" required placeholder="e.g. Acme Apparel Corp" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-slate-800 text-sm focus:border-ink focus:outline-none rounded-none" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-technical text-[11px] sm:text-xs uppercase font-bold text-ink mb-1">Work Email *</label>
              <input type="email" name="email" required placeholder="example@gmail.com" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:border-ink focus:outline-none rounded-none" />
            </div>
            <div>
              <label className="block font-technical text-[11px] sm:text-xs uppercase font-bold text-ink mb-1">Destination Area *</label>
              <input type="text" name="destination" required placeholder="e.g. Noida , New delhi" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:border-ink focus:outline-none rounded-none" />
            </div>
          </div>

          <div>
            <label className="block font-technical text-[11px] sm:text-xs uppercase font-bold text-ink mb-1">Target Product Category *</label>
            <select name="category" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm font-technical focus:border-ink focus:outline-none rounded-none">
              <option>Knitted Home Furnishing</option>
              <option>Knitted Apparel Garments</option>
              <option>Flyknit Shoe Uppers</option>
              <option>Multiple Product Categories</option>
            </select>
          </div>

          <div>
            <label className="block font-technical text-[11px] sm:text-xs uppercase font-bold text-ink mb-1">Requirements &amp; Quantities *</label>
            <textarea name="requirements" rows={2} required placeholder="Specify target yarn, GSM, sample timeline, target quantity..." className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:border-ink focus:outline-none rounded-none"></textarea>
          </div>

          <button type="submit" disabled={loading} className="w-full py-3 bg-ink hover:bg-ink-dark text-white font-headline text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-tech disabled:opacity-70 disabled:cursor-not-allowed">
            <span>{loading ? "Transmitting..." : "Transmit RFQ"}</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>

          {error && (
            <div className="p-2 sm:p-3 bg-red-50 border border-red-500 text-red-700 font-technical text-xs text-center mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="p-2 sm:p-3 bg-blue-50 border border-ink text-ink font-technical text-xs text-center mt-2">
              Thank you! Your request has been logged. Our export desk will reply within 24 hours.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
