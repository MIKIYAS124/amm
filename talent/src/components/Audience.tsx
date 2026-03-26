"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROFILES = [
    {
        id: "profile-01",
        title: "Dine-In Options",
        subtitle: "The Full Experience",
        desc: "Sit back and relax in our comfortable dining area. Enjoy a full-service experience with a wide selection of freshly prepared hot meals, signature dishes, and beverages.",
        icon: "🍽️"
    },
    {
        id: "profile-02",
        title: "Grab & Go",
        subtitle: "For the Rushed Traveler",
        desc: "Short on time? Pick up a quick, high-quality meal, fresh pastry, or a hot coffee from our Grab & Go section. Perfect for taking on board your flight.",
        icon: "🏃‍♂️"
    },
    {
        id: "profile-03",
        title: "Catering",
        subtitle: "Events & Corporate",
        desc: "Planning an event? Let Cravings handle the food. We offer comprehensive catering services tailored to your specific needs. Visit cravings-catering.com to learn more.",
        icon: "🎉"
    }
];



export default function Audience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Profile Pillar Animation
        gsap.from(".profile-pillar", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".profiles-container",
                start: "top 80%",
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="audience"
            className="relative z-40 w-full bg-neutral-50 text-neutral-900 overflow-hidden font-sans border-t border-neutral-200/50 pb-32"
        >
            {/* BACKGROUND VEIL (Light Theme) */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-20">
                <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-brand-100/40 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand-50/40 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_delay-2s]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-32 md:pt-48 flex flex-col gap-32">

                {/* --- TOP HALF: THE AUDIENCE (REDESIGNED PREMIUM PILLARS) --- */}
                <div className="flex flex-col gap-16">

                    {/* Header Center Aligned */}
                    <div className="w-full text-center flex flex-col items-center">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <span className="w-12 h-px bg-brand-500"></span>
                            <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">Menu Experiences</span>
                            <span className="w-12 h-px bg-brand-500"></span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-8 uppercase">
                            How do you <span className="text-transparent text-stroke-1 text-stroke-brand-500/30 [WebkitTextStroke:_1px_#d94a1a33]">Crave?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl font-medium leading-relaxed">
                            Whether you have hours to kill or minutes to spare, we have a dining experience tailored perfectly to your schedule.
                        </p>
                    </div>

                    {/* Highly Designed 3-Column Grid */}
                    <div className="profiles-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
                        {PROFILES.map((profile, i) => (
                            <div
                                key={profile.id}
                                className="profile-pillar group relative flex flex-col h-full rounded-3xl bg-white border border-neutral-100 overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                            >
                                {/* Glowing Top Accent */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Inner Padding */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">

                                    {/* Icon & Subtitle Header */}
                                    <div className="flex items-center justify-between mb-12">
                                        <div className={`w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-3xl shadow-inner text-brand-500 group-hover:scale-110 transition-all duration-500 uppercase`}>
                                            {profile.icon}
                                        </div>
                                        <div className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest font-bold">
                                            0{i + 1} //
                                        </div>
                                    </div>

                                    {/* Titles */}
                                    <div className={`text-brand-500 font-mono text-sm tracking-widest uppercase mb-3 font-semibold group-hover:text-brand-600 transition-colors`}>
                                        Archetype: {profile.subtitle}
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-6 tracking-tight">
                                        {profile.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-600 leading-relaxed text-base font-medium flex-grow mb-8 group-hover:text-neutral-900 transition-colors">
                                        {profile.desc}
                                    </p>

                                    {/* Footer Action */}
                                    <div className="pt-6 border-t border-neutral-100 flex justify-between items-center w-full mt-auto">
                                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-900 transition-colors">Explore Menu</span>
                                        <div className={`w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-brand-500 group-hover:border-brand-500 transition-all duration-300 group-hover:rotate-[-45deg]`}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>

                                </div>

                                {/* Hover background glow */}
                                <div className={`absolute bottom-0 right-0 w-64 h-64 bg-brand-50/20 rounded-full blur-[80px] -z-10 translate-x-1/2 translate-y-1/2 group-hover:bg-brand-50 transition-colors duration-700`}></div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
