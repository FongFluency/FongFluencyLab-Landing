import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />

      {/* Footer */}
      <div className="py-4 text-center bg-gray-800 text-white">
        © {new Date().getFullYear()} FongFluency. All rights reserved.
      </div>
    </div>
  );
}
