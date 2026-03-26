"use client";

import { Globe, ShieldAlert, Database, Zap } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  { id: "ch-1", number: "01", name: "Complex Regulatory Environment", subtitle: "Global Compliance", icon: Globe, desc: "Navigating the intricate landscape of global compliance across jurisdictions, each with evolving mandates and reporting obligations.", stats: ["Multi-Jurisdiction Coverage", "Automated Regulatory Updates", "Cross-Border Harmonization"] },
  { id: "ch-2", number: "02", name: "Rising Sophistication", subtitle: "Threat Evolution", icon: ShieldAlert, desc: "Countering increasingly advanced money laundering tactics — from layered shell companies to crypto-mixing services and trade-based schemes.", stats: ["AI Pattern Detection", "Behavioral Analytics", "Emerging Typology Mapping"] },
  { id: "ch-3", number: "03", name: "Data Overload", subtitle: "Scale Challenge", icon: Database, desc: "Managing massive global transaction volumes while dramatically reducing false positives that drain investigator resources.", stats: ["Billion+ Transactions/Day", "95% False Positive Reduction", "Real-Time Scoring"] },
];

const bigDataEdge = [
  { title: "Massive Scale Ingestion", desc: "Designed to handle global transaction volumes and the data overload that traditional systems fail to manage. Ingest, normalize, and enrich billions of records.", icon: Database },
  { title: "Real-Time Processing", desc: "Instantaneous alerts and insights into every movement of capital. Sub-second latency from transaction to risk score.", icon: Zap },
];

export default function SecuritySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftStepsRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky right visual console
      ScrollTrigger.create({
        trigger: leftStepsRef.current,
        start: "top 20%",
        end: "bottom 80%",
        pin: rightVisualRef.current,
        pinSpacing: false,
      });

      // Step-by-step reveal
      const steps = gsap.utils.toArray<HTMLElement>(".sec-step");
      const visualRings = gsap.utils.toArray<HTMLElement>(".sec-ring");

      steps.forEach((step, i) => {
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
                gsap.to(visualRings, { scale: 0.8, opacity: 0.1, duration: 0.5 });
                gsap.to(visualRings[i], { scale: 1.2, opacity: 1, duration: 0.5 });
                gsap.to(containerRef.current, {
                  backgroundColor: i % 2 === 0 ? '#dce0db' : '#d8dcd7',
                  duration: 1,
                });
              },
              onEnterBack: () => {
                gsap.to(visualRings, { scale: 0.8, opacity: 0.1, duration: 0.5 });
                gsap.to(visualRings[i], { scale: 1.2, opacity: 1, duration: 0.5 });
              },
            },
          }
        );
      });

      // Connecting line animation
      gsap.fromTo(".sec-connecting-line",
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: leftStepsRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#dce0db] text-sl-navy overflow-hidden selection:bg-sl-navy selection:text-[#dce0db]"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">

        {/* Header */}
        <div className="w-full mb-32 md:mb-48 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-sl-navy/50"></span>
              <span className="text-[10px] text-sl-navy font-bold tracking-[0.2em] uppercase">About Us</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-sl-navy">
              The Challenge<br />We Solve.
            </h2>
          </div>
          <div className="max-w-sm text-sl-navy/60 text-base md:text-lg leading-relaxed pb-4 text-left">
            Financial crime grows more sophisticated every day. Our AI-driven platform addresses the core obstacles that keep compliance teams awake at night.
          </div>
        </div>

        <div className="flex flex-col lg:flex-row relative gap-16 lg:gap-24">

          {/* Left Side: Scrolling Steps */}
          <div className="w-full lg:w-1/2 relative" ref={leftStepsRef}>

            {/* The Line */}
            <div className="absolute left-6 md:left-10 top-12 bottom-12 w-[1px] bg-sl-navy/10 -z-10">
              <div className="sec-connecting-line w-full bg-sl-navy/50 origin-top"></div>
            </div>

            <div className="flex flex-col gap-32 md:gap-48 relative z-10 py-12">
              {challenges.map((ch) => (
                <div key={ch.id} className="sec-step flex items-start gap-8 md:gap-12 group">

                  {/* Number / Node */}
                  <div className="relative flex-shrink-0 mt-2">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-white/40 backdrop-blur-xl border border-sl-navy/10 shadow-xl flex items-center justify-center font-mono text-xl md:text-3xl font-black text-sl-navy/80 transition-transform duration-500 group-hover:scale-110 group-hover:border-sl-navy/30">
                      {ch.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-1 md:pt-4">
                    <div className="text-sl-navy/50 font-mono text-sm tracking-widest uppercase mb-4 font-bold flex items-center gap-4">
                      // {ch.subtitle}
                      <span className="h-px flex-grow bg-sl-navy/10 max-w-[100px] hidden md:block"></span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-sl-navy mb-6 tracking-tight">
                      {ch.name}
                    </h3>
                    <p className="text-sl-navy/60 text-lg md:text-xl leading-relaxed mb-8">
                      {ch.desc}
                    </p>

                    {/* Stats List */}
                    <ul className="space-y-3">
                      {ch.stats.map((stat: string, j: number) => (
                        <li key={j} className="flex items-center gap-3 text-sl-navy/50 font-mono text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-sl-navy/40 flex-shrink-0"></span>
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
              className="w-full max-w-[600px] aspect-square bg-white/20 backdrop-blur-3xl border border-sl-navy/[0.06] shadow-2xl rounded-[3rem] relative flex items-center justify-center overflow-hidden"
            >
              {/* Inner rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {challenges.map((_: typeof challenges[0], i: number) => (
                  <div
                    key={i}
                    className="sec-ring absolute rounded-full border border-sl-navy/[0.06] backdrop-blur-[2px] transition-all duration-1000 ease-in-out"
                    style={{
                      width: `${100 - (i * 20)}%`,
                      height: `${100 - (i * 20)}%`,
                      borderStyle: i % 2 === 0 ? 'dashed' : 'solid',
                      opacity: 0.1,
                      scale: 0.8,
                    }}
                  ></div>
                ))}
              </div>

              {/* Center — Static heading text */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-12">
                <span className="text-[9px] font-mono text-sl-navy/40 uppercase tracking-[0.3em] font-bold mb-6">AI-Powered</span>
                <h3 className="font-serif text-4xl md:text-5xl tracking-tighter leading-[0.95] text-sl-navy mb-5">
                  The Challenge<br />We Solve.
                </h3>
                <p className="text-sl-navy/45 text-sm leading-relaxed max-w-xs">
                  Tackling regulatory complexity, rising sophistication, and data overload with intelligent automation.
                </p>
              </div>

              {/* Decorative corner brackets */}
              <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-sl-navy/[0.08]"></div>
              <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-sl-navy/[0.08]"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-sl-navy/[0.08]"></div>
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-sl-navy/[0.08]"></div>
            </div>
          </div>

        </div>

        {/* Big Data Edge — below the main challenge steps */}
        <div className="mt-32 md:mt-48">
          <div className="inline-flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-sl-navy/50"></span>
            <span className="text-[10px] text-sl-navy font-bold tracking-[0.2em] uppercase">The Big Data Edge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bigDataEdge.map((item) => (
              <div key={item.title} className="group relative border border-sl-navy/10 rounded-2xl p-8 md:p-12 bg-white/20 backdrop-blur-xl hover:bg-white/40 transition-all duration-700 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-sl-navy/5 border border-sl-navy/10 group-hover:bg-sl-navy/10 transition-colors duration-500">
                    <item.icon size={24} strokeWidth={1.5} className="text-sl-navy/70" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-sl-navy tracking-tight">{item.title}</h3>
                </div>
                <p className="text-sl-navy/55 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
