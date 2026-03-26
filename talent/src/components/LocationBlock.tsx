"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationBlock() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".location-content", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        gsap.from(".location-map", {
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-neutral-50 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Content Side */}
                <div className="location-content flex flex-col items-start">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <span className="w-12 h-1 bg-brand-red"></span>
                        <span className="text-sm tracking-[0.2em] font-bold text-brand-red uppercase">Find Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                        Your Gateway to a Great Journey
                    </h2>

                    <div className="bg-white w-full p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] mb-8">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center shadow-sm text-brand-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Addis Ababa Bole International Airport</h3>
                                <p className="text-neutral-600 leading-relaxed font-medium">Inside the International Departure Terminal.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center shadow-sm text-brand-500 shrink-0">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">Opening Hours</h3>
                                <p className="text-neutral-600 leading-relaxed font-medium">Open 24/7 to serve travelers on every flight.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-neutral-400 italic">
                        "Stop by before your flight for a freshly prepared meal and a comfortable seat."
                    </p>
                </div>

                {/* Map/Image Side */}
                <div className="location-map relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                    {/* Placeholder for map or image of the airport exterior/restaurant location */}
                    <img
                        src="https://images.unsplash.com/photo-1542289139-4467c69998ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Airport Terminal Location"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent"></div>

                    {/* Simulated Map Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="bg-brand-500 text-white py-2 px-6 rounded-full font-bold shadow-xl mb-4 whitespace-nowrap animate-bounce">
                            We are here!
                        </div>
                        <div className="w-6 h-6 bg-brand-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
