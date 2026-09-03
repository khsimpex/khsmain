"use client";

export default function SustainabilityPage() {
  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Trust & Sustainability
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Sustainable Manufacturing
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Committed to a greener future without compromising on quality or scale. We integrate eco-friendly raw materials, zero-waste 3D knitting processes, and energy-efficient infrastructure to drastically reduce the environmental footprint of our manufacturing operations.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-slate-200 p-8 bg-white text-center">
          <span className="material-symbols-outlined text-4xl text-surface-tint mb-4 block">recycling</span>
          <h3 className="font-headline font-bold text-xl uppercase text-ink mb-2">Recycled & Organic Yarns</h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">Extensive sourcing of post-consumer Recycled PET (rPET), GOTS-certified organic cottons, and closed-loop cellulosic fibers. Our eco-yarns offer the exact same tensile strength, softness, and durability as virgin synthetic or natural fibers.</p>
        </div>
        <div className="border border-slate-200 p-8 bg-white text-center">
          <span className="material-symbols-outlined text-4xl text-surface-tint mb-4 block">energy_savings_leaf</span>
          <h3 className="font-headline font-bold text-xl uppercase text-ink mb-2">Waste Reduction & Energy Efficiency</h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">Fully-fashioned 3D knitting techniques inherently eliminate up to 80% of fabric cutting waste compared to traditional cut-and-sew operations. Our facility also utilizes energy-efficient LED lighting and optimized machine power cycles.</p>
        </div>
        <div className="border border-slate-200 p-8 bg-white text-center">
          <span className="material-symbols-outlined text-4xl text-surface-tint mb-4 block">verified</span>
          <h3 className="font-headline font-bold text-xl uppercase text-ink mb-2">Traceability & Certifications</h3>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed">We strictly partner with suppliers carrying the Global Recycled Standard (GRS) and OEKO-TEX Standard 100 certifications. We provide full supply chain transparency and traceability for eco-conscious brands.</p>
        </div>
      </section>
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Sustainable Material Matrix</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              We offer a comprehensive library of certified eco-friendly yarns that deliver uncompromising performance while drastically reducing environmental impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">rPET (Recycled Polyester)</h4>
              <p className="font-body text-sm text-slate-600 mb-4">Post-consumer plastic bottles are shredded, melted, and extruded into high-tenacity polyester yarn. Certified by the Global Recycled Standard (GRS).</p>
              <ul className="font-technical text-xs text-surface-tint font-bold uppercase space-y-1">
                <li>• 50% Less Energy Used</li>
                <li>• Highly Durable & Colorfast</li>
                <li>• Ideal for Performance Uppers</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Organic Cotton (GOTS)</h4>
              <p className="font-body text-sm text-slate-600 mb-4">Cultivated without synthetic fertilizers or toxic pesticides. Our organic cotton yarns promote soil health and safe working conditions for farmers.</p>
              <ul className="font-technical text-xs text-surface-tint font-bold uppercase space-y-1">
                <li>• Zero Toxic Chemicals</li>
                <li>• Extremely Breathable</li>
                <li>• Ideal for Luxury Knitwear</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Recycled Cotton Blends</h4>
              <p className="font-body text-sm text-slate-600 mb-4">Pre-consumer factory floor offcuts and post-consumer textiles are mechanically shredded and re-spun, creating a beautiful, textured closed-loop yarn.</p>
              <ul className="font-technical text-xs text-surface-tint font-bold uppercase space-y-1">
                <li>• Zero Dyeing Required (Pre-Colored)</li>
                <li>• Diverts Landfill Waste</li>
                <li>• Ideal for Heavy Blankets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Waste Manufacturing */}
      <section className="w-full bg-ink text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-10 lg:px-12">
          <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold mb-6">Zero-Waste 3D Knitting</h2>
          <p className="font-body text-white/70 mb-6 leading-relaxed">
            Traditional cut-and-sew apparel manufacturing results in massive material waste, often discarding up to 20% of the fabric as offcuts on the cutting room floor. At KHS Impex, we utilize advanced fully-fashioned 3D knitting technology.
          </p>
          <p className="font-body text-white/70 mb-12 leading-relaxed">
            Our CNC machines knit garments and shoe uppers exactly to the specified dimensional patterns. We only consume the exact weight of yarn required for the final product, practically eliminating pre-consumer textile waste and significantly reducing your overall material costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="border border-white/20 p-6 flex flex-col items-center">
              <span className="font-technical text-4xl text-white font-bold mb-2">80%</span>
              <span className="font-body text-sm uppercase text-white/70">Reduction in Fabric Waste</span>
            </div>
            <div className="border border-white/20 p-6 flex flex-col items-center">
              <span className="font-technical text-4xl text-white font-bold mb-2">100%</span>
              <span className="font-body text-sm uppercase text-white/70">Yarn Utilization Efficiency</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
