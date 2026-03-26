"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Assessment & Customization", desc: "Aligning the system to your specific business rules. We audit your risk landscape and configure every module to your regulatory environment." },
  { num: "02", title: "Gap Analysis & Optimization", desc: "Identifying and bridging technical or compliance gaps. We build the architectural blueprint for a unified, audit-ready infrastructure." },
  { num: "03", title: "User Acceptance Testing", desc: "Ensuring the system performs under real-world scenarios. Sandboxed testing with your data, your rules, your edge cases — validated end to end." },
  { num: "04", title: "Continuous Monitoring", desc: "Post-launch optimization to adapt to new threats. Real-time tuning of AML rules, threshold calibration, and false-positive reduction." },
  { num: "05", title: "Documentation & Manuals", desc: "Full knowledge transfer for your internal teams. Operational playbooks, technical specifications, and regulatory-ready report templates." },
  { num: "06", title: "24/7 Technical Support", desc: "Round-the-clock expert assistance for peace of mind. Dedicated account managers and escalation paths for critical compliance events." },
];

export default function LifecycleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="operations" ref={sectionRef} className="relative bg-[#dce0db] overflow-hidden">
      <div className="h-screen flex items-center">
        <div 
          ref={trackRef}
          className="flex gap-10 md:gap-16 pl-6 md:pl-12 lg:pl-24 pr-[15vw] w-max items-center"
        >
          {/* Section Header — first element in track, scrolls away */}
          <div className="flex-shrink-0 w-[85vw] md:w-[500px] flex flex-col justify-center pr-8">
            <p className="text-[10px] text-sl-navy/50 font-bold tracking-[0.2em] uppercase mb-6">
              Operations & Support
            </p>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.9] text-sl-navy">
              Deployment<br className="hidden md:block"/> Pipeline.
            </h2>
          </div>

          {/* Step Cards — stair effect: each card steps down */}
          {steps.map((step, i) => (
            <div 
              key={step.num}
              style={{ marginTop: `${i * 2.5}rem` }}
              className="relative flex-shrink-0 w-[85vw] md:w-[550px] h-[420px] md:h-[500px] bg-white/30 backdrop-blur-xl border border-sl-navy/10 rounded-2xl p-8 md:p-12 flex flex-col justify-between group hover:-translate-y-4 hover:shadow-2xl hover:shadow-sl-navy/5 transition-all duration-700 cursor-default shadow-lg"
            >
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-sl-navy/50 mb-6 border border-sl-navy/10 py-2 px-4 rounded-full group-hover:border-sl-navy/30 group-hover:text-sl-navy transition-colors w-max">
                  Phase {step.num}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-sl-navy tracking-tight leading-tight">{step.title}</h3>
              </div>
              
              <div className="relative z-10 mt-auto">
                <div className="w-full h-[1px] bg-sl-navy/10 mb-6 group-hover:w-1/2 group-hover:bg-sl-navy transition-all duration-700 ease-out"></div>
                <p className="text-sl-navy/60 text-sm md:text-base leading-relaxed max-w-sm group-hover:text-sl-navy/90 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
