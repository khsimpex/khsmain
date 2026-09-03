import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grow flex items-center justify-center py-16 sm:py-24 lg:py-32 min-h-[70vh]">
      <div className="flex flex-col items-center text-center max-w-2xl border-2 border-ink p-8 sm:p-12 md:p-16 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]">
        <span className="font-technical text-xs sm:text-sm text-surface-tint font-bold tracking-widest uppercase mb-4 block">
          // ERROR 404 : PAGE NOT FOUND
        </span>
        <h1 className="font-headline font-bold text-7xl sm:text-8xl md:text-9xl text-ink uppercase tracking-tighter leading-none mb-4">
          404
        </h1>
        <h2 className="font-headline text-xl sm:text-2xl md:text-3xl uppercase text-ink font-bold mb-6">
          Route Undefined
        </h2>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-md mb-8 leading-relaxed">
          The manufacturing or product directory you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="bg-ink text-white font-headline text-sm sm:text-base px-8 py-4 uppercase hover:bg-ink-dark transition-tech flex items-center justify-center gap-3 w-full sm:w-auto"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
