"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Globe2, Search, Clock, GitBranch, Crosshair, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const dataCollection = {
  title: "Data Collection & Integration",
  subtitle: "Comprehensive Ingestion",
  desc: "We specialize in aggregating critical data across various sectors to create a comprehensive risk profile.",
  features: [
    {
      title: "Financial Institutions",
      desc: "Real-time feeds from banks, payment processors, and digital asset platforms for holistic monitoring.",
    },
    {
      title: "CBTR — Cross-Border Transaction Reporting",
      desc: "Specialized monitoring for international fund transfers to ensure global compliance across every jurisdiction.",
    },
  ],
};

const investigationTools = [
  { icon: Layers, title: "Batch & Real-Time Processing", desc: "Flexibility to analyze historical data or monitor live transactions as they occur." },
  { icon: Search, title: "Link Analysis", desc: "Visualizing relationships between entities to uncover hidden networks and shell company structures." },
  { icon: Clock, title: "Timeline Analysis", desc: "Visualize the evolution of a customer's financial behavior over time to identify rapid escalations in transaction velocity or value." },
  { icon: GitBranch, title: "Rule-Based & Fusion Engines", desc: "Combining deterministic logic with multi-source data fusion for high-accuracy alerts." },
  { icon: Crosshair, title: "POI Tracking", desc: "Dedicated monitoring for Persons of Interest — high-risk individuals and entities under continuous surveillance." },
];

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sol-reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });

      // Staggered tool cards
      gsap.utils.toArray<HTMLElement>(".tool-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="relative bg-sl-navy text-white overflow-hidden selection:bg-white/20 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">

        {/* Section Header */}
        <div className="sol-reveal mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-white/30"></span>
              <span className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">Solutions & Services</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-white">
              Intelligence<br />Architecture.
            </h2>
          </div>
          <div className="max-w-sm text-white/40 text-base md:text-lg leading-relaxed pb-4 text-left">
            From data ingestion to deep forensic investigation — every layer of our platform is engineered for precision.
          </div>
        </div>

        {/* Data Collection & Integration */}
        <div className="sol-reveal mb-32 md:mb-48">
          <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="p-8 md:p-14 bg-white/[0.02]">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="lg:w-2/5 shrink-0">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">{dataCollection.subtitle}</p>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">{dataCollection.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{dataCollection.desc}</p>
                </div>
                <div className="lg:w-3/5 space-y-6">
                  {dataCollection.features.map((feat) => (
                    <div key={feat.title} className="group flex items-start gap-5 p-6 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                      <Globe2 size={20} className="text-white/30 mt-1 shrink-0 group-hover:text-white/60 transition-colors" />
                      <div>
                        <h4 className="text-lg font-bold text-white/80 mb-2 group-hover:text-white transition-colors">{feat.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Investigation Toolkit */}
        <div className="sol-reveal mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/30"></span>
            <span className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">Advanced Investigation Toolkit</span>
          </div>
          <h3 className="font-serif text-4xl md:text-5xl tracking-tighter text-white mb-6 max-w-2xl">
            Deep-Dive Forensics &<br />Proactive Monitoring.
          </h3>
          <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
            Our suite of tools is designed for deep-dive forensics and proactive monitoring — every tool built for investigators who need answers fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investigationTools.map((tool, i) => (
            <div
              key={tool.title}
              className="tool-card group relative border border-white/[0.06] rounded-2xl p-7 md:p-9 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 cursor-default"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.06] group-hover:bg-white/[0.1] transition-colors duration-500">
                  <tool.icon size={20} strokeWidth={1.5} className="text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
                <span className="font-mono text-[10px] font-bold text-white/20 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h4 className="text-xl font-bold text-white/80 mb-3 group-hover:text-white transition-colors tracking-tight">{tool.title}</h4>
              <p className="text-white/35 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-500">{tool.desc}</p>
              <ArrowRight size={16} className="mt-5 text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
