"use client";
import Image from "next/image";

export default function HomeTextilesPage() {
  const products = [
    { title: "Pillow & Cushion Covers", desc: "Premium knitted covers designed to withstand daily wear." },
    { title: "Blankets & Throws", desc: "Luxurious knits available in custom dimensions and patterns." },
    { title: "Baby Bedding Products", desc: "Soft, safe, and breathable knitted bedding for infants." },
    { title: "Kitchen Towels (Knitted)", desc: "Highly absorbent and durable kitchen textiles." },
    { title: "Soft Hand Feel", desc: "Engineered for maximum comfort and a premium tactile experience." },
    { title: "Color Fastness Controlled", desc: "Strict quality checks to ensure vibrant, long-lasting colors." },
    { title: "Custom GSM & Designs", desc: "Fully customizable fabric weight and jacquard patterns." }
  ];

  return (
    <main className="w-full flex-grow flex flex-col pt-20 sm:pt-24 lg:pt-32 bg-surface-container-lowest">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-20 border-b border-ink/10">
        <div className="max-w-4xl">
          <span className="font-technical text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
            // Commercial Manufacturing
          </span>
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-ink uppercase tracking-tight mb-6">
            Home Textiles
          </h1>
          <p className="font-body text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Elevating interior spaces with premium knitted home textiles. We manufacture durable, beautifully textured throws, blankets, and cushion covers for global lifestyle and hospitality brands. Using advanced knitting technology, we create textiles that balance luxurious hand-feel with the rigorous durability required for commercial and everyday home use.
          </p>
          <div className="mt-8">
            <button onClick={() => window.dispatchEvent(new Event('open-rfq'))} className="bg-ink text-white font-technical uppercase text-sm px-8 py-3 font-medium hover:bg-ink-dark transition-tech">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-16 lg:py-24">
        <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4 text-center">Our Product Lines</h2>
        <p className="font-body text-on-surface-variant max-w-3xl mx-auto text-center mb-12">
          From intricate jacquard patterns to heavy-gauge ribbed blankets, our product lines are fully customizable. We specialize in developing exclusive textiles that align perfectly with your brand's seasonal collections and interior design aesthetics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 flex flex-col items-start hover:shadow-lg transition-all duration-300">
               <h3 className="font-headline text-2xl font-bold uppercase text-ink mb-2">{p.title}</h3>
               <p className="font-body text-on-surface-variant">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Raw Materials & Yarns */}
      <section className="w-full bg-slate-50 py-16 lg:py-24 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-ink font-bold mb-4">Raw Materials & Yarns</h2>
            <p className="font-body text-on-surface-variant max-w-3xl mx-auto">
              We source and utilize a comprehensive library of premium yarns to manufacture home textiles that offer the perfect balance of hand-feel, durability, and cost-efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Acrylic Yarn</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Chenille Yarn</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Cotton Yarn</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Mohair Blend</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Nylon & Viscose Blends</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Polyester (High Bulk)</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Recycled Yarns</span>
            </div>
            <div className="bg-white p-4 border border-slate-200 text-center shadow-sm hover:border-surface-tint transition-all">
              <span className="font-headline font-bold text-ink uppercase text-sm">Wool</span>
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
              When sourcing home textiles for mass retail or boutique hospitality, consistency is key. We ensure exact dimensional stability, weight (GSM), and color accuracy across every batch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">precision_manufacturing</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Heavy-Gauge Knitting</h4>
              <p className="font-body text-sm text-slate-600">Our specialized machinery includes low-gauge flat knitting machines capable of producing the ultra-chunky, heavy-textured knit blankets and throws that are highly sought after in premium home decor markets.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">handshake</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Industrial Wash Durability</h4>
              <p className="font-body text-sm text-slate-600">Home textiles undergo significant wear and tear. Our yarns and stitching techniques are selected to minimize pilling, prevent shrinkage, and survive rigorous washing cycles while maintaining their luxurious softness.</p>
            </div>
            <div className="bg-white p-6 border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-surface-tint mb-4">architecture</span>
              <h4 className="font-headline text-xl font-bold text-ink uppercase mb-2">Custom Jacquard Art</h4>
              <p className="font-body text-sm text-slate-600">Provide us with your artwork, and our programmers will translate it into a stunning, multi-color jacquard knit for statement blankets or decorative pillows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-ink text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-3xl uppercase font-bold mb-6">OEM & Global Export Logistics</h2>
            <p className="font-body text-white/70 mb-6">
              Our export-ready manufacturing facility in Noida, India is optimized for high-volume home textile production. As a dedicated OEM partner, we offer extensive customization in yarns—from sustainable recycled cotton and organic blends to plush chenille and durable acrylics. We enforce strict inline quality checks for color fastness, dimensional stability, and pilling resistance to ensure every shipment meets rigorous international retail standards.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-surface-tint pl-4 py-1">
                <h4 className="font-technical text-sm font-bold uppercase mb-1">Global Export Ready</h4>
                <p className="font-body text-sm text-white/50">Compliant with international packaging, labeling, and shipping standards.</p>
              </div>
              <div className="border-l-2 border-surface-tint pl-4 py-1">
                <h4 className="font-technical text-sm font-bold uppercase mb-1">Scalable MOQ</h4>
                <p className="font-body text-sm text-white/50">Cost-effective production runs tailored to your distribution network.</p>
              </div>
            </div>
          </div>
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
