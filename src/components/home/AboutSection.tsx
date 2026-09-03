export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// COMPANY PROFILE</span>
            <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase text-ink font-bold tracking-tight">
              Who We Are
            </h2>
            <p data-reveal data-reveal-delay="2" className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">
              Export-oriented manufacturing excellence based in Noida, India, serving global buyers with commitment to quality and consistency.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
          <p className="font-body text-base sm:text-lg text-slate-800 leading-relaxed">
            <strong>KHS Impex Pvt. Ltd.</strong> is an export-oriented B2B company specializing as a wholesale knitted home furnishing manufacturer, OEM knitted garment exporter, and 3D knit footwear factory. With over 25 years of industry
            experience, we are based in Noida, India, and serve international buyers with a strong commitment to quality
            compliance, consistent production, and long-term partnerships.
          </p>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            With extensive experience handling buyer-specific requirements, we focus on manufacturing products that meet
            global quality standards, offering flexibility in design, materials, and packaging to suit diverse export markets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-ink bg-surface-container-low p-2">
            <div data-reveal className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">verified</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Quality Compliance</h3>
              <p className="font-body text-sm text-on-surface-variant">AQL standards and buyer-specific quality requirements followed at every production step.</p>
            </div>
            <div data-reveal data-reveal-delay="1" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">public</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Global Standards</h3>
              <p className="font-body text-sm text-on-surface-variant">Manufacturing high-specification products tailored for North American, European and global export markets.</p>
            </div>
            <div data-reveal data-reveal-delay="2" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">eco</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Sustainable Materials</h3>
              <p className="font-body text-sm text-on-surface-variant">Extensive options including GRS-certified recycled yarns, bio-based materials, and organic cotton to meet your sustainability goals.</p>
            </div>
            <div data-reveal data-reveal-delay="3" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink icon-float">handshake</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Long-term Partnership</h3>
              <p className="font-body text-sm text-on-surface-variant">Committed to building reliable, scalable business relationships with overseas importers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
