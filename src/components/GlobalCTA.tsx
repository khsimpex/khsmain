"use client";

export default function GlobalCTA() {
  return (
    <section className="w-full bg-ink text-white py-16 lg:py-24 border-t border-ink/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">handshake</span>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
          Partner with KHS Impex for reliable, high-quality, and scalable textile manufacturing. Contact us for a quote, material samples, or a factory visit.
        </p>
        <button
          onClick={() => window.dispatchEvent(new Event('open-rfq'))}
          className="bg-white text-ink font-technical uppercase text-sm px-10 py-4 font-bold hover:bg-slate-200 transition-tech w-full sm:w-auto"
        >
          Submit RFQ
        </button>
      </div>
    </section>
  );
}
