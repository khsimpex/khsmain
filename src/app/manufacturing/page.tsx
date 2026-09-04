import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Apparel Manufacturing Capabilities | KHS Impex',
  description: 'State-of-the-art apparel manufacturing facility offering computerized flat knitting, precision dyeing, automated assembly, and high-density embroidery.',
  alternates: {
    canonical: '/manufacturing',
  },
  openGraph: {
    title: 'Apparel Manufacturing Capabilities | KHS Impex',
    description: 'State-of-the-art apparel manufacturing facility offering computerized flat knitting, precision dyeing, automated assembly, and high-density embroidery.',
    url: '/manufacturing',
  },
};

import GlobalCTA from "../../components/GlobalCTA";
import Link from "next/link";

export default function ManufacturingPage() {
  const capabilities = [
    { title: "Computerized Flat Knitting", desc: "Our core competency. We operate a vast fleet of automated flat-knitting machines capable of executing complex 3D structures, multi-gauge transitions, and intarsia patterns with microscopic precision." },
    { title: "Precision Dyeing & Color Matching", desc: "In-house lab-dip testing and high-capacity dyeing infrastructure ensure exact Pantone matching and brilliant, fade-resistant color fastness across all yarn blends." },
    { title: "Automated Cutting & Seamless Assembly", desc: "For cut-and-sew programs, we utilize laser-guided cutting tables and automated linking machines to ensure perfectly aligned seams, zero distortion, and flawless structural integrity." },
    { title: "Screen & Digital Printing", desc: "Advanced placement printing, sublimation, and direct-to-garment (DTG) capabilities for complex graphics, branding, and all-over patterns." },
    { title: "High-Density Embroidery", desc: "Multi-head computerized embroidery machines for applying durable, highly detailed 3D logos, crests, and textural appliqués." },
    { title: "Washing, Finishing & Packaging", desc: "Industrial washing units for pre-shrinking and enzyme treatments, followed by automated ironing, strict QC, and custom retail-ready packaging." }
  ];

  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.khsimpex.com" },
                { "@type": "ListItem", position: 2, name: "Manufacturing", item: "https://www.khsimpex.com/manufacturing" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Apparel Manufacturing",
              provider: {
                "@type": "LocalBusiness",
                name: "KHS Impex"
              },
              areaServed: {
                "@type": "Country",
                name: "Global"
              },
              description: "State-of-the-art apparel manufacturing facility offering computerized flat knitting, precision dyeing, automated assembly, and high-density embroidery."
            }
          ])
        }}
      />
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Manufacturing Authority
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Manufacturing Capabilities
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Our state-of-the-art 150,000 sq. ft. manufacturing facility in Noida integrates every step of the production lifecycle under one roof. From raw yarn sourcing to final packaging, this vertical integration ensures total control over quality, speed to market, and cost efficiency.
          </p>
        </div>
      </section>

      <section className="w-full bg-ink text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="border border-white/20 p-8 hover:border-surface-tint hover:bg-white/5 transition-tech flex flex-col items-start text-left">
                <span className="font-technical text-surface-tint text-sm mb-4">0{i + 1}</span>
                <h3 className="font-headline text-xl font-bold uppercase mb-3">{cap.title}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Factory Infrastructure & Capacity */}
      <section className="w-full bg-slate-50 border-t border-ink/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Infrastructure & Capacity</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              Our expansive, purpose-built manufacturing complex in Noida is engineered for massive scale, operating on a 24/7 production cycle to meet the demands of global retail rollouts.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
              <span className="font-technical text-4xl font-bold text-surface-tint mb-2">150K+</span>
              <span className="font-headline uppercase text-sm font-bold text-ink">Sq. Ft. Facility</span>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
              <span className="font-technical text-4xl font-bold text-surface-tint mb-2">500K+</span>
              <span className="font-headline uppercase text-sm font-bold text-ink">Monthly Unit Capacity</span>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
              <span className="font-technical text-4xl font-bold text-surface-tint mb-2">24/7</span>
              <span className="font-headline uppercase text-sm font-bold text-ink">Operating Cycle</span>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
              <span className="font-technical text-4xl font-bold text-surface-tint mb-2">100+</span>
              <span className="font-headline uppercase text-sm font-bold text-ink">Active CNC Knitters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Integration Workflow */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <h2 className="font-headline text-3xl sm:text-4xl uppercase font-bold text-ink mb-12 text-center">End-to-End Vertical Integration</h2>
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-technical text-6xl text-surface-tint/30 font-bold hidden md:block">01</div>
            <div className="md:w-3/4">
              <h3 className="font-headline text-2xl uppercase font-bold text-ink mb-3 flex items-center gap-4">
                <span className="font-technical text-xl text-surface-tint md:hidden">01</span>
                Yarn Sourcing & Lab Testing
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                Production begins with rigorous raw material procurement. We source premium yarns (acrylic, chenille, GRS-recycled poly, organic cotton) and immediately subject them to in-house lab-dip testing for perfect Pantone matching and tensile strength verification before they ever touch a knitting machine.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-technical text-6xl text-surface-tint/30 font-bold hidden md:block">02</div>
            <div className="md:w-3/4">
              <h3 className="font-headline text-2xl uppercase font-bold text-ink mb-3 flex items-center gap-4">
                <span className="font-technical text-xl text-surface-tint md:hidden">02</span>
                3D CAD & Computerized Knitting
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                Approved tech packs are translated into proprietary CNC code by our technical designers. Our <Link href="/technology" className="text-surface-tint hover:underline font-bold">automated flat-knitting machines</Link> then execute the programs, knitting fully-fashioned panels, complex intarsia graphics, and zonal-tension shoe uppers with zero margin for human error.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-technical text-6xl text-surface-tint/30 font-bold hidden md:block">03</div>
            <div className="md:w-3/4">
              <h3 className="font-headline text-2xl uppercase font-bold text-ink mb-3 flex items-center gap-4">
                <span className="font-technical text-xl text-surface-tint md:hidden">03</span>
                Linking & Automated Assembly
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                Knitted panels move to our assembly floor where precision linking machines join the seams stitch-by-stitch. This method ensures maximum structural integrity, stretch capacity, and a flawless, high-end finish that cannot be achieved via traditional cut-and-sew overlocking.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-technical text-6xl text-surface-tint/30 font-bold hidden md:block">04</div>
            <div className="md:w-3/4">
              <h3 className="font-headline text-2xl uppercase font-bold text-ink mb-3 flex items-center gap-4">
                <span className="font-technical text-xl text-surface-tint md:hidden">04</span>
                Industrial Wash & Finishing
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                Every garment undergoes specialized industrial washing—including enzyme, silicone, or bio-washes—to achieve the exact requested hand-feel, lock in dyes, and guarantee dimensional stability (preventing consumer shrinkage).
              </p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4 font-technical text-6xl text-surface-tint/30 font-bold hidden md:block">05</div>
            <div className="md:w-3/4">
              <h3 className="font-headline text-2xl uppercase font-bold text-ink mb-3 flex items-center gap-4">
                <span className="font-technical text-xl text-surface-tint md:hidden">05</span>
                AQL QC & Export Packaging
              </h3>
              <p className="font-body text-slate-600 leading-relaxed">
                Final products undergo <Link href="/quality" className="text-surface-tint hover:underline font-bold">AQL 2.5/4.0 inspections</Link> for measurement tolerances and visual defects. Passed units are ironed, tagged with custom branded trims, bagged, and boxed for immediate global export logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </main>
  );
}
