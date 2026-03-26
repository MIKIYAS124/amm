"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, name: "ISO 9001:2015", desc: "Quality Management System focused on enhancing customer satisfaction." },
  { icon: Award, name: "ISO 20000-1:2018", desc: "Information Technology Service Management (ITSM) for superior support and deliverables." },
];

export default function Footer() {
  return (
    <footer className="bg-sl-navy text-white/70 relative overflow-hidden selection:bg-white/20 selection:text-white">

      {/* Thin top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-10">

        {/* Certifications Banner */}
        <div className="pb-16 mb-16 border-b border-white/[0.06]">
          <div className="flex items-center gap-4 mb-10">
            <BadgeCheck size={16} className="text-white/30" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">World-Class Certifications</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-5 p-6 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.06] shrink-0">
                  <cert.icon size={20} strokeWidth={1.5} className="text-white/50" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white/80 mb-1">{cert.name}</h4>
                  <p className="text-white/35 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Stats */}
        <div className="pb-16 mb-16 border-b border-white/[0.06]">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-10 block">Why Us</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="font-serif text-5xl md:text-6xl text-white tracking-tighter leading-none mb-3">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Years Experience</p>
              <p className="text-white/35 text-sm leading-relaxed">Deep domain expertise in financial crime prevention and regulatory technology.</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-white tracking-tighter leading-none mb-3">200+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Expert Team</p>
              <p className="text-white/35 text-sm leading-relaxed">Data scientists, compliance veterans, and engineers dedicated to your success.</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl text-white tracking-tighter leading-none mb-3">99.9%</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Client Loyalty</p>
              <p className="text-white/35 text-sm leading-relaxed">Retention rate that speaks to the trust and results we deliver every day.</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 pb-16 border-b border-white/[0.06]">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/25 mb-5">AI-Driven Compliance</p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white mb-5 leading-snug">
              <Image
                src="/logoctms.png"
                alt="ctms logo"
                width={200}
                height={70}
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
              />
            </h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Combatting complex financial crime through artificial intelligence. AML compliance and advanced fraud detection for institutions worldwide.
            </p>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">Solutions</h4>
            <ul className="space-y-3.5 text-sm text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors duration-300">AML Engine</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Fraud Detection</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Link Analysis</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">POI Tracking</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">Company</h4>
            <ul className="space-y-3.5 text-sm text-white/50">
              <li><Link href="#" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Certifications</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">Connect</h4>
            <p className="text-sm text-white/40 leading-loose mb-5">
              Global Operations
            </p>
            <a
              href="mailto:info@zeb.com"
              className="text-sm text-white/50 hover:text-white border-b border-white/10 hover:border-white/40 pb-0.5 transition-all duration-300 inline-block"
            >
              info@zeb.com
            </a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium gap-4">
          <p>&copy; 2026 <Image src="/logoctms.png" alt="ctms logo" width={120} height={42} className="h-10 w-auto object-contain brightness-0 invert inline-block" /></p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
