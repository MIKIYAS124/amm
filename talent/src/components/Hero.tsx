"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGES = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
        alt: "Cravings Restaurant Dining Area",
        label: "Atmosphere"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1887&auto=format&fit=crop",
        alt: "Signature Burger",
        label: "Dine-In"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1541592102775-7b1f3c3756d7?q=80&w=1964&auto=format&fit=crop",
        alt: "Fresh Salad",
        label: "Fresh"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1887&auto=format&fit=crop",
        alt: "Grab and Go Sandwich",
        label: "Grab & Go"
    }
];

export default function Hero() {
    const container = useRef(null);
    const textRef = useRef(null);
    const galleryRef = useRef(null);
    const bottomLabelLeft = useRef(null);
    const bottomLabelRight = useRef(null);

    const [activeId, setActiveId] = useState(1);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // Intro Animation
            tl.from(container.current, { autoAlpha: 0, duration: 0.5 })
                .from(textRef.current, { x: -50, opacity: 0, duration: 1, ease: "power3.out" })
                .from(galleryRef.current, { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
                .from([bottomLabelLeft.current, bottomLabelRight.current], { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");
        },
        { scope: container }
    );

    return (
        <section ref={container} className="relative min-h-screen w-full overflow-hidden bg-neutral-50 text-neutral-900 mt-20 md:mt-0">
            {/* Background SVG */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Image
                    src="/coolbackgrounds-topography-micron.svg"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Main Grid Layout */}
            <div className="relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-8 pt-24 pb-12">

                {/* LEFT COLUMN: TEXT (Span 5) */}
                <div ref={textRef} className="order-1 col-span-1 md:col-span-5 flex flex-col justify-center mb-8 md:mb-0 z-20 pointer-events-none">
                    <div className="bg-white/80 backdrop-blur-md text-neutral-900 p-6 md:p-12 shadow-[0_10px_40px_rgba(217,74,26,0.1)] pointer-events-auto border border-brand-200/50 rounded-2xl">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-4 md:mb-6 uppercase text-neutral-900">
                            Welcome <br /> To <br /> Cravings
                        </h1>
                        <p className="text-sm md:text-lg font-medium text-neutral-600 max-w-sm leading-relaxed mb-6">
                            Located in the International Departure Terminal of Addis Ababa Bole International Airport, Cravings is a convenient dining spot for travelers looking for quality food before their flight.
                        </p>
                        <div className="flex items-center gap-3 text-brand-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                            Open 24/7
                        </div>
                        <div className="mt-8 h-1 w-24 bg-brand-500"></div>
                    </div>
                </div>

                {/* RIGHT COLUMN: NESTED ACCORDION GALLERY (Span 7) */}
                <div ref={galleryRef} className="order-2 col-span-1 md:col-span-7 flex flex-col md:flex-row gap-4 h-[60vh] md:h-[75vh]">

                    {/* 1. Main Feature Image (Left side of gallery) */}
                    <div
                        className={`relative border border-neutral-200 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${activeId === 1 ? 'md:flex-[4] flex-[3]' : 'md:flex-[2] flex-[1]'}
                    ${activeId === 1 ? 'grayscale-0' : 'grayscale hover:grayscale-0'}
                `}
                        onMouseEnter={() => setActiveId(1)}
                        onClick={() => setActiveId(1)}
                    >
                        <div className="absolute inset-0 bg-neutral-900/5 hover:bg-transparent transition-colors z-10" />
                        <Image
                            src={HERO_IMAGES[0].src}
                            alt={HERO_IMAGES[0].alt}
                            fill
                            className="object-cover transition-transform duration-1000"
                            style={{ transform: activeId === 1 ? 'scale(1.05)' : 'scale(1)' }}
                        />
                        <div className={`absolute bottom-4 right-4 bg-brand-500 text-white px-3 py-1 font-bold text-xs tracking-widest uppercase transition-opacity duration-300 z-20 rounded shadow-md ${activeId === 1 ? 'opacity-100' : 'opacity-0'}`}>
                            {HERO_IMAGES[0].label}
                        </div>
                    </div>

                    {/* 2. Image Strip (Right side of gallery) */}
                    <div className={`flex flex-col md:flex-row gap-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === 1 ? 'md:flex-[3] flex-[1]' : 'md:flex-[5] flex-[3]'}`}>
                        {HERO_IMAGES.slice(1).map((img) => (
                            <div
                                key={img.id}
                                className={`relative border border-neutral-200 rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                            ${activeId === img.id ? 'flex-[4] grayscale-0' : 'flex-[1] grayscale hover:grayscale-0'}
                        `}
                                onMouseEnter={() => setActiveId(img.id)}
                                onClick={() => setActiveId(img.id)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000"
                                    style={{ transform: activeId === img.id ? 'scale(1.05)' : 'scale(1)' }}
                                />
                                <div className={`absolute bottom-4 right-4 bg-brand-500 text-white px-3 py-1 font-bold text-xs tracking-widest uppercase transition-opacity duration-300 z-20 rounded shadow-md ${activeId === img.id ? 'opacity-100' : 'opacity-0'}`}>
                                    {img.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* BOTTOM LABELS */}
                <div ref={bottomLabelLeft} className="absolute bottom-8 left-8 bg-brand-500 text-white px-6 py-2 rounded-full font-bold tracking-widest text-sm hidden md:block shadow-lg">
                    CRAVINGS
                </div>
                <div ref={bottomLabelRight} className="absolute bottom-8 right-8 bg-brand-500 text-white px-6 py-2 rounded-full font-bold tracking-widest text-sm hidden md:block shadow-lg">
                    RESTAURANT
                </div>

            </div>
        </section>
    );
}
