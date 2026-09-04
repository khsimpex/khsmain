import Image from "next/image";

export default function ProductCategoriesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-ink" id="products">
      <div className="border-b border-ink pb-8 mb-8 sm:mb-12">
        <span data-reveal className="font-technical text-xs text-ink uppercase tracking-widest font-bold mb-2 block">// WHAT WE MAKE</span>
        <h2 data-reveal data-reveal-delay="1" className="font-headline text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink font-bold">
          Product Categories
        </h2>
        <p data-reveal data-reveal-delay="2" className="font-body text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
          Comprehensive knitted product solutions manufactured to rigorous global specifications.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-ink">
        <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-ink flex flex-col">
          <div className="group relative overflow-hidden bg-slate-100 w-full h-64 sm:h-80 md:h-96 lg:h-115">
            <Image 
              alt="Assortment of wholesale knitted home textiles including patterned cushion covers and throws"
              className="img-zoom object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src='/Knitted Throws.png' 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="p-5 sm:p-6 lg:p-8 bg-white border-t lg:border-t-0 lg:border-r border-ink lg:absolute lg:bottom-0 lg:left-0 lg:max-w-lg shadow-lg">
              <span className="font-technical text-xs text-ink font-bold uppercase mb-1 block">[ CATEGORY 01 ]</span>
              <h3 className="font-headline text-xl sm:text-2xl lg:text-3xl xl:text-4xl uppercase leading-tight mb-2 sm:mb-3 text-ink font-bold">
                Wholesale Knitted Home Textiles
              </h3>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant mb-3 sm:mb-4">
                High-quality bulk knitted throws, custom pillow & cushion covers, baby bedding products, and knitted kitchen towels with a premium soft hand feel.
              </p>
              <div className="font-technical text-[10px] sm:text-[11px] uppercase tracking-wider border-t border-ink pt-3 text-slate-700 font-semibold">
                Materials: Cotton Blends, Polyester/Lycra, Organic Cotton
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-center p-6 sm:p-8 md:p-12 bg-surface-container-low border-b lg:border-b-0 border-ink">
          <span className="material-symbols-outlined text-4xl text-ink mb-4">format_quote</span>
          <p className="font-body text-base sm:text-lg italic text-ink font-medium leading-relaxed">
            &quot;We offer a wide range of patterns and yarn blends to suit global design trends, ensuring every piece meets international luxury standards.&quot;
          </p>
          <div className="mt-6 pt-4 border-t border-ink-subtle font-technical text-xs text-on-surface-variant uppercase">
            // High Color Fastness &amp; Custom GSM
          </div>
        </div>
        <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 border-t border-ink">
          <div className="border-b lg:border-b-0 lg:border-r border-ink flex flex-col justify-between">
            <div className="p-6 sm:p-8 md:p-10 border-b border-ink bg-white">
              <span className="font-technical text-xs text-ink font-bold uppercase mb-2 block">[ CATEGORY 02 ]</span>
              <h3 className="font-headline text-2xl sm:text-3xl uppercase mb-3 text-ink font-bold">Knitted Apparel Manufacturing</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-md">
                Precision-manufactured garments including round/V-neck t-shirts, polo shirts, pullovers, cardigans, mufflers, and scarves with complex jacquards and fine gauge stitching.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100 group">
              <Image 
                alt="Premium knitted apparel manufacturing showing folded textured sweaters and pullovers"
                className="img-zoom object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/Premium-Fabricss-main.png" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100 group border-b border-ink">
              <Image 
                alt="Seamless 3D knitted shoe upper prototype for athletic footwear production"
                className="img-zoom object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/seamless.png" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10 bg-ink text-white">
              <span className="font-technical text-xs text-blue-200 font-bold uppercase mb-2 block">[ CATEGORY 03 ]</span>
              <h3 className="font-headline text-2xl sm:text-3xl uppercase mb-3 font-bold text-white">3D Knit Footwear Factory</h3>
              <p className="font-body text-sm text-blue-100 max-w-md mb-6 leading-relaxed">
                OEM seamless uppers for performance sneakers, casual lifestyle footwear, and work/safety shoes delivering exceptional breathability and zoned tensioning through computerized flat-knitting.
              </p>
              <div className="font-technical text-[11px] uppercase tracking-wider border-t border-blue-400/50 pt-3 text-blue-200 font-semibold">
                Tech: 3D Flat Knit | Yarns: GRS-Certified Recycled & Bio-Based Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
