"use client";

import React, { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import SecondaryButton from "@/components/button/secondary-button";
import styles from "@/styles/features/newsletter.module.css";

export default function NewsLetter() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setIsVisible(true);
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletter-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6B7280" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletter-grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 ${styles.float}`}
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            top: "100%",
          }}
        />
      ))}

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Heart icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-12 h-12 text-orange fill-orange animate-pulse" />
            <div className="absolute inset-0 w-12 h-12">
              <Heart className="w-12 h-12 text-orange opacity-20 animate-ping" />
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-orange" />
          <span className="text-gray-700 text-xs font-neue-haas-medium">
            Join Thousands of Happy Couples
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-neue-haas-medium mb-4 leading-tight text-gray-900">
          Ready to Transform
          <br />
          <span className="relative inline-block mt-1">
            <span className="relative z-10 bg-orange bg-clip-text text-transparent font-canela">
              your matrimony business?
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-orange opacity-80"></div>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-neue-haas-regular leading-relaxed text-gray-600">
          Join platforms, communities, and matchmakers who trust EkamBond to deliver meaningful connections.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <SecondaryButton label="Get Started" onClick={() => console.log("Clicked!")} />
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-90 text-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse"></div>
            <span className="text-xs font-neue-haas-medium">10,000+ Success Stories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse delay-300"></div>
            <span className="text-xs font-neue-haas-medium">AI-Powered Matching</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse delay-600"></div>
            <span className="text-xs font-neue-haas-medium">Trusted by 50+ Countries</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
    </div>
  );
}
