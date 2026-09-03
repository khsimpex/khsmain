"use client";
import Image from "next/image";

export default function KnitwearPage() {
  const products = [
    { name: "T-Shirts (Round, V-Neck, Polo)", desc: "Versatile, breathable knitted tees for casual and lifestyle wear." },
    { name: "Pullovers & Cardigans", desc: "Classic knitwear pieces for layering and everyday comfort." },
    { name: "Mufflers & Scarves", desc: "Premium knitted accessories for warmth and style." },
    { name: "Leggings & Turtle Necks", desc: "Form-fitting knits designed for flexibility and insulation." },
    { name: "Cotton & Cotton Blends", desc: "Soft, durable yarns for breathable everyday garments." },
    { name: "Polyester & Lycra Blends", desc: "Engineered for stretch, shape retention, and performance." },
    { name: "Organic Cotton Available", desc: "Eco-friendly, sustainable material options for conscious brands." }
  ];

  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Commercial Manufacturing
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Knitwear Manufacturing
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            High-volume, premium knitwear production tailored to the demands of the modern apparel industry. At KHS Impex, we blend artisanal craftsmanship with industrial-scale technology to deliver exceptional, trend-forward apparel for global fashion and lifestyle brands. From lightweight summer knits to heavy winter pullovers, our vertically integrated factory ensures unmatched quality at every stitch.
          </p>
          <div className="mt-8">
            <button onClick={() => window.dispatchEvent(new Event('open-rfq'))} className="bg-ink text-white font-technical uppercase text-sm px-8 py-3 font-medium hover:bg-ink-dark transition-tech">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Products & Materials */}
      <section className="w-full bg-ink text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold mb-4">Our Products & Materials</h2>
            <p className="font-body text-white/70 max-w-2xl">
              Our comprehensive sourcing network provides access to a vast library of raw materials, ranging from GOTS-certified organic cottons and extra-fine Merino wools to advanced synthetic and recycled blends. We manufacture a diverse range of knitwear meticulously tailored to match your brand's specific price points, sustainability goals, and performance requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="border border-white/20 p-6 hover:bg-white/5 transition-tech">
                <div className="font-technical text-surface-tint mb-4 text-sm">0{i + 1}</div>
                <h3 className="font-headline text-xl font-bold uppercase mb-3">{p.name}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full bg-slate-50 py-16 lg:py-24 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Technical Knitting Capabilities</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              Our vertically integrated facility is equipped to handle complex knitting patterns and diverse gauge requirements, ensuring your brand's unique aesthetic is executed flawlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Gauge Flexibility (3GG to 16GG)</h4>
              <p className="font-body text-sm text-slate-600">From chunky, ultra-heavyweight winter sweaters knitted on 3GG machines to whisper-thin, breathable summer tees on 16GG machines, our expansive fleet handles the full spectrum of knitwear weights.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Jacquard & Intarsia Mastery</h4>
              <p className="font-body text-sm text-slate-600">We excel in multi-color Intarsia for bold, color-blocked designs without internal floating yarns, and complex Jacquard patterns for highly detailed, repeating logos and graphics seamlessly integrated into the garment.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Pointelle & Cable Knits</h4>
              <p className="font-body text-sm text-slate-600">Advanced stitch transfer capabilities allow us to program intricate pointelle open-work for delicate womenswear, and deep, highly textured traditional cable knits for classic winter collections.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Precision Plating</h4>
              <p className="font-body text-sm text-slate-600">Utilizing advanced plating techniques, we can knit two different yarns simultaneously, positioning a soft, comfortable yarn against the skin and a durable, textured yarn on the garment's exterior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KHS */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Why Partner With KHS Impex?</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              Succeeding in the competitive apparel market requires a manufacturing partner that offers total reliability, ethical sourcing, and uncompromising speed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">precision_manufacturing</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Vertically Integrated Production</h4>
              <p className="font-body text-sm text-slate-600">Because we handle knitting, dyeing, washing, and final assembly entirely in-house, we eliminate third-party delays. This guarantees strict quality control and drastically shortens your lead times.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">handshake</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Ethical & Compliant</h4>
              <p className="font-body text-sm text-slate-600">We operate under rigorous Sedex/SMETA ethical guidelines, ensuring fair labor practices and safe working conditions. Your brand's reputation is protected by our transparent, audited supply chain.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">architecture</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">In-House Design Support</h4>
              <p className="font-body text-sm text-slate-600">Not just a factory, we are your R&D partner. Our team of technical designers can help refine your tech packs, suggest optimal yarn blends for your target price point, and provide rapid prototyping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM & Customization */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-6">OEM / Private Label & Customization</h2>
          <p className="font-body text-on-surface-variant mb-6">
            As a full-service manufacturing partner, we transform your design concepts into finished, retail-ready garments. Whether you provide technical packs, rough sketches, or physical reference samples, our technical design team will develop the optimal knitting program. From bespoke gauge selections and custom yarn dyeing to branded labeling and polybag packaging, your vision is executed flawlessly.
          </p>
          <ul className="space-y-4 font-body text-ink">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint">check_circle</span>
              <span><strong>Flexible MOQs:</strong> We accommodate both startup boutique lines and massive retail rollouts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint">check_circle</span>
              <span><strong>Advanced Customization:</strong> Intarsia, jacquard, pointelle, and cable knits at scale.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint">check_circle</span>
              <span><strong>Rigorous QC:</strong> Inline and end-of-line quality control ensuring perfect stitch tension and sizing.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Production Timeline */}
      <section className="w-full bg-slate-50 border-t border-ink/10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Step-by-Step Production Timeline</h2>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              From initial sketch to bulk delivery, our streamlined OEM workflow guarantees speed and precision at every stage of development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-5xl font-technical text-ink/10 font-bold absolute -top-6 -left-4">01</div>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2 relative z-10">Design & CAD</h4>
              <p className="font-body text-sm text-slate-600 relative z-10">We review your tech packs and our specialized programmers create the 3D flat-knitting CAD files, determining optimal stitch structures and yarn tensions.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-technical text-ink/10 font-bold absolute -top-6 -left-4">02</div>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2 relative z-10">Yarn & Lab Dips</h4>
              <p className="font-body text-sm text-slate-600 relative z-10">Simultaneously, our lab sources the specific yarns (recycled, performance, or hot-melt) and executes custom dye-to-match lab dips for your approval.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-technical text-ink/10 font-bold absolute -top-6 -left-4">03</div>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2 relative z-10">Prototyping</h4>
              <p className="font-body text-sm text-slate-600 relative z-10">Initial physical prototypes are knitted and sent to you for fit, stretch, and aesthetic review. Adjustments are programmed rapidly in-house.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-technical text-ink/10 font-bold absolute -top-6 -left-4">04</div>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2 relative z-10">Bulk & QC</h4>
              <p className="font-body text-sm text-slate-600 relative z-10">Upon sign-off, bulk production begins across our machine park, followed by strict AQL standard quality control, packaging, and global export.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
