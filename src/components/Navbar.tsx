"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "CORE ENGINE", href: "#" },
  { name: "CONNECTIVITY", href: "#", active: true },
  { name: "SECURITY & COMPLIANCE", href: "#" },
  { name: "IMPLEMENTATION", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-sl-light/80 backdrop-blur-md border-b border-sl-navy/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif italic text-2xl font-medium tracking-tight">
          The Sovereign<br />Ledger
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[10px] uppercase font-semibold tracking-widest transition-colors ${link.active ? "text-sl-navy" : "text-sl-navy/50 hover:text-sl-navy"}`}
            >
              {link.name}
              {link.active && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sl-gold"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <Link href="#" className="hidden md:block text-xs font-semibold tracking-wider text-sl-navy hover:opacity-70 transition-opacity">
            Book a<br />Demo
          </Link>
          <button className="bg-sl-navy text-white px-8 py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-sl-navy-light transition-colors">
            Secure<br />Access
          </button>
        </div>
      </div>
    </nav>
  );
}
