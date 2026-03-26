"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const launderingSteps = [
  { phase: "Placement", desc: "Illicit funds are introduced into the financial system through deposits, cash-intensive businesses, or smurfing techniques." },
  { phase: "Layering", desc: "Complex layers of financial transactions are created to distance funds from their source — shell companies, wire transfers, trade-based schemes." },
  { phase: "Integration", desc: "Cleaned money re-enters the legitimate economy through investments, luxury assets, or business fronts — virtually untraceable." },
];

export default function WhatIsAMLSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".aml-reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-sl-navy text-white overflow-hidden selection:bg-white/20 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">

        {/* Section Header */}
        <div className="aml-reveal mb-24 md:mb-32">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/30"></span>
            <span className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">Understanding the Threat</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-white max-w-4xl">
            What is Money<br />Laundering?
          </h2>
        </div>

        {/* Explanation */}
        <div className="aml-reveal grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-48">
          <div>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed">
              Money laundering is the illegal process of concealing the origins of money obtained through criminal activities — such as drug trafficking, corruption, tax evasion, or fraud. The goal is to integrate the funds into the legitimate financial system so they can be used freely.
            </p>
          </div>
          <div className="flex items-start">
            <p className="text-white/40 text-base leading-relaxed border-l border-white/10 pl-8">
              Every year, an estimated $800 billion to $2 trillion is laundered globally — representing 2–5% of world GDP. The consequences ripple through economies, destabilize governments, and fund further criminal enterprise.
            </p>
          </div>
        </div>

        {/* Money Laundering Process — 3 Phases */}
        <div className="aml-reveal mb-32 md:mb-48">
          <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase mb-12">The Laundering Process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {launderingSteps.map((step, i) => (
              <div
                key={step.phase}
                className="relative p-8 md:p-10 group"
              >
                <div className="relative z-10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">Phase {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-4">{step.phase}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AML Definition Block */}
        <div className="aml-reveal relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/3 shrink-0">
              <span className="font-mono text-6xl md:text-8xl font-black text-white block leading-none mb-4">AML</span>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Anti-Money Laundering</p>
            </div>
            <div className="lg:w-2/3">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                AML — Anti-Money Laundering — refers to the laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                These frameworks require financial institutions to implement robust Know Your Customer (KYC) checks, transaction monitoring, and suspicious activity reporting. Our platform automates and enhances every layer of this defense.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
