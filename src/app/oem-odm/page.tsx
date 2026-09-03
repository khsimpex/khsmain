"use client";

export default function OemOdmPage() {
  const steps = [
    { title: "Design & Development", desc: "Collaborate with our in-house R&D and technical design teams to translate your technical packs, mood boards, or rough sketches into precision-engineered, production-ready CAD files for our flat-knitting machines." },
    { title: "Rapid Prototyping & Sampling", desc: "Leverage our extensive yarn library for rapid material sourcing and prototyping. We provide accurate physical samples and swatches for fit, feel, and performance approval before any bulk production begins." },
    { title: "Bulk Production", desc: "Scalable manufacturing powered by our advanced computerized machine park. Whether you require a specialized boutique run or high-volume mass production, we guarantee consistent tension, gauge, and quality." },
    { title: "Private Labels & Trims", desc: "A true end-to-end service. We offer complete private-label integration, including custom woven labels, branded hangtags, care labels, and specialized retail-ready packaging." },
    { title: "QC & Global Export", desc: "Every garment undergoes rigorous AQL inline and end-of-line inspections. Once approved, our logistics team manages streamlined global shipping and export documentation directly to your distribution centers." }
  ];

  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // B2B Service Page
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            OEM, ODM & Private Label
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Your end-to-end manufacturing partner. We provide comprehensive Original Equipment (OEM) and Original Design Manufacturing (ODM) services for global fashion, footwear, and home textile brands. From concept to shipping, we handle the entire supply chain.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">The Manufacturing Pipeline</h2>
          <p className="font-body text-on-surface-variant max-w-3xl mx-auto text-center">
            Our streamlined five-step manufacturing pipeline is designed for transparency, speed, and precision. We integrate seamlessly with your brand's operations to ensure a stress-free production experience.
          </p>
        </div>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-surface-tint bg-white text-ink font-technical font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_white] z-10">
                0{i+1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-slate-200 p-6 shadow hover:shadow-lg transition-all">
                <h3 className="font-headline text-xl font-bold uppercase text-ink mb-2">{step.title}</h3>
                <p className="font-body text-on-surface-variant">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button onClick={() => window.dispatchEvent(new Event('open-rfq'))} className="bg-ink text-white font-technical uppercase text-sm px-8 py-4 font-medium hover:bg-ink-dark transition-tech inline-block">
              Start Your Project
            </button>
        </div>
      </section>
    </main>
  );
}
