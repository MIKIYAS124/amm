"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRACKS = [
    {
        id: "01",
        title: "Cravings Burger",
        desc: "Juicy beef patty, melted cheddar, and our secret house sauce.",
        metrics: ["Fresh Ingredients", "House Sauce", "Toasted Bun"]
    },
    {
        id: "02",
        title: "Grilled Salmon",
        desc: "Freshly grilled salmon with asparagus and a lemon butter glaze.",
        metrics: ["Wild Caught", "Lemon Glaze", "Healthy Choice"]
    },
    {
        id: "03",
        title: "Pasta Carbonara",
        desc: "Creamy parmesan sauce, crispy pancetta, and al dente fettuccine.",
        metrics: ["Authentic Recipe", "Crispy Pancetta", "Italian Style"]
    },
    {
        id: "04",
        title: "Traditional Beyaynetu",
        desc: "A colorful assortment of authentic Ethiopian vegetarian dishes.",
        metrics: ["Vegetarian", "Spicy", "Fresh Injera"]
    }
];

export default function Programs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useGSAP(() => {
        const track = trackRef.current;
        const section = sectionRef.current;

        if (isMobile || !track || !section) return;

        const getScrollAmount = () => {
            const trackWidth = track.scrollWidth;
            const viewportWidth = window.innerWidth;
            return trackWidth - viewportWidth;
        };

        const ctx = gsap.context(() => {
            const tween = gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            gsap.utils.toArray(".bg-number").forEach((num: any) => {
                gsap.to(num, {
                    x: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        scrub: 1,
                    }
                });
            });

            return () => {
                tween.kill();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section
            ref={sectionRef}
            id="programs"
            className="relative z-30 w-full min-h-screen lg:h-screen bg-neutral-50 text-neutral-900 overflow-hidden font-sans border-t border-neutral-200/50 flex items-center pt-24 lg:pt-0"
        >
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-20">
                <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-100/20 rounded-full blur-[150px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(217,74,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,74,26,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
            </div>

            <div
                ref={trackRef}
                className={`relative z-10 w-full px-4 lg:px-24 flex flex-col lg:flex-row pb-24 lg:pb-0 ${!isMobile ? 'h-[80%] items-center lg:w-max max-w-none' : 'gap-16'}`}
            >
                {!isMobile && (
                    <div className="absolute top-[45%] left-0 w-[500vw] h-[1px] bg-neutral-200 origin-left"></div>
                )}

                <div className="w-full lg:w-[45vw] flex-shrink-0 flex flex-col justify-center lg:pr-32 relative z-20">
                    <div className="inline-flex items-center gap-4 mb-4 lg:mb-8">
                        <span className="w-12 h-px bg-brand-500"></span>
                        <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">Taste the Excellence</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-black tracking-tighter text-neutral-900 leading-[0.9] mb-4 lg:mb-8">
                        SIGNATURE <br className="hidden lg:block" /> DISHES
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-md">
                        Carefully crafted to bring you the best culinary experience before your flight. From rich local flavors to international classics.
                    </p>
                </div>

                <div className={`flex flex-col lg:flex-row relative z-20 w-fit ${!isMobile ? 'gap-[10vw] items-center' : 'gap-8 w-full'}`}>
                    {TRACKS.map((track, i) => {
                        const isTop = !isMobile && i % 2 === 0;
                        const isBottom = !isMobile && i % 2 !== 0;

                        return (
                            <div
                                key={track.id}
                                className={`
                                    w-full md:w-[80vw] lg:w-[35vw] flex-shrink-0 relative group
                                    ${isTop ? '-translate-y-[15vh]' : ''}
                                    ${isBottom ? 'translate-y-[15vh]' : ''}
                                `}
                            >
                                <div className={`bg-number absolute z-0 text-[35vw] lg:text-[20vw] font-black leading-none text-transparent text-stroke-1 text-stroke-neutral-200 select-none pointer-events-none transition-all duration-700 group-hover:-translate-y-4 lg:group-hover:opacity-70 opacity-20 lg:opacity-50
                                    ${isTop ? 'bottom-0 lg:-bottom-24 right-0 lg:-right-12' : 'top-0 lg:-top-24 left-0 lg:-left-12'}
                                `}>
                                    {track.id}
                                </div>

                                <div className={`relative z-10 w-full p-8 lg:p-12 rounded-2xl bg-white border border-neutral-100 hover:border-brand-300 shadow-xl shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10`}>
                                    <div className="flex flex-col h-full justify-between gap-6 lg:gap-8">
                                        <div>
                                            <div className={`h-1 w-12 bg-brand-500 mb-6 lg:mb-8 rounded-full transition-all duration-500 group-hover:w-24`}></div>
                                            <h3 className={`text-3xl lg:text-4xl font-black tracking-tight mb-4 text-neutral-900 transition-colors duration-300 group-hover:text-brand-500`}>
                                                {track.title}
                                            </h3>
                                            <p className="text-base lg:text-lg text-neutral-600 leading-relaxed font-medium">
                                                {track.desc}
                                            </p>
                                        </div>

                                        <div className="pt-6 lg:pt-8 border-t border-neutral-100">
                                            <div className="flex flex-col gap-3">
                                                {track.metrics.map((metric, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 lg:gap-4">
                                                        <span className={`w-2 h-2 rounded-full bg-brand-300 transition-colors duration-300`}></span>
                                                        <span className="text-xs lg:text-sm font-mono tracking-tight text-neutral-500 uppercase font-bold">
                                                            {metric}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {!isMobile && (
                                    <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-neutral-50 bg-neutral-300 z-30 transition-transform duration-300 group-hover:scale-125
                                        ${isTop ? 'bottom-[-16.5vh]' : 'top-[-16.5vh]'}
                                    `}></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {!isMobile && <div className="hidden lg:block w-[15vw] flex-shrink-0"></div>}
            </div>
        </section>
    );
}
