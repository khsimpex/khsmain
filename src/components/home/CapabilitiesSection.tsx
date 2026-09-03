export default function CapabilitiesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="capabilities">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// TECHNICAL WORKFLOW</span>
            <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase text-ink font-bold tracking-tight">
              Manufacturing Capabilities
            </h2>
            <p data-reveal data-reveal-delay="2" className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">
              Complete in-house and integrated processing facilities engineered for high-volume export fulfillment.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-ink bg-surface-container-low p-2">
            <div data-reveal className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_01</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">In-house Knitting</h3>
              <p className="font-body text-sm text-on-surface-variant">Equipped with computerized flat knitting and circular machines capable of multi-gauge jacquards and intricate patterns.</p>
            </div>
            <div data-reveal data-reveal-delay="1" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_02</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Dyeing &amp; Processing</h3>
              <p className="font-body text-sm text-on-surface-variant">Partnered certified dye-houses ensuring color consistency, lab dip accuracy, and eco-friendly standards.</p>
            </div>
            <div data-reveal data-reveal-delay="2" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_03</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Cutting &amp; Stitching</h3>
              <p className="font-body text-sm text-on-surface-variant">Precision cutting tables and skilled stitching units tailored for both structured home textiles and flexible apparel assembly.</p>
            </div>
            <div data-reveal data-reveal-delay="3" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_04</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Printing Solutions</h3>
              <p className="font-body text-sm text-on-surface-variant">Screen, puff, and pigment printing through trusted partners for customized designs.</p>
            </div>
            <div data-reveal data-reveal-delay="4" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_05</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Embroidery</h3>
              <p className="font-body text-sm text-on-surface-variant">Professional embroidery services via partners for enhanced product aesthetics and branding.</p>
            </div>
            <div data-reveal data-reveal-delay="5" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_06</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Quality Assurance</h3>
              <p className="font-body text-sm text-on-surface-variant">Rigorous inline and final inspections maintaining strict AQL 2.5 / 4.0 standards prior to packing.</p>
            </div>
            <div data-reveal data-reveal-delay="6" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_07</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">Finishing &amp; Packing</h3>
              <p className="font-body text-sm text-on-surface-variant">Automated steam pressing, customized barcode labeling, metal detection, and export-grade master carton packing ensuring container-safe transit.</p>
            </div>
            <div data-reveal data-reveal-delay="7" className="card-lift bg-white p-6 sm:p-8 flex flex-col gap-3 border border-ink shadow-sm">
              <span className="font-technical text-xs font-bold text-ink bg-ink-light px-2.5 py-1 w-max">PROC_08</span>
              <h3 className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold">OEM Services</h3>
              <p className="font-body text-sm text-on-surface-variant">Design &amp; development, private label manufacturing, and bulk order capability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
