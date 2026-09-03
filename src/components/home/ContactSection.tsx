interface ContactSectionProps {
  onOpenRfq: () => void;
}

export default function ContactSection({ onOpenRfq }: ContactSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 px-4">
        <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold">// DIRECT EXPORT DESK</span>
        <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-ink font-bold tracking-tight">
          Start a Project
        </h2>
        <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Looking for a reliable manufacturing partner for your knitted products? Contact us today to discuss your
          technical requirements, request physical swatch samples, or schedule a factory visit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center mt-2">
          <a href="mailto:info@khsimpex.com" className="btn-shine bg-ink text-white font-headline text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3.5 sm:py-4 lg:py-5 uppercase hover:bg-ink-dark transition-tech flex items-center justify-center gap-2 sm:gap-3 shadow-md">
            <span>Contact Sales Team</span>
            <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
          </a>
          <button
            onClick={onOpenRfq}
            className="bg-white border-2 border-ink text-ink font-headline text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 uppercase hover:bg-ink-light transition-tech flex items-center justify-center gap-2"
          >
            <span>Send Quick RFQ</span>
            <span className="material-symbols-outlined text-lg sm:text-xl">edit_document</span>
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4 font-technical text-xs sm:text-sm text-surface-tint uppercase font-semibold">
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">location_on</span> Noida, India</span>
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">mail</span> info@khsimpex.com</span>
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">public</span> B2B Export Only</span>
        </div>
      </div>
    </section>
  );
}
