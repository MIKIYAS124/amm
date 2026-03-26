"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);

    useGSAP(
        () => {
            // Enhanced Typewriter word-by-word reveal (McLaren/Creative style)
            const typeWords = gsap.utils.toArray(".type-word");
            gsap.fromTo(typeWords,
                {
                    opacity: 0,
                    y: 60,
                    scale: 1.2,
                    rotationX: -60,
                    transformOrigin: "bottom center",
                    filter: "blur(15px)"
                },
                {
                    scrollTrigger: {
                        trigger: ".desc-section",
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: 1,
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    filter: "blur(0px)",
                    stagger: 0.1,
                    ease: "back.out(1.5)"
                }
            );

        },
        { scope: container }
    );

    return (
        <section ref={container} id="about" className="w-full relative z-20 bg-neutral-50 text-neutral-900 font-sans overflow-hidden border-t border-neutral-200/50">

            {/* CREATIVE DESCRIPTION SECTION (McLAREN STYLE TYPEWRITER) */}
            <div className="desc-section relative min-h-screen py-32 px-4 md:px-12 w-full flex items-center justify-center overflow-hidden bg-neutral-50">

                <div className="relative w-full max-w-[90vw] mx-auto flex flex-col items-center justify-center font-sans">
                    <h3 className="text-[7vw] lg:text-[5vw] font-black leading-[0.9] text-center text-neutral-800 uppercase tracking-tighter">
                        <span className="type-word inline-block mr-[2vw]">At</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">Cravings</span>
                        <span className="type-word inline-block mr-[2vw]">Restaurant,</span>
                        <span className="type-word inline-block mr-[2vw]">we</span>
                        <span className="type-word inline-block mr-[2vw]">offer</span>
                        <br />
                        <span className="type-word inline-block mr-[2vw]">more</span>
                        <span className="type-word inline-block mr-[2vw]">than</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">food;</span>
                        <br />
                        <span className="type-word inline-block mr-[2vw]">we</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">create</span>
                        <span className="type-word inline-block mr-[2vw]">a</span>
                        <span className="type-word inline-block mr-[2vw]">moment</span>
                        <span className="type-word inline-block mr-[2vw]">of</span>
                        <br />
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">comfort</span>
                        <span className="type-word inline-block mr-[2vw]">and</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">delight</span>
                        <br />
                        <span className="type-word inline-block mr-[2vw]">before</span>
                        <span className="type-word inline-block mr-[2vw]">your</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">journey</span>
                        <span className="type-word inline-block">begins.</span>
                        <br />
                        <span className="type-word inline-block text-transparent text-stroke-1 text-stroke-brand-500/30 mr-[2vw] [WebkitTextStroke:_2px_#d94a1a33] mt-8">Good Food.</span>
                        <span className="type-word inline-block text-brand-500 mr-[2vw]">Comfortable Seating.</span>
                        <span className="type-word inline-block text-transparent text-stroke-1 text-stroke-brand-500/30 [WebkitTextStroke:_2px_#d94a1a33]">Smooth Service.</span>
                    </h3>
                </div>
            </div>

        </section>
    );
}
