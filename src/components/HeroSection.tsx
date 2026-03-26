"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100svh] bg-[#dce0db] text-sl-navy overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/hero1.jpg"
          alt="AML intelligence network"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-[#dce0db]/20" />
      </div>

      {/* Bottom Text Overlays */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-8 pb-8 flex flex-col md:flex-row justify-between items-end">
        {/* Left Huge Typography */}
        <div className="font-serif leading-[0.8] tracking-tighter z-10 w-full mb-8 md:mb-0">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20vw] md:text-[14vw] lg:text-[12vw] uppercase m-0 p-0 block"
          >
            FINANCIAL
          </motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20vw] md:text-[14vw] lg:text-[12vw] uppercase m-0 p-0 block ml-0 md:ml-12"
          >
            CRIME
          </motion.h1>
        </div>

        {/* Right Details Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-right font-sans tracking-tight leading-[1] text-sl-navy z-20 shrink-0 mb-4 md:mb-8"
        >
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-1 md:mb-2">Detecting Risk</p>
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">Preventing Fraud</p>
        </motion.div>
      </div>
    </section>
  );
}
