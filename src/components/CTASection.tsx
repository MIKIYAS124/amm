"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ScrambleText({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(text.replace(/[A-Z]/g, " "));

  useEffect(() => {
    if (!isInView) return;
    
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " ") return " ";
            return LETTERS[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref}>{displayText}</span>;
}

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-[#dce0db] text-sl-navy min-h-[90vh] flex items-center justify-center p-6 md:p-12 overflow-hidden selection:bg-sl-navy selection:text-[#dce0db]">
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Central Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-2 h-2 rounded-full bg-sl-navy mb-8 animate-pulse"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-sm font-mono text-sl-navy/60 tracking-[0.4em] uppercase mb-8"
        >
          // Ready to Transform //
        </motion.p>
        
        <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter mb-10 max-w-5xl text-transparent bg-clip-text bg-gradient-to-br from-sl-navy via-sl-navy/80 to-sl-navy/30">
          <ScrambleText text="SECURE YOUR FUTURE" />
        </h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sl-navy/60 text-base md:text-xl max-w-3xl mb-16 leading-relaxed tracking-tight"
        >
          Ready to transform your AML compliance infrastructure? Connect with our specialists to design an AI-driven solution tailored to your institution.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-lg mx-auto"
        >
          <button className="flex-1 px-8 py-6 bg-sl-navy text-[#dce0db] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-black transition-all duration-500 shadow-xl rounded-sm">
            Request a Demo
          </button>
          <button className="flex-1 px-8 py-6 bg-transparent border border-sl-navy/20 text-sl-navy font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-white hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-xl rounded-sm">
            <span className="relative z-10 transition-colors duration-500">Contact Sales</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
