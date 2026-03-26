"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Discovery() {
    const container = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // "DISCOVER" Portal Effect
            // Scales up massively to "fly through" the text
            tl.to(".word-1", { scale: 50, opacity: 0, duration: 1, ease: "power2.inOut" });
        },
        { scope: container }
    );

    return (
        <section ref={container} id="discovery" className="h-[200vh] relative bg-neutral-50 text-neutral-900 font-sans overflow-hidden">

            {/* BACKGROUND VEIL - Light Mode */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-100/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[150px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(217,74,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,74,26,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-50"></div>
            </div>

            {/* STICKY CONTAINER */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center z-10 overflow-hidden px-4">

                {/* THE PORTAL TEXT */}
                <h2 className="word-1 text-[18vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-600 via-brand-500 to-orange-400 leading-none tracking-tighter select-none origin-center uppercase">
                    CRAVINGS
                </h2>

            </div>

        </section>
    );
}
