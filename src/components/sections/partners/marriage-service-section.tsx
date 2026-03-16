import React from "react";
import { Building2} from "lucide-react";
import ServiceCard from "@/components/cards/partners/service-card";
import AnimatedBackground from "./animated-background";
import SectionHeader from "./section-header";
import "@/styles/partners/marriage-burrea.css";
import { services } from "@/data/partners/marriage-burrea";

const MarriageServicesSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-primary overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionHeader
          badgeIcon={Building2}
          badgeText=" Professional Services"
          title="  Marriage Bureaus &"
          highlightText="    Matchmakers"
          description="  Professional matrimony services with decades of expertise"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarriageServicesSection;
