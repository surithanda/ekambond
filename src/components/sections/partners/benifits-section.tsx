import React from "react";
import BenefitsGrid from "./benefits/benefits-grid";
import { benefits } from "@/data/partners/benefits-section";
import SectionHeader from "./section-header";
import { Handshake } from "lucide-react";

const BenefitsSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent opacity-5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-56 h-56 bg-orange opacity-5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badgeIcon={Handshake}
          badgeText="Partnership Benefits"
          title="    Why Partner"
          highlightText="With Us"
          description="  Transform your business with cutting-edge technology and support"
        />
        <BenefitsGrid benefits={benefits} />
      </div>
    </section>
  );
};

export default BenefitsSection;
