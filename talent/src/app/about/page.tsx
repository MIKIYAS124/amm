"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import HowItWorks from "@/components/HowItWorks"; // Used for Our Story & Awards
import WhyItMatters from "@/components/WhyItMatters"; // Used for Full Testimonials

export default function AboutUs() {
    return (
        <main className="relative bg-neutral-50 w-full min-h-screen font-sans text-neutral-900 overflow-x-hidden">
            <SmoothScroll />
            <Header />

            {/* About Header */}
            <section className="relative pt-48 pb-24 px-4 md:px-12 w-full flex flex-col items-center justify-center text-center">
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-brand-500"></span>
                        <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">The Crave You Deserve</span>
                        <span className="w-12 h-px bg-brand-500"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-8 uppercase">
                        ABOUT <span className="text-transparent text-stroke-1 text-stroke-neutral-300">US.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl">
                        At Cravings Restaurant, we offer more than food; we create a moment of comfort and delight before your journey begins.
                    </p>
                </div>
            </section>

            {/* Reuse the Story and Awards component */}
            <HowItWorks />

            {/* Reuse the Testimonials component */}
            <div className="pt-32 pb-32 bg-neutral-50">
                <WhyItMatters />
            </div>

            <Footer />
        </main>
    );
}
