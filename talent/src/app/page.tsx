import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Discovery from "@/components/Discovery";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative bg-neutral-50 w-full min-h-screen">
      <SmoothScroll />
      <Header />
      <Hero />
      <Discovery />
      <About />
      <Audience />
      <HowItWorks />
      <Programs />
      <WhyItMatters />
      <Footer />
    </main>
  );
}
