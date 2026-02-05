"use client";
import { useState } from "react";
import PlanCards from "@/components/sections/pricing/pricing-cards";
import FAQSection from "@/components/sections/pricing/faq-section";
import HeroSection from "@/components/sections/pricing/hero-section";

export default function PricingClient() {
  const [selectedPlan, setSelectedPlan] = useState("product");

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <HeroSection />
      </div>
      <PlanCards selectedPlan={selectedPlan} onPlanSelect={handlePlanSelect} />
      <FAQSection />
    </div>
  );
}