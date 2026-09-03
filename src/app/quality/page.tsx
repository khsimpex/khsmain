"use client";

export default function QualityPage() {
  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Trust & Quality
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Quality Assurance
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Uncompromising standards at every stitch. We implement rigorous, multi-tiered AQL testing protocols and hold internationally recognized certifications to guarantee flawless execution, dimensional stability, and material safety for our global clients.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white border border-slate-200 p-8 sm:p-12">
             <h2 className="font-headline text-2xl font-bold uppercase text-ink mb-4">Inspection Process & AQL</h2>
             <p className="font-body text-on-surface-variant mb-4 leading-relaxed">
               Every production batch undergoes stringent Acceptable Quality Limit (AQL 2.5/4.0) inspections. We conduct meticulous inline checks during the knitting phase, post-dyeing chemical evaluations, and exhaustive final pre-shipment inspections to ensure a zero-defect rate.
             </p>
             <ul className="space-y-2 font-body text-ink font-medium">
               <li>• Dimensional Stability & Shrinkage Testing</li>
               <li>• Spectrophotometer Colorfastness & Shade Matching</li>
               <li>• Seam Strength, Tear, and Tensile Testing</li>
               <li>• Fabric Pilling and Abrasion Resistance</li>
             </ul>
           </div>
           <div className="bg-ink text-white border border-ink p-8 sm:p-12 flex flex-col justify-center">
             <h2 className="font-headline text-2xl font-bold uppercase text-white mb-4">Certifications & Compliance</h2>
             <p className="font-body text-white/70 mb-4 leading-relaxed">
               We operate under strict global compliance frameworks, ensuring ethical manufacturing, safe working conditions, and completely non-toxic, eco-friendly material outputs.
             </p>
             <ul className="space-y-2 font-body text-surface-tint font-medium">
               <li>• ISO 9001 Compliant Operations</li>
               <li>• OEKO-TEX Standard 100 Materials</li>
               <li>• Sedex / SMETA Ethical Audits</li>
             </ul>
           </div>
        </div>
      </section>
      {/* In-House Laboratory Capabilities */}
      <section className="w-full bg-slate-50 border-t border-ink/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">In-House Laboratory Testing</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              Our state-of-the-art testing facility ensures every batch of yarn and every finished garment meets the exacting physical and chemical requirements of global retail brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-start">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-6">palette</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-3">Colorfastness & Shade</h4>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                Utilizing digital spectrophotometers, we perform rigorous tests for colorfastness to washing, rubbing (crocking), and light exposure. We guarantee Delta-E values are strictly maintained across all dye lots.
              </p>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-start">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-6">straighten</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-3">Dimensional Stability</h4>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                Garments undergo standardized washing and drying cycles to calculate shrinkage and spirality (torque). We engineer the knit structure and industrial wash parameters to lock in the final shape before shipping.
              </p>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-start">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-6">healing</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-3">Physical Durability</h4>
              <p className="font-body text-sm text-slate-600 leading-relaxed">
                We utilize Martindale testers for pilling and abrasion resistance, alongside tensile strength machines to ensure seams, zippers, and the knit fabric itself withstand heavy commercial or athletic use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AQL Inspection Protocols */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold text-ink mb-12 text-center">AQL Inspection Protocols</h2>
        <div className="bg-surface-container-lowest border border-ink/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-ink/10">
              <h3 className="font-headline text-2xl font-bold text-ink uppercase mb-4">Inline Knitting Inspection</h3>
              <p className="font-body text-slate-600 mb-6 leading-relaxed">
                Quality control begins at the source. Our floor supervisors monitor live knitting processes to instantly catch drop-stitches, tension variations, or yarn snags. Early detection prevents compounding errors downstream.
              </p>
              <ul className="space-y-3 font-body text-sm text-ink">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> 100% panel inspection before linking</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> Real-time machine tension calibration</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> Yarn lot segregation to prevent shading</li>
              </ul>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="font-headline text-2xl font-bold text-ink uppercase mb-4">End-of-Line AQL Testing</h3>
              <p className="font-body text-slate-600 mb-6 leading-relaxed">
                Before packaging, independent QC teams conduct random sampling based on standard Acceptable Quality Limit (AQL) tables, typically AQL 2.5 for Major defects and AQL 4.0 for Minor defects, ensuring retail readiness.
              </p>
              <ul className="space-y-3 font-body text-sm text-ink">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> Exact measurement tolerance checks</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> Visual defect and loose thread removal</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-surface-tint text-sm">check</span> Label placement and packaging verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
