"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Image from "next/image";

const MENU_CATEGORIES = [
    {
        title: "Breakfast",
        items: [
            { name: "Classic English Breakfast", desc: "Eggs, sausage, baked beans, grilled tomato, hash browns", price: "$14" },
            { name: "Ethiopian Ful Medames", desc: "Fava beans with cumin, olive oil, fresh chili, and bread", price: "$10" },
            { name: "Avocado Toast", desc: "Smashed avocado, poached eggs, chili flakes on sourdough", price: "$12" }
        ]
    },
    {
        title: "Signature Burgers",
        items: [
            { name: "Cravings Burger", desc: "Juicy beef patty, melted cheddar, house sauce", price: "$16" },
            { name: "Spicy Chicken Burger", desc: "Crispy chicken breast, spicy mayo, pickles", price: "$15" },
            { name: "Beyond Veggie Burger", desc: "Plant-based patty, vegan cheese, fresh greens", price: "$15" }
        ]
    },
    {
        title: "Main Courses",
        items: [
            { name: "Grilled Salmon", desc: "With asparagus and lemon butter glaze", price: "$24" },
            { name: "Traditional Beyaynetu", desc: "Assorted Ethiopian vegetarian dishes on injera", price: "$18" },
            { name: "Pasta Carbonara", desc: "Creamy sauce, crispy pancetta, parmesan", price: "$19" }
        ]
    }
];

export default function DineMenu() {
    return (
        <main className="relative bg-neutral-50 w-full min-h-screen font-sans text-neutral-900">
            <SmoothScroll />
            <Header />

            {/* Menu Header */}
            <section className="relative pt-48 pb-24 px-4 md:px-12 w-full flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-20">
                    <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-brand-500"></span>
                        <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">The Full Experience</span>
                        <span className="w-12 h-px bg-brand-500"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-8 uppercase">
                        DINE-IN <span className="text-transparent text-stroke-1 text-stroke-neutral-300">MENU.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl">
                        Sit back, relax, and let us serve you. Discover our range of freshly prepared hot meals, signature dishes, and beverages.
                    </p>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-12 pb-32 flex flex-col gap-24">
                {MENU_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                        <h2 className="text-3xl font-black text-brand-500 mb-12 pb-4 border-b border-neutral-200">{category.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {category.items.map((item, i) => (
                                <div key={i} className="flex flex-col group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors">{item.name}</h3>
                                        <div className="w-full border-b border-dashed border-neutral-200 mx-4 flex-grow relative top-[-6px]"></div>
                                        <span className="text-xl font-mono font-bold text-neutral-900">{item.price}</span>
                                    </div>
                                    <p className="text-neutral-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </main>
    );
}
