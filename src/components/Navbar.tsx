"use client";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  menuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Navbar({ menuOpen, toggleMobileMenu }: NavbarProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md w-full sticky top-0 border-b border-ink z-40 transition-all">
      <div className="flex justify-between items-center w-full px-3 sm:px-6 md:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 max-w-7xl mx-auto">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center group min-w-0">
          <Image
            src="/logo.png"
            alt="KHS IMPEX Logo"
            width={300}
            height={80}
            className="w-auto h-10 sm:h-12 object-contain group-hover:opacity-90 transition-opacity"
            priority
            unoptimized
            loading="eager"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-4 xl:gap-8 items-center font-technical text-xs uppercase tracking-wider text-ink font-medium">
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#about">ENGINEERING</Link>
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#capabilities">CAPABILITIES</Link>
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#products">PRODUCTS</Link>
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#innovation">INNOVATION</Link>
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#commitment">COMMITMENT</Link>
          <Link className="hover:text-ink-dark py-1 border-b-2 border-transparent hover:border-ink transition-tech whitespace-nowrap" href="#contact">CONTACT</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-rfq'));
            }}
            className="hidden md:inline-flex items-center gap-2 bg-ink text-white font-headline text-xs lg:text-sm tracking-wider px-3 lg:px-5 py-2 lg:py-2.5 uppercase hover:bg-ink-dark transition-tech shadow-sm whitespace-nowrap"
          >
            <span>REQUEST QUOTE</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 text-ink hover:bg-ink-light rounded transition-tech"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
