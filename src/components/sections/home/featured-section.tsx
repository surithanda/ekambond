"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "../section-header";

const FeaturesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Profile Management",
      description: "Reliable and efficient matchmaking services.",
      image: "/images/hero/services/service-01.png",
    },
    {
      id: 2,
      title: "Background Verification",
      description:
        "Check educational credentials, job offers, letters, and criminal records.",
      image: "/images/hero/services/service-02.png",
    },
    {
      id: 3,
      title: "Global Search",
      description:
        "Access thousands of profiles, including those from partner platforms.",
      image: "/images/hero/services/service-03.png",
    },
    {
      id: 4,
      title: "Horoscope Integration",
      description: "Horoscope matching services for interested users.",
      image: "/images/hero/services/service-04.png",
    },
    {
      id: 5,
      title: "Event Invites",
      description: "Exclusive invites to matchmaking and community events.",
      image: "/images/hero/services/service-05.png",
    },
    {
      id: 6,
      title: "Subscription Plans",
      description: "Flexible plans tailored to diverse user needs.",
      image: "/images/hero/services/service-06.png",
    },
    {
      id: 7,
      title: "AI-Powered Matchmaking",
      description:
        "AI algorithms suggest the best matches based on user preferences.",
      image: "/images/hero/services/hero-section.png",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor: "#C84B31",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            backgroundColor: "#C84B31",
            animation: "pulse 4s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Holistic Solutions for Innovative Matrimony Businesses"
          subtitle="Tailored strategies and tools to elevate your matrimonial services"
          badgeText="Features Offerings"
          addLineBreak={true}
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((feature, index) => {
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
                    isHovered ? "transform -translate-y-3" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-6 shadow-xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Accent overlay on hover */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 mix-blend-overlay ${
                        isHovered ? "opacity-40" : "opacity-0"
                      }`}
                      style={{ backgroundColor: "#C84B31" }}
                    />

                    {/* Shine effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-700 ${
                        isHovered ? "opacity-30" : "opacity-0"
                      }`}
                      style={{
                        transform: isHovered
                          ? "translateX(100%)"
                          : "translateX(-100%)",
                      }}
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="text-center px-2">
                    <h3
                      className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        isHovered ? "text-accent" : "text-white"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-slate-300 text-base transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-70 transform translate-y-2"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative accent line */}
                  <div
                    className={`mx-auto mt-4 h-1 rounded-full transition-all duration-500 ${
                      isHovered ? "w-20" : "w-0"
                    }`}
                    style={{ backgroundColor: "#C84B31" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
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

export default FeaturesSection;
