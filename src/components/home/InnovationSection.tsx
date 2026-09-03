export default function InnovationSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#fcfbf9] border-b border-ink" id="innovation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <span data-reveal className="font-technical text-xs text-surface-tint uppercase tracking-widest font-bold mb-4 block">INNOVATION</span>
          <h2 data-reveal data-reveal-delay="1" className="font-headline text-4xl sm:text-5xl md:text-6xl text-ink font-bold tracking-tight mb-4">
            Advanced Technology
          </h2>
          <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Cutting-edge Flyknit technology for superior footwear solutions
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Block 1 */}
          <div data-reveal className="bg-white flex flex-col md:flex-row border-l-4 border-surface-tint shadow-sm">
            <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Seamless Construction</h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                Our advanced Flyknit technology eliminates the need for excessive stitching, creating seamless uppers that enhance flexibility, comfort, and overall shoe performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Enhanced flexibility</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Superior comfort</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Reduced production waste</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Better breathability</div>
              </div>
            </div>

          </div>

          {/* Block 2 */}
          <div data-reveal className="bg-white flex flex-col-reverse md:flex-row border-l-4 border-surface-tint shadow-sm">

            <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Precision Engineering</h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                Different knit zones engineered for specific purposes - breathability where needed, flexibility in movement areas, and reinforcement in high-stress zones.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Zone-specific performance</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Optimized breathability</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Targeted reinforcement</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Custom flexibility</div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div data-reveal className="bg-white flex flex-col md:flex-row border-l-4 border-surface-tint shadow-sm">
            <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-ink mb-4">Sustainable Manufacturing</h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                Committed to environmental responsibility through zero-waste knitting processes and eco-friendly material options including GRS-certified recycled yarns, bio-based fibers, and organic cotton.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 text-sm text-on-surface-variant font-body">
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">GRS-Certified Recycled Yarns</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Organic Cotton Available</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Zero-waste 3D knitting</div>
                <div className="flex items-center gap-2 border-l-2 border-surface-tint pl-3 py-1 bg-surface-container-low/50">Bio-based performance fibers</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
