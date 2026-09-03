import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-28 border-b border-ink grid-bg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Hero Content */}
        <div className="lg:col-span-8 flex flex-col justify-center gap-6">
          <div data-reveal className="inline-flex items-center gap-2 font-technical text-[11px] sm:text-xs text-ink uppercase tracking-widest font-semibold bg-ink-light px-3 py-1 border border-ink-subtle w-max">
            <span className="w-2 h-2 bg-ink inline-block"></span>
            <span>GLOBAL EXPORT SOLUTIONS // EST. 1999</span>
          </div>
          <h1 data-reveal data-reveal-delay="1" className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ink uppercase leading-[0.95] tracking-tight">
            Manufacturing<br />
            <span className="text-surface-tint">Excellence</span><br />
            From India
          </h1>
          <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl border-l-2 sm:border-l-4 border-ink pl-4 leading-relaxed">
            We specialize in B2B textile manufacturing and export of high-quality wholesale knitted home textiles, knitted apparel, and 3D knit footwear for global markets, delivering consistency, customization, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="#contact" className="bg-ink text-white font-headline text-sm sm:text-base px-8 py-4 uppercase hover:bg-ink-dark transition-tech flex items-center justify-center gap-3 shadow-sm">
              <span>Get In Touch</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="#products" className="bg-white border-2 border-ink text-ink font-headline text-sm sm:text-base px-8 py-4 uppercase hover:bg-ink-light transition-tech flex items-center justify-center gap-2">
              <span>Explore Products</span>
            </Link>
          </div>
        </div>

        {/* Right Hero Stats Column */}
        <div className="lg:col-span-4 flex flex-col justify-between border-t-2 lg:border-t-0 lg:border-l-2 border-ink pt-8 lg:pt-0 lg:pl-8 xl:pl-12 gap-6 bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div data-reveal className="border-b lg:border-b border-ink-subtle pb-4">
              <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">25+</span>
              <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Years of Experience</span>
              <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Industrial manufacturing expertise based in Noida</p>
            </div>
            <div data-reveal data-reveal-delay="1" className="border-b lg:border-b border-ink-subtle pb-4">
              <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">100%</span>
              <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Export Oriented</span>
              <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Dedicated exclusively to international buyers</p>
            </div>
            <div data-reveal data-reveal-delay="2" className="pb-2">
              <span className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-ink block leading-none">03</span>
              <span className="font-technical text-xs uppercase text-surface-tint font-bold tracking-wider mt-1 block">Product Categories</span>
              <p className="font-body text-xs text-on-surface-variant mt-1 hidden sm:block">Home textiles, apparel &amp; shoe uppers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
