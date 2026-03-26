import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-neutral-900 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/50 transition-all shadow-sm">
            <div className="text-xl font-black tracking-widest text-brand-500">
                <Link href="/">CRAVINGS</Link>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-bold tracking-wide uppercase">
                <Link href="#about" className="hover:text-brand-500 transition-colors">About Us</Link>
                <Link href="/#programs" className="hover:text-brand-500 transition-colors">Signature Dishes</Link>
                <Link href="/#how-it-works" className="hover:text-brand-500 transition-colors">Our Story</Link>
                <Link href="/#audience" className="hover:text-brand-500 transition-colors">Menu Experiences</Link>
            </nav>
            <div className="w-8 h-8 bg-neutral-900 rounded-full hidden md:block"></div>
        </header>
    );
}
