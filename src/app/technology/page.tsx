"use client";

import Image from "next/image";
export default function TechnologyPage() {
  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Technology Authority
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Technology & Infrastructure
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Powered by next-generation computerized knitting machines, proprietary CAD software, and automated precision finishing. We invest heavily in Industry 4.0 manufacturing technology to deliver uncompromising accuracy and rapid scalability to our clients.
          </p>
        </div>
      </section>

      <section className="w-full bg-ink text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-3xl font-bold uppercase mb-6">Computerized Flat Knitting</h2>
            <p className="font-body text-white/70 mb-6 leading-relaxed">
              Our extensive fleet of modern computerized flat-knitting machines is capable of handling ultra-fine to heavy multi-gauge requirements. Integrated seamlessly with advanced 3D CAD programming software, our technical engineers translate your digital designs and tech packs into physical products with pixel-perfect structural accuracy, intricate jacquards, and complex intarsia patterns.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/20 p-4">
                <span className="font-technical text-white text-xl font-bold block mb-1">100+</span>
                <span className="font-body text-xs uppercase text-white/50">Active Machines</span>
              </div>
              <div className="border border-white/20 p-4">
                <span className="font-technical text-white text-xl font-bold block mb-1">24/7</span>
                <span className="font-body text-xs uppercase text-white/50">Production Cycle</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white/5 aspect-video flex items-center justify-center border border-white/10 relative overflow-hidden">
            <Image src="/Computerized Flat Knitting.jpeg" alt="Computerized Flat Knitting" fill className="object-cover" />
          </div>
        </div>
      </section>
      {/* CAD/CAM & R&D Software */}
      <section className="w-full bg-slate-50 py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold text-ink mb-6">CAD/CAM & R&D Programming</h2>
              <p className="font-body text-slate-600 mb-6 leading-relaxed">
                Hardware is only as good as the software driving it. Our dedicated R&D center houses expert technical designers who utilize advanced proprietary CAD/CAM software to translate 2D concepts into highly complex 3D knit structures.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 font-body text-ink">
              <li className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">code_blocks</span>
                <strong className="font-headline text-lg uppercase mb-2">Stitch-Level Programming</strong>
                <span className="text-sm text-slate-600">We control individual needle selection, allowing for precise zonal tension mapping—crucial for performance athletic footwear.</span>
              </li>
              <li className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">3d_rotation</span>
                <strong className="font-headline text-lg uppercase mb-2">Virtual Prototyping</strong>
                <span className="text-sm text-slate-600">Advanced simulations predict drape, stretch, and material consumption before knitting a physical sample, accelerating your speed-to-market.</span>
              </li>
              <li className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">memory</span>
                <strong className="font-headline text-lg uppercase mb-2">Seamless Intarsia</strong>
                <span className="text-sm text-slate-600">Complex multi-color graphics are programmed directly into the knit structure without internal yarn floats, ensuring a premium, lightweight finish.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gauge Range Matrix */}
      <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Multi-Gauge Knitting Capabilities</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              Our diverse machine park spans from coarse to ultra-fine gauges, allowing us to manufacture everything from heavy winter blankets to whisper-thin performance apparel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-4 border-t-ink text-center">
              <span className="font-technical text-4xl font-bold text-surface-tint block mb-2">3GG - 5GG</span>
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Chunky & Heavy</h4>
              <p className="font-body text-sm text-slate-600">Thick yarns and loose tensions. Ideal for heavy winter pullovers, oversized cardigans, and highly textured, ribbed home decor blankets.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-4 border-t-ink/80 text-center">
              <span className="font-technical text-4xl font-bold text-surface-tint block mb-2">7GG - 10GG</span>
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Mid-Weight</h4>
              <p className="font-body text-sm text-slate-600">The standard for versatile apparel. Perfect for everyday crewnecks, durable school uniforms, and structured decorative cushion covers.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-4 border-t-ink/60 text-center">
              <span className="font-technical text-4xl font-bold text-surface-tint block mb-2">12GG - 14GG</span>
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Fine & Lightweight</h4>
              <p className="font-body text-sm text-slate-600">Tightly knit, smooth surface finishes. Engineered for premium summer knits, polo shirts, and sophisticated seamless shoe uppers.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm border-t-4 border-t-ink/40 text-center">
              <span className="font-technical text-4xl font-bold text-surface-tint block mb-2">16GG+</span>
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Ultra-Fine</h4>
              <p className="font-body text-sm text-slate-600">Incredibly delicate and precise. Used for luxury base layers, pointelle womenswear, and high-stretch performance athletic wear.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
