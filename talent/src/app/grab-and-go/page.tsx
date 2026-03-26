"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const GRAB_GO_CATEGORIES = [
    {
        title: "Fresh Sandwiches & Wraps",
        items: [
            { name: "Smoked Turkey & Swiss Wrap", desc: "With crisp lettuce and honey mustard", price: "$9" },
            { name: "Roast Beef Baguette", desc: "Slow-roasted beef, horseradish mayo, arugula", price: "$11" },
            { name: "Hummus & Roasted Veggie Wrap", desc: "Vegan friendly, with sun-dried tomatoes", price: "$8" }
        ]
    },
    {
        title: "Salads & Bowls",
        items: [
            { name: "Classic Caesar Salad", desc: "Romaine, parmesan, croutons, optional chicken", price: "$10" },
            { name: "Quinoa Power Bowl", desc: "Mixed greens, roasted sweet potato, avocado", price: "$12" }
        ]
    },
    {
        title: "Pastries & Coffee",
        items: [
            { name: "Fresh Butter Croissant", desc: "Baked fresh daily", price: "$4" },
            { name: "Chocolate Muffin", desc: "Rich and decadent", price: "$4.5" },
            { name: "Artisan Espresso / Cappuccino", desc: "Premium Ethiopian blend", price: "$5" }
        ]
    }
];

export default function GrabAndGoMenu() {
    return (
        <main className="relative bg-neutral-50 w-full min-h-screen font-sans text-neutral-900">
            <SmoothScroll />
            <Header />

            {/* Menu Header */}
            <section className="relative pt-48 pb-24 px-4 md:px-12 w-full flex flex-col items-center justify-center text-center">
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <span className="w-12 h-px bg-brand-500"></span>
                        <span className="text-sm font-mono tracking-[0.2em] uppercase text-brand-500 font-bold">For the Rushed Traveler</span>
                        <span className="w-12 h-px bg-brand-500"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-[0.9] mb-8 uppercase">
                        GRAB & GO <span className="text-transparent text-stroke-1 text-stroke-neutral-300">MENU.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl">
                        Short on time? Pick up a quick, high-quality meal or a hot coffee on your way to the gate. Fast, fresh, and ready for departure.
                    </p>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-12 pb-32 flex flex-col gap-24">
                {GRAB_GO_CATEGORIES.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                        <h2 className="text-3xl font-black text-brand-500 mb-12 pb-4 border-b border-neutral-200">{category.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {category.items.map((item, i) => (
                                <div key={i} className="flex flex-col group bg-white p-6 rounded-2xl border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-colors">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand-500 transition-colors">{item.name}</h3>
                                        <span className="text-xl font-mono font-bold text-brand-500 ml-4">{item.price}</span>
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
