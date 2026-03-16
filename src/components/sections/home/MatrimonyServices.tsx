"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "../section-header";

const MatrimonyServices = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "White Labeling",
      image: "/images/hero/features-section/Feature-One.png",
      description: "Custom branding solutions for your matrimony platform.",
    },
    {
      id: 2,
      title: "Match Maker Support",
      image: "/images/hero/features-section/features-section-2.png",
      description: "Dedicated support to enhance matchmaking success.",
    },
    {
      id: 3,
      title: "Event Management",
      image: "/images/hero/features-section/features-section-3.png",
      description: "Seamless planning and execution of matrimonial events.",
    },
    {
      id: 4,
      title: "Partners Onboarding",
      image: "/images/hero/features-section/features-section-4.png",
      description: "Streamlined onboarding for business partners.",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F2F4F8 0%, #E8EDF5 50%, #F2F4F8 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor: "#D9A91E",
            animation: "pulse 4s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor: "#1B3A6E",
            animation: "pulse 4s ease-in-out infinite 2s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="End-to-End Support for Modern Matrimony Companies"
          // highlightedText="Modern Matrimony Companies"
          subtitle="Comprehensive solutions to power your matrimony business"
          badgeText="Main Services"
          addLineBreak={true}
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((feature: any, index: any) => {
            const isHovered = hoveredId === feature.id;

            return (
              <div
                key={feature.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                <div
                  className={`relative transition-all duration-500 ${
                    isHovered ? "transform translate-y-[-12px]" : ""
                  }`}
                >
                  <div
                    className="relative h-96 w-full rounded-3xl overflow-hidden mb-6"
                     // Added to handle letterbox padding
                  >
                    {/* Next.js Image Component */}
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ objectFit: "contain" }} // Changed to contain
                      className="rounded-3xl"
                      priority={index === 0}
                    />
                  </div>

                  {/* Title and Description */}
                  <div className="text-center px-2">
                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? "#1B3A6E" : "#111827" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-gray-700 text-base transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-70 transform translate-y-2"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative accent line — gold */}
                  <div
                    className={`mx-auto mt-4 h-1 rounded-full transition-all duration-500 ${
                      isHovered ? "w-20" : "w-0"
                    }`}
                    style={{ backgroundColor: "#D9A91E" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default MatrimonyServices;