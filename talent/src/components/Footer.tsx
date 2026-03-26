"use client";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Massive logo reveal on scroll into footer
        gsap.from(".footer-mega-text", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
            }
        });

        // Staggered reveal for footer columns
        gsap.from(".footer-col", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 60%",
            }
        });

    }, { scope: footerRef });

    const currentYear = new Date().getFullYear();

    return (
        <footer
            ref={footerRef}
            id="footer"
            className="relative w-full bg-neutral-50 text-neutral-900 overflow-hidden py-24 md:py-32 border-t border-brand-100 font-sans"
        >
            {/* --- MEGA BACKGROUND TEXT --- */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 flex items-end justify-center opacity-[0.05] select-none">
                <h1 className="footer-mega-text text-[20vw] font-black leading-[0.75] tracking-tighter text-brand-200 translate-y-8">
                    CRAVINGS.
                </h1>
            </div>

            {/* --- TOP THIN BORDER DECORATION --- */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>

            {/* Grid coordinates decorative */}
            <div className="absolute top-4 left-4 md:left-12 text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                ADDIS ABABA // BOLE INT. AIRPORT
            </div>
            <div className="absolute top-4 right-4 md:right-12 text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                GATE LOCATION // DEPARTURES
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 flex flex-col pt-12 md:pt-24">

                {/* --- MAIN COLUMNS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">

                    {/* Brand / Mission Col */}
                    <div className="footer-col lg:col-span-2 pr-0 lg:pr-16 flex flex-col">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <span className="w-12 h-1 bg-brand-500"></span>
                            <span className="text-sm font-mono tracking-[0.2em] font-bold text-brand-500">CRAVINGS</span>
                        </div>
                        <h3 className="text-3xl font-black mb-6 tracking-tight text-neutral-900">
                            Elevated Airport <br /> Dining Experience
                        </h3>
                        <p className="text-neutral-600 leading-relaxed font-medium max-w-md mb-8">
                            Your journey begins with great food. We provide a comfortable, high-quality dining experience for travelers passing through Addis Ababa Bole International Airport.
                        </p>

                        <div className="flex gap-4 mt-auto">
                            <Link href="#" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-200 hover:border-brand-500 transition-all">
                                <span className="font-mono text-xs tracking-widest uppercase text-neutral-900 group-hover:text-brand-500">Contact Us</span>
                                <svg className="w-4 h-4 text-neutral-900 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Col */}
                    <div className="footer-col flex flex-col">
                        <h4 className="font-mono text-sm tracking-widest text-neutral-400 uppercase mb-8 pb-4 border-b border-brand-100">Navigate</h4>
                        <ul className="flex flex-col gap-4 font-medium text-neutral-700">
                            <li><a href="#about" className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300"></span> About Us</a></li>
                            <li><a href="#how-it-works" className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300"></span> Our Story</a></li>
                            <li><a href="#programs" className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300"></span> Signature Dishes</a></li>
                            <li><a href="#audience" className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300"></span> Menu Experiences</a></li>
                            <li><a href="#why-it-matters" className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300"></span> Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div className="footer-col flex flex-col">
                        <h4 className="font-mono text-sm tracking-widest text-neutral-400 uppercase mb-8 pb-4 border-b border-brand-100">Find Us</h4>
                        <ul className="flex flex-col gap-6 font-medium text-neutral-700">
                            <li>
                                <span className="block text-xs text-neutral-400 font-mono mb-1">General Inquiries /</span>
                                <a href="mailto:info@cravings.com" className="text-xl hover:text-brand-500 transition-colors text-neutral-900">info@cravings.com</a>
                            </li>
                            <li>
                                <span className="block text-xs text-neutral-400 font-mono mb-1">Location /</span>
                                <span className="text-base text-neutral-700">Addis Ababa Bole International Airport<br />Terminal 2, International Departures</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* --- BOTTOM ROW --- */}
                <div className="footer-col flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-red/10 font-mono text-xs tracking-widest text-white/50 uppercase">
                    <div>
                        &copy; {currentYear} CRAVINGS RESTAURANT. ALL RIGHTS RESERVED.
                    </div>

                    <div className="flex gap-8">
                        <a href="https://tiktok.com/@cravings" target="_blank" className="hover:text-brand-red transition-colors">TikTok</a>
                        <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
                        <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
