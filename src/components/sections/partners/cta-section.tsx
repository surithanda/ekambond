"use client";
import React from "react";
import { Heart, Sparkles } from "lucide-react";
import PrimaryButton from "@/components/button/primary-button";
import SecondaryButton from "@/components/button/secondary-button";
import "@/styles/partners/cta-section.css";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
      {/* Animated Glass Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 via-transparent to-orange/10 backdrop-blur-3xl"></div>
        <div className="absolute top-1/4 -left-10 sm:-left-16 md:-left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-10 sm:-right-16 md:-right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-orange/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Animated Icon */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange to-accent rounded-2xl blur-lg opacity-60 animate-pulse"></div>
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/40 group hover:scale-110 transition-all duration-500">
              <Heart className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-accent group-hover:text-orange transition-colors duration-500" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 text-orange animate-spin" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-neue-haas-medium text-secondary mb-4 sm:mb-6 leading-tight">
            Ready to Join Our
            <span className="block bg-accent bg-clip-text text-transparent animate-gradient mt-2">
              Partner Network?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-muted mb-8 sm:mb-10 md:mb-12 font-neue-haas-regular leading-relaxed max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto bg-white/30 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl border border-white/20">
            Let's work together to create meaningful connections and build a
            stronger matrimony ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-xs xs:max-w-none">
            <div className="w-full xs:w-auto">
              <PrimaryButton
                label="Apply for partnership"
                onClick={() => {
                  console.log("Apply for partnership");
                }}
                className="w-full xs:w-auto text-sm sm:text-base px-6 sm:px-8 py-3"
              />
            </div>
            <div className="w-full xs:w-auto">
              <SecondaryButton
                label="Download Partner Kit"
                onClick={() => {
                  console.log("Download Partner Kit");
                }}
                className="w-full xs:w-auto text-sm sm:text-base px-6 sm:px-8 py-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTASection;