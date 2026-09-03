"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small timeout ensures the DOM has updated before we query for elements
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('[data-reveal]:not(.revealed)');
      if (revealEls.length && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
        
        revealEls.forEach(el => revealObserver.observe(el));
      } else {
        // Fallback: show everything immediately
        revealEls.forEach(el => el.classList.add('revealed'));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
