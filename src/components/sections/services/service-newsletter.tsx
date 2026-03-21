"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star, Zap, Shield, Rocket } from "lucide-react";
import SecondaryButton from "@/components/button/secondary-button";
import "@/styles/services/services-newsletter.css";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  index: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function ServicesNewsletter() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 5 + Math.random() * 8,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const StatsCard: React.FC<StatsCardProps> = ({
    icon,
    value,
    label,
    delay,
    index,
  }) => (
    <div
      className="relative group cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* White liquid glassmorphism card */}
      <div
        className={`
          relative overflow-hidden rounded-3xl p-8 h-full
          bg-white/10 backdrop-blur-2xl border border-white/30 transition-all duration-700 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }
          hover:bg-white/15 hover:border-white/40
        `}
        style={{
          animation: `liquidMorph ${8 + index * 2}s ease-in-out infinite`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Liquid background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 -top-8 -left-8 rounded-full blur-xl opacity-20 bg-white/30 animate-liquidBlob" />
          <div
            className="absolute w-40 h-40 -bottom-10 -right-10 rounded-full blur-xl opacity-20 bg-white/30 animate-liquidBlob"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute w-24 h-24 top-1/2 left-1/4 rounded-full blur-xl opacity-20 bg-white/30 animate-liquidBlob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="relative p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25 group-hover:border-orange/30"
              style={{
                animation: `iconFloat ${4 + index}s ease-in-out infinite`,
              }}
            >
              <div className="text-secondary group-hover:text-orange transition-colors duration-500">
                {icon}
              </div>
              <div
                className="absolute inset-0 rounded-2xl bg-orange/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  animation: `pulseGlow ${3 + index}s ease-in-out infinite`,
                }}
              />
            </div>
          </div>

          <div className="text-4xl font-neue-haas-medium bg-gradient-to-r from-secondary to-brown bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:text-orange">
            {value}
          </div>

          <div className="text-muted font-neue-haas-mediumtext-lg tracking-wide transition-all duration-500 group-hover:text-orange group-hover:tracking-wider">
            {label}
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-4 right-4 w-3 h-3 bg-orange/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            animation: `bubbleFloat ${5 + index}s ease-in-out infinite`,
          }}
        />
        <div
          className="absolute bottom-6 left-6 w-2 h-2 bg-orange/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            animation: `bubbleFloat ${7 + index}s ease-in-out infinite`,
            animationDelay: "1s",
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Dynamic gradient background that follows mouse */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.1) 0%, 
              transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, 
              rgba(255, 255, 255, 0.05) 0%, 
              transparent 50%),
            radial-gradient(circle at ${mousePosition.y}% ${mousePosition.x}%, 
              rgba(255, 255, 255, 0.08) 0%, 
              transparent 50%)
          `,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[40%] left-[70%] w-80 h-80 bg-white/3 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "4s" }}
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-40"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(255, 255, 255, 0.4) 50%, 
              transparent 100%)`,
            animation: `enhancedFloatUp ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            top: "100%",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-orange/80 transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="relative">
                <Zap className="w-5 h-5 text-orange group-hover:text-orange transition-colors duration-500" />
                <div className="absolute inset-0 text-orange blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <span className="text-secondary text-base font-neue-haas-medium tracking-wide">
                Premium Custom Services
              </span>
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            </div>

            {/* Enhanced main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-neue-haas-medium leading-tight text-secondary">
                <span className="block">Need a</span>
                <span className="relative inline-block mt-2">
                  <span
                    className="relative z-10 bg-gradient-to-r from-orange to-orange bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "textShimmer 3s ease-in-out infinite",
                    }}
                  >
                    custom service?
                  </span>
                  <div
                    className="absolute -bottom-3 left-0 w-full h-4 bg-orange/20 rounded-full blur-xl opacity-60"
                    style={{
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                </span>
              </h1>

              {/* Enhanced description */}
              <div className="text-xl sm:text-2xl text-muted font-neue-haas-medium leading-relaxed max-w-2xl">
                <span className="relative inline-block">
                  <span>tailored service</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange/50 to-transparent rounded-full" />
                </span>{" "}
                that perfectly fits your unique business requirements.
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-start justify-start">
              <SecondaryButton
                label="Contact Experts"
                onClick={() => {
                  console.log("akdnlasbdnaljs");
                }}
              />
            </div>
          </div>

          {/* Right content - Stats grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <StatsCard
              icon={<Star className="w-7 h-7" />}
              value="5+"
              label="Successful Deployments"
              delay={100}
              index={0}
            />
            <StatsCard
              icon={<Shield className="w-7 h-7" />}
              value="99.9%"
              label="Uptime Guarantee"
              delay={200}
              index={1}
            />
            <StatsCard
              icon={<Zap className="w-7 h-7" />}
              value="24/7"
              label="Expert Support"
              delay={300}
              index={2}
            />
            <StatsCard
              icon={<Rocket className="w-7 h-7" />}
              value="15 Days"
              label="Average Launch-time"
              delay={400}
              index={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
