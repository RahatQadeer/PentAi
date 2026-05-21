import { Header } from "@/components/Header";
import { AngularGradient } from "@/components/sections/AngularGradient";
import { Hero } from "@/components/sections/Hero";
import { Supporters } from "@/components/sections/Supporters";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FeaturesShowcase } from "@/components/sections/FeaturesShowcase";
import { FeaturesTabs } from "@/components/sections/FeaturesTabs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-[1440px] overflow-x-hidden bg-bg-subtle">
      <div className="hero-supporters-bridge relative w-full">
        {/* Same gradient stack as web — covers hero + supporters (not clipped to hero only) */}
        <AngularGradient priority />

        <div className="mobile-hero-panel relative w-full lg:contents">
          <div className="hero-content-layer">
            <div className="hero-bg-frame mx-auto flex w-full flex-col items-center">
              <Header />
            </div>
            <Hero />
          </div>
        </div>

        <Supporters />
      </div>

      <DashboardSection />
      <StatsSection />
      <SecuritySection />
      <FeaturesShowcase />
      <FeaturesTabs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
