"use client";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  menuOpen: boolean;
  closeMobileMenu: () => void;
}

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Knitted Shoe Uppers", href: "/knitted-shoe-uppers" },
  { name: "Knitwear Manufacturing", href: "/knitwear" },
  { name: "Home Furnishings", href: "/home-furnishings" },
  { name: "OEM / ODM & Private Label", href: "/oem-odm" },
  { name: "Manufacturing Capabilities", href: "/manufacturing" },
  { name: "Quality", href: "/quality" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Technology", href: "/technology" },
]

export default function MobileMenu({ menuOpen, closeMobileMenu }: MobileMenuProps) {
  return (
    <nav
      className={`fixed inset-0 z-100 bg-white flex flex-col transition-all duration-350 ease-in-out mobile-menu-bg ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center px-5 sm:px-8 pt-5 sm:pt-6 pb-4 border-b border-ink-subtle relative z-10">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="KHS IMPEX Logo"
            width={300}
            height={80}
            className="w-auto h-10 object-contain"
            priority
            unoptimized
            loading="eager"
          />
        </div>
        <button onClick={closeMobileMenu} className="w-10 h-10 flex items-center justify-center bg-ink-light hover:bg-ink hover:text-white text-ink rounded-full transition-tech" aria-label="Close Menu">
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-start px-8 sm:px-12 gap-1 relative z-10 overflow-y-auto pt-4 pb-6">
        {navlinks.map((link, i) => (
          <Link
            key={link.href}
            onClick={closeMobileMenu}
            href={link.href}
            className={`group py-3 sm:py-4 ${i !== navlinks.length - 1 ? 'border-b border-slate-100' : ''} flex justify-between items-center`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-technical text-[10px] sm:text-xs text-ink/40 font-bold">0{i + 1}</span>
              <span className="font-headline text-xl sm:text-2xl uppercase text-ink font-bold group-hover:text-ink-dark transition-tech">{link.name}</span>
            </div>
            <span className="material-symbols-outlined text-lg text-ink/30 group-hover:text-ink transition-tech">arrow_forward</span>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-8 sm:px-12 pb-8 sm:pb-10 pt-4 relative z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            closeMobileMenu();
            window.dispatchEvent(new Event('open-rfq'));
          }}
          className="w-full bg-ink text-white font-headline text-center py-4 tracking-wider uppercase flex items-center justify-center gap-2 text-sm hover:bg-ink-dark transition-tech shadow-md"
        >
          <span>Request Export Quote</span>
          <span className="material-symbols-outlined text-lg">send</span>
        </button>
        <div className="mt-4 text-center font-technical text-[10px] text-ink/40 uppercase tracking-widest">
          info@khsimpex.com • Noida, India
        </div>
      </div>
    </nav>
  );
}
