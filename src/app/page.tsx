import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsAMLSection from "@/components/WhatIsAMLSection";
import SecuritySection from "@/components/SecuritySection";
import SolutionsSection from "@/components/SolutionsSection";
import LifecycleSection from "@/components/LifecycleSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <WhatIsAMLSection />
        <SecuritySection />
        <SolutionsSection />
        <LifecycleSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
