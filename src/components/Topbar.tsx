export default function Topbar() {
  return (
    <aside className="w-full bg-ink text-white font-technical text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-8 border-b border-ink-dark z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1 sm:gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white animate-pulse shrink-0"></span>
          <span className="ticker-text tracking-wider uppercase font-semibold truncate">ISO &amp; AQL 2.5/4.0 COMPLIANT</span>
          <span className="hidden md:inline opacity-60">•</span>
          <span className="hidden md:inline opacity-90">NOIDA, NCR - INDIA</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-white/90 shrink-0">
          <span className="hidden sm:inline font-mono text-[10px] sm:text-xs">inof@khsimpex.com</span>
          <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold whitespace-nowrap">
            [ EXPORT ]
          </span>
        </div>
      </div>
    </aside>
  );
}
