"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "PRIVACY POLICY", href: "/" },
  { name: "TERMS OF SERVICE", href: "/" },
  { name: "GLOBAL LOGISTICS", href: "/manufacturing/" },
  { name: "QUALITY ASSURANCE", href: "/quality/" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white w-full border-t-2 border-ink font-technical text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-200">

          {/* Footer Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="KHS Impex precision textile manufacturing company logo" 
              width={300} 
              height={80} 
              className="w-auto h-8 sm:h-10 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              unoptimized
            />
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-6 text-on-surface-variant uppercase font-medium text-[10px] sm:text-xs">
            {footerLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-ink border-b-2 border-transparent hover:border-ink transition-tech py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 text-slate-500 text-[10px] sm:text-[11px]">
          <div>
            &copy; <span>{year}</span> KHS IMPEX. ALL RIGHTS RESERVED.
          </div>
          <div className="text-slate-500">
            A-4/E, Sector-80, Noida, UP, India - 201305
          </div>
        </div>
      </div>
    </footer>
  );
}
