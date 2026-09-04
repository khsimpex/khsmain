"use client";

import Image from "next/image";

export default function KnittedShoeUppersPage() {
  const products = [
    { title: "Seamless Uppers", desc: "Single-piece construction for reduced waste and enhanced comfort." },
    { title: "Performance Sneakers", desc: "Zoned tension and breathability for high-impact athletic footwear." },
    { title: "Casual & Lifestyle Footwear", desc: "Stylish, texture-rich knits for everyday wear." },
    { title: "Work & Safety Shoes", desc: "Durable, abrasion-resistant knits with protective integrations." },
    { title: "Zero-Waste Knitting", desc: "Fully-fashioned processes that drastically minimize material waste." },
    { title: "Recycled & Bio-Based Yarns", desc: "Eco-conscious materials without sacrificing performance." },
    { title: "GRS-Certified Options", desc: "Fully traceable sustainable yarn sourcing." }
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
                { "@type": "ListItem", position: 2, name: "Knitted Shoe Uppers", item: "https://www.khsimpex.com/knitted-shoe-uppers" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "3D Knitted Shoe Uppers (OEM Manufacturing)",
              description: "Custom seamless 3D knitted shoe uppers for performance, casual, and safety footwear. Bulk OEM manufacturing with zero-waste technology.",
              brand: {
                "@type": "Brand",
                name: "KHS Impex OEM"
              },
              category: "Footwear Manufacturing"
            }
          ])
        }}
      />
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Commercial Product Manufacturing
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Knitted Shoe Uppers
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Advanced 3D knitting technology meets premium materials. At KHS Impex, we manufacture highly customizable, seamless, and breathable shoe uppers for global footwear brands. By leveraging computerized flat-knitting technology, we engineer lightweight, durable, and form-fitting uppers that redefine athletic and casual footwear performance.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event('open-rfq'))}
              className="bg-ink text-white font-technical uppercase text-sm px-8 py-3 font-medium hover:bg-ink-dark transition-tech"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Technology & Customization */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-6">Precision 3D Knitting Technology</h2>
            <p className="font-body text-on-surface-variant mb-6">
              Our state-of-the-art computerized flat knitting machine park allows for complex, multi-zone structures in a single seamless piece. This revolutionary manufacturing approach reduces material waste by up to 80% compared to traditional cut-and-sew methods. It accelerates production timelines, eliminates the need for stitching multiple panels, and provides brands with unparalleled design freedom.
            </p>
            <ul className="space-y-4 font-body text-ink">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-surface-tint">check_circle</span>
                <span><strong>Zonal Engineering:</strong> Combine high-stretch, breathable, and rigid support zones in one pass.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-surface-tint">check_circle</span>
                <span><strong>Custom Patterns & Colors:</strong> Jacquard capabilities for complex logos, textures, and multi-color designs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-surface-tint">check_circle</span>
                <span><strong>Zero-Waste Production:</strong> Fully fashioned uppers that require no cutting, minimizing environmental footprint.</span>
              </li>
            </ul>
          </div>
          <div className="bg-ink/5 aspect-square flex items-center justify-center p-8 relative overflow-hidden">
            <Image src="/Machinepark.jpeg" alt="Expansive computerized 3D knitting machine park for high-volume seamless footwear production" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full bg-slate-50 py-16 lg:py-24 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Technical Specifications & Capabilities</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              We leverage advanced flat-knitting programming to engineer uppers that meet strict biomechanical and performance criteria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Hot-Melt Yarn Integration</h4>
              <p className="font-body text-sm text-slate-600">Thermoplastic yarns strategically knitted into high-stress zones (like the toe box or heel counter) that melt and harden during post-processing to provide rigid structural support without adding heavy overlays.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Zonal Stretch & Compression</h4>
              <p className="font-body text-sm text-slate-600">By altering the stitch structure (e.g., tuck stitches vs. jersey knits) and yarn tension in a single pass, we create localized zones of high elasticity for flex points and dense compression for ankle stability.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Engineered Breathability</h4>
              <p className="font-body text-sm text-slate-600">Precision pointelle and open-mesh stitch patterns are programmed directly into the vamp and medial/lateral sides to maximize airflow and moisture management during athletic performance.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h4 className="font-headline text-lg font-bold text-ink uppercase mb-2">Abrasion Resistance</h4>
              <p className="font-body text-sm text-slate-600">For work, safety, and trail footwear, we knit specialized high-tenacity yarns (such as Kevlar blends or TPU-coated threads) into the outer surface layer to protect against harsh environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KHS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="bg-ink/5 aspect-square flex items-center justify-center p-8 relative overflow-hidden">
            <Image src="/Manufacturing Process.jpeg" alt="Detailed view of the automated 3D knitting process for seamless shoe uppers" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-6">Why Partner With KHS Impex?</h2>
            <p className="font-body text-on-surface-variant mb-6">
              In the fast-paced footwear industry, speed-to-market and flawless execution are paramount. Our vertical integration ensures that every step—from yarn sourcing to final QC—is controlled in-house.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-headline text-xl font-bold text-ink uppercase mb-1">Rapid Prototyping (R&D)</h4>
                <p className="font-body text-sm text-slate-600">Our dedicated team of CAD programmers and sampling technicians can turn your tech packs into physical, highly accurate 3D knitted prototypes in record time, significantly accelerating your design iterations.</p>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-ink uppercase mb-1">Massive Scalability</h4>
                <p className="font-body text-sm text-slate-600">Equipped with hundreds of computerized flat-knitting machines running 24/7, we comfortably handle massive bulk orders for global retail rollouts while maintaining consistent stitch tension across every single unit.</p>
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold text-ink uppercase mb-1">Cost-Efficiency via Zero-Waste</h4>
                <p className="font-body text-sm text-slate-600">Because our uppers are fully-fashioned (knitted exactly to the shape of the pattern), there is virtually zero cutting waste. This sustainability benefit also translates directly into lower material costs for your brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4 text-center">Footwear Applications</h2>
        <p className="font-body text-on-surface-variant max-w-3xl mx-auto text-center mb-12">
          From high-performance athletic wear to sustainable casual sneakers, our 3D knitted uppers are tailored to meet the specific functional and aesthetic demands of diverse footwear categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((app, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 flex flex-col items-start hover:shadow-lg transition-all duration-300">
              <h3 className="font-headline text-2xl font-bold uppercase text-ink mb-2">{app.title}</h3>
              <p className="font-body text-on-surface-variant">{app.desc}</p>
            </div>
          ))}
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

      {/* QC, OEM, and CTA */}
      <section className="w-full bg-surface-container-lowest border-t border-ink/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <h2 className="font-headline text-3xl uppercase text-ink font-bold mb-6">OEM / ODM & Quality Control</h2>
            <p className="font-body text-on-surface-variant mb-6">
              We offer comprehensive Private Label, OEM, and ODM manufacturing services tailored to the footwear industry. From initial CAD programming and rapid prototyping to bulk production and export logistics, our dedicated R&D team works closely with your designers to bring complex concepts to market with unmatched precision and speed.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-surface-tint pl-4 py-1">
                <h4 className="font-technical text-sm font-bold text-ink uppercase mb-1">Rigorous QA</h4>
                <p className="font-body text-sm text-slate-500">AQL standard inspections for stretch, colorfastness, and structural integrity.</p>
              </div>
              <div className="border-l-2 border-surface-tint pl-4 py-1">
                <h4 className="font-technical text-sm font-bold text-ink uppercase mb-1">Flexible MOQ</h4>
                <p className="font-body text-sm text-slate-500">Scalable production lines accommodating both niche boutique runs and mass-market volume.</p>
              </div>
            </div>
          </div>

          <div className="bg-ink text-white p-8 sm:p-12 flex flex-col justify-center items-start">
            <h3 className="font-headline text-3xl font-bold uppercase mb-4">Start Your Project</h3>
            <p className="font-body text-white/70 mb-8">
              Partner with KHS IMPEX for reliable, high-quality knitted shoe upper manufacturing. Contact us for a quote, material samples, or a factory visit.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-rfq'))}
              className="bg-white text-ink font-technical uppercase text-sm px-8 py-4 font-bold hover:bg-slate-200 transition-tech w-full sm:w-auto text-center"
            >
              Submit RFQ
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
