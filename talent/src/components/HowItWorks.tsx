"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        id: "step-1",
        number: "01",
        title: "The Vision",
        subtitle: "Started 2022",
        description: "What began as a simple idea to elevate airport dining transformed into Cravings Restaurant. We noticed travelers lacked access to high-quality, freshly prepared meals before their flights. Our journey started with a mission to change that.",
        stats: ["Premium Lounge Concept", "Menu Development", "Location Scouting"]
    },
    {
        id: "step-2",
        number: "02",
        title: "The Growth",
        subtitle: "Building the Team",
        description: "Our commitment to excellence attracted top culinary talent. Today, we have grown to over 100 dedicated employees, each passionate about delivering exceptional service and unforgettable flavors to every guest.",
        stats: ["100+ Team Members", "Expert Chefs", "24/7 Operations"]
    },
    {
        id: "step-3",
        number: "03",
        title: "The Leadership",
        subtitle: "Meet Selamawit Samuel",
        description: "Under the visionary leadership of our founder, Selamawit Samuel, Cravings has established a new standard for hospitality. Her dedication to quality and warm Ethiopian hospitality is infused into every aspect of the restaurant.",
        stats: ["Visionary Founder", "Commitment to Quality", "Empowering Leadership"]
    },
    {
        id: "step-4",
        number: "04",
        title: "The Recognition",
        subtitle: "Two-Time FAB Award Winner",
        description: "Our relentless pursuit of perfection hasn't gone unnoticed. We are incredibly proud to have been recognized globally, winning the prestigious FAB Award twice for our outstanding contribution to airport food and beverage.",
        stats: ["Global Recognition", "FAB Award Winners", "Excellence in Service"]
    }
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLDivElement>(null);
    const rightVisualRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Sticky right console effect
        ScrollTrigger.create({
            trigger: leftTextRef.current,
            start: "top 20%",
            end: "bottom 80%",
            pin: rightVisualRef.current,
            pinSpacing: false,
        });

        // Step-by-step reveal
        const steps = gsap.utils.toArray<HTMLElement>(".process-step");
        const visualRings = gsap.utils.toArray<HTMLElement>(".visual-ring");
        const visualNumbers = gsap.utils.toArray<HTMLElement>(".visual-number");

        steps.forEach((step: any, i) => {
            gsap.fromTo(step,
                { opacity: 0.2, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        onEnter: () => {
                            // Update Visual Console
                            gsap.to(visualRings, { scale: 0.8, opacity: 0.1, duration: 0.5 });
                            gsap.to(visualRings[i], { scale: 1.2, opacity: 1, duration: 0.5, borderDash: [0, 0] });

                            gsap.to(visualNumbers, { y: 20, opacity: 0, duration: 0.3 });
                            gsap.to(visualNumbers[i], { y: 0, opacity: 1, duration: 0.5, delay: 0.1 });

                            // Background subtle color shift
                            gsap.to(containerRef.current, {
                                backgroundColor: i % 2 === 0 ? '#fafafa' : '#f5f5f6',
                                duration: 1
                            });
                        },
                        onEnterBack: () => {
                            // Update Visual Console going backward
                            gsap.to(visualRings, { scale: 0.8, opacity: 0.1, duration: 0.5 });
                            gsap.to(visualRings[i], { scale: 1.2, opacity: 1, duration: 0.5, borderDash: [0, 0] });

                            gsap.to(visualNumbers, { y: -20, opacity: 0, duration: 0.3 });
                            gsap.to(visualNumbers[i], { y: 0, opacity: 1, duration: 0.5, delay: 0.1 });
                        }
                    }
                }
            );
        });

        // Connecting Line animation
        gsap.fromTo(".connecting-line",
            { height: 0 },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: leftTextRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="how-it-works"
            className="relative z-30 w-full bg-neutral-50 text-neutral-900 overflow-hidden font-sans border-t border-neutral-200/50"
        >
            <div className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-20">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-leaf-100/30 rounded-full blur-[100px]" />
                <div className="absolute inset-x-0 w-full h-full bg-[radial-gradient(rgba(217,74,26,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-32 md:py-48">

                {/* Header Section */}
                <div className="w-full mb-32 md:mb-48 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="w-8 h-px bg-brand-500"></span>
                            <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">Our Journey</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9]">
                            OUR <br />
                            <span className="text-transparent text-stroke-1 text-stroke-brand-500/30 [WebkitTextStroke:_2px_#d94a1a33]">STORY & AWARDS</span><br />
                            <span className="text-3xl md:text-5xl text-brand-500 mt-4 block">The Crave You Deserve.</span>
                        </h2>
                    </div>
                    <div className="max-w-sm text-neutral-600 font-medium leading-relaxed pb-4 text-left">
                        We don't just serve meals; we craft experiences. Our journey from a concept to an award-winning restaurant is fueled by a passion for culinary excellence.
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row relative gap-16 lg:gap-24">

                    {/* Left Side: Scrolling Steps */}
                    <div className="w-full lg:w-1/2 relative" ref={leftTextRef}>

                        {/* The Line */}
                        <div className="absolute left-6 md:left-10 top-12 bottom-12 w-[1px] bg-neutral-200 -z-10">
                            <div className="connecting-line w-full bg-brand-500 origin-top"></div>
                        </div>

                        <div className="flex flex-col gap-32 md:gap-48 relative z-10 py-12">
                            {PROCESS_STEPS.map((step, i) => (
                                <div key={step.id} className="process-step flex items-start gap-8 md:gap-12 group">

                                    {/* Number / Node */}
                                    <div className="relative flex-shrink-0 mt-2">
                                        <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white border border-neutral-200 shadow-xl flex items-center justify-center font-mono text-xl md:text-3xl font-black text-brand-500 transition-transform duration-500 group-hover:scale-110 group-hover:border-brand-500">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow pt-1 md:pt-4">
                                        <div className="text-brand-500 font-mono text-sm tracking-widest uppercase mb-4 font-bold flex items-center gap-4">
                                            // {step.subtitle}
                                            <span className="h-px flex-grow bg-neutral-200 max-w-[100px] hidden md:block"></span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
                                            {step.description}
                                        </p>

                                        {/* Micro Stats List */}
                                        <ul className="space-y-3">
                                            {step.stats.map((stat, j) => (
                                                <li key={j} className="flex items-center gap-3 text-neutral-500 font-medium font-mono text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
                                                    {stat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Sticky Visual Console */}
                    <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative h-[80vh]">
                        <div
                            ref={rightVisualRef}
                            className="w-full max-w-[600px] aspect-square bg-white/80 backdrop-blur-3xl border border-brand-200/50 shadow-2xl rounded-[3rem] relative flex items-center justify-center overflow-hidden"
                        >
                            {/* Inner rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {PROCESS_STEPS.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`visual-ring absolute rounded-full border border-brand-500/10 backdrop-blur-[2px] transition-all duration-1000 ease-in-out`}
                                        style={{
                                            width: `${100 - (i * 15)}%`,
                                            height: `${100 - (i * 15)}%`,
                                            borderStyle: i % 2 === 0 ? 'dashed' : 'solid',
                                            opacity: 0.1,
                                            scale: 0.8
                                        }}
                                    ></div>
                                ))}
                            </div>

                            {/* Center Number Display */}
                            <div className="relative z-10 w-48 h-48 rounded-full bg-neutral-50 border border-brand-200/30 shadow-[0_0_100px_rgba(217,74,26,0.1)] flex items-center justify-center overflow-hidden flex-col gap-2">
                                <span className="text-xs font-mono text-brand-500 uppercase tracking-widest font-bold">Chapter</span>
                                <div className="relative w-full h-24 overflow-hidden">
                                    {PROCESS_STEPS.map((step, i) => (
                                        <div
                                            key={i}
                                            className="visual-number absolute inset-0 flex items-center justify-center text-7xl font-black text-brand-600 font-mono tracking-tighter"
                                            style={{ opacity: i === 0 ? 1 : 0, transform: i === 0 ? 'translateY(0)' : 'translateY(20px)' }}
                                        >
                                            {step.number}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative corner brackets */}
                            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-brand-500/20"></div>
                            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-brand-500/20"></div>
                            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-brand-500/20"></div>
                            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-brand-500/20"></div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
