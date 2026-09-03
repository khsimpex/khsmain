export default function CommitmentSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 border-b border-ink bg-white" id="commitment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <span data-reveal className="font-technical text-[10px] sm:text-xs text-surface-tint uppercase tracking-widest font-bold mb-4 block">
            WHY PARTNER WITH US
          </span>
          <h2 data-reveal data-reveal-delay="1" className="font-headline text-4xl sm:text-5xl md:text-6xl text-ink font-bold tracking-tight mb-4">
            Our Commitment
          </h2>
          <p data-reveal data-reveal-delay="2" className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Building long-term partnerships through quality, reliability, and flexibility
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 01 */}
          <div data-reveal className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">01</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Consistent Quality</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Rigorous quality control at every stage ensures products meet international standards and buyer specifications consistently.
            </p>
          </div>

          {/* Card 02 */}
          <div data-reveal data-reveal-delay="1" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">02</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Competitive Pricing</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Efficient manufacturing processes and strategic partnerships enable us to offer competitive pricing without compromising quality.
            </p>
          </div>

          {/* Card 03 */}
          <div data-reveal data-reveal-delay="2" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">03</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Timely Delivery</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Strong production planning and logistics management ensure on-time delivery for all orders, small or large.
            </p>
          </div>

          {/* Card 04 */}
          <div data-reveal data-reveal-delay="3" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">04</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Flexible MOQs</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Understanding diverse buyer needs, we offer flexible minimum order quantities to support businesses of all sizes.
            </p>
          </div>

          {/* Card 05 */}
          <div data-reveal data-reveal-delay="4" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">05</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Customization</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Complete flexibility in design, colors, GSM, sizes, and packaging to match your specific requirements and brand identity.
            </p>
          </div>

          {/* Card 06 */}
          <div data-reveal data-reveal-delay="5" className="bg-[#fcfbf9] p-8 sm:p-10 text-center flex flex-col items-center border border-ink-subtle/30 shadow-sm transition-transform hover:-translate-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-surface-tint/30 mb-4 block">06</span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-ink mb-3">Long-term Partnership</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              We believe in building lasting relationships, supporting your growth with reliability, transparency, and dedicated service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
