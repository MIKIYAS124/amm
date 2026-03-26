import React from "react";

interface SectionProps {
    id: string;
    title: string;
    className?: string;
}

export default function SectionPlaceholder({ id, title, className = "" }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen w-full flex items-center justify-center border-t border-gray-800 ${className}`}>
            <h2 className="text-6xl font-bold text-gray-500 uppercase tracking-tighter opacity-30">
                {title}
            </h2>
        </section>
    );
}
