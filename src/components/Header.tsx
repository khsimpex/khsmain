"use client";

import { useState, useEffect } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobileMenu = () => {
    if (menuOpen) closeMobileMenu();
    else openMobileMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <>
      <Topbar />
      <Navbar menuOpen={menuOpen} toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu menuOpen={menuOpen} closeMobileMenu={closeMobileMenu} />
    </>
  );
}
