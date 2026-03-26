"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyItMatters() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Massive Typography Parallax
        gsap.to(".parallax-bg-text", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        // Intro text reveal
        gsap.from(".reveal-text span", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 80%",
            }
        });

        // Grid items stagger
        gsap.from(".impact-card", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".impact-grid",
                start: "top 75%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="why-it-matters"
            className="relative z-50 w-full bg-neutral-50 text-neutral-900 overflow-hidden font-sans border-t border-neutral-200/50 py-32 md:py-48"
        >
            {/* GIANT PARALLAX BACKGROUND TEXT */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 select-none opacity-[0.03]">
                <h1 className="parallax-bg-text text-[20vw] font-black leading-none tracking-tighter text-neutral-200/50 whitespace-nowrap text-center">
                    COMFORT.<br />QUALITY.<br />SERVICE.
                </h1>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 flex flex-col gap-32">

                {/* Intro Dramatic Text */}
                <div className="w-full flex flex-col items-center text-center max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-4 mb-12">
                        <span className="w-12 h-px bg-brand-500"></span>
                        <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">From Our Guests</span>
                        <span className="w-12 h-px bg-brand-500"></span>
                    </div>

                    <h2 className="reveal-text text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-neutral-900 overflow-hidden">
                        <span className="block inline-block">MORE THAN JUST A MEAL,</span>
                        <span className="block inline-block text-transparent text-stroke-1 text-stroke-neutral-300">IT'S A MEMORABLE</span>
                        <span className="block inline-block text-brand-500">AIRPORT EXPERIENCE.</span>
                    </h2>

                    <p className="mt-12 text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-3xl">
                        Don't just take our word for it. Here is what travelers passing through Bole International Airport have to say about their time at Cravings.
                    </p>
                </div>

                {/* Impact Grid */}
                <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                    <div className="impact-card bg-white border border-neutral-100 p-8 rounded-3xl group shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <div className="text-brand-500 font-mono text-sm tracking-widest mb-6 font-bold group-hover:text-brand-600 transition-colors">★★★★★</div>
                        <h3 className="text-xl font-black text-neutral-900 mb-4">"Absolutely Delicious"</h3>
                        <p className="text-neutral-600 font-medium">"The best food I’ve ever had at an airport. The Cravings burger was cooked to perfection and the service was so fast."</p>
                        <div className="mt-6 text-sm text-neutral-400 font-mono">— Sarah Jenkins</div>
                    </div>

                    <div className="impact-card bg-white border border-neutral-100 p-8 rounded-3xl group lg:translate-y-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <div className="text-brand-500 font-mono text-sm tracking-widest mb-6 font-bold group-hover:text-brand-600 transition-colors">★★★★★</div>
                        <h3 className="text-xl font-black text-neutral-900 mb-4">"A Calm Oasis"</h3>
                        <p className="text-neutral-600 font-medium">"Traveling can be stressful, but sitting down at Cravings felt like a moment of peace. The Traditional Beyaynetu was incredible."</p>
                        <div className="mt-6 text-sm text-neutral-400 font-mono">— Michael T.</div>
                    </div>

                    <div className="impact-card bg-white border border-neutral-100 p-8 rounded-3xl group shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <div className="text-brand-500 font-mono text-sm tracking-widest mb-6 font-bold group-hover:text-brand-600 transition-colors">★★★★★</div>
                        <h3 className="text-xl font-black text-neutral-900 mb-4">"Perfect Grab & Go"</h3>
                        <p className="text-neutral-600 font-medium">"I only had 15 minutes before boarding. Their grab & go sandwich and coffee were literal lifesavers. Highly recommend!"</p>
                        <div className="mt-6 text-sm text-neutral-400 font-mono">— Elena Rodriguez</div>
                    </div>

                    <div className="impact-card bg-white border border-neutral-100 p-8 rounded-3xl group lg:translate-y-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                        <div className="text-brand-500 font-mono text-sm tracking-widest mb-6 font-bold group-hover:text-brand-600 transition-colors">★★★★★</div>
                        <h3 className="text-xl font-black text-neutral-900 mb-4">"Exceptional Service"</h3>
                        <p className="text-neutral-600 font-medium">"The staff here are so welcoming and attentive. They made sure my family had everything we needed before our long flight."</p>
                        <div className="mt-6 text-sm text-neutral-400 font-mono">— David & Emma</div>
                    </div>

                </div>

            </div>
        </section>
    );
}
