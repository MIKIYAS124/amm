"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Operations", href: "#operations" },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center text-[10px] md:text-xs font-bold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "white" }}
    >
      <a
        href="#home"
        onClick={(e) => handleClick(e, "#home")}
        className="hover:opacity-60 transition-opacity"
      >
        <Image
          src="/logoctms.png"
          alt="ctms logo"
          width={200}
          height={70}
          className="h-14 md:h-16 w-auto object-contain"
        />
      </a>

      <nav className="hidden sm:flex gap-3 text-sl-navy/60">
        {navLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-3">
            {i > 0 && <span>/</span>}
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="hover:text-sl-navy transition-colors"
            >
              {link.label}
            </a>
          </span>
        ))}
      </nav>

      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className="text-sl-navy border-b border-sl-navy pb-0.5 hover:opacity-60 transition-opacity"
      >
        Contact Us
      </a>
    </header>
  );
}
