"use client";
import React from "react";
import {
  Cloud,
  Users,
  Palette,
  ShieldCheck,
  Headphones,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ServiceCard from "@/components/cards/service-card";
import { s } from "framer-motion/client";
import SectionHeader from "../section-header";

const services = [
  {
    id: "01",
    icon: Cloud,
    title: "Platform as a Service",
    description: "Complete cloud infrastructure and platform management",
    price: "$50",
    priceType: "month",
    gradient: "from-amber-400/20 via-yellow-500/20 to-amber-600/20",
    glowColor: "shadow-amber-500/50",
    accentColor: "text-accent",
    borderGlow: "group-hover:shadow-amber-400/40",
    features: [
      "Auto-scaling cloud infrastructure",
      "Global CDN distribution",
      "99.9% uptime guarantee",
      "Automated failovers",
    ],
  },
  {
    id: "02",
    icon: Users,
    title: "Partner Services",
    description: "Comprehensive partner management and revenue sharing",
    price: "Contact",
    priceType: "month",
    gradient: "from-orange-400/20 via-red-500/20 to-orange-600/20",
    glowColor: "shadow-orange-500/50",
    accentColor: "text-orange",
    borderGlow: "group-hover:shadow-orange-400/40",
    features: [
      "Partner onboarding automation",
      "Partner portal dashboard",
      "Revenue sharing system",
      "API access and integrations",
    ],
  },
  {
    id: "03",
    icon: Palette,
    title: "Website Customization",
    description: "Tailored design and branding for your platform",
    price: "$2,999",
    priceType: "one-time",
    gradient: "from-amber-500/20 via-orange-500/20 to-amber-700/20",
    glowColor: "shadow-amber-600/50",
    accentColor: "text-brown",
    borderGlow: "group-hover:shadow-amber-500/40",
    features: [
      "Custom theme development",
      "Mobile-responsive design",
      "Brand identity integration",
      "UI/UX optimization",
    ],
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Verification Services",
    description: "Multi-layer verification for profile authenticity",
    price: "$149",
    priceType: "month",
    gradient: "from-stone-400/20 via-amber-500/20 to-stone-600/20",
    glowColor: "shadow-stone-500/50",
    accentColor: "text-surface",
    borderGlow: "group-hover:shadow-stone-400/40",
    features: [
      "Document verification",
      "Photo verification with AI",
      "Background check integration",
      "Social media validation",
    ],
  },
  {
    id: "05",
    icon: Headphones,
    title: "Matchmaker Support",
    description: "Dedicated support team for your matchmakers",
    price: "Contact",
    priceType: "month",
    gradient: "from-yellow-400/20 via-amber-500/20 to-yellow-600/20",
    glowColor: "shadow-yellow-500/50",
    accentColor: "text-accent",
    borderGlow: "group-hover:shadow-yellow-400/40",
    features: [
      "24/7 dedicated support",
      "Success rate optimization",
      "Training programs",
      "Performance coaching",
    ],
  },
  {
    id: "06",
    icon: Calendar,
    title: "Event Management",
    description: "End-to-end event planning and coordination",
    price: "Contact",
    priceType: "event",
    gradient: "from-red-400/20 via-orange-500/20 to-red-600/20",
    glowColor: "shadow-red-500/50",
    accentColor: "text-orange",
    borderGlow: "group-hover:shadow-red-400/40",
    features: [
      "Event planning coordination",
      "Venue booking assistance",
      "Guest management system",
      "Post-event analytics",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-surface to-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brown/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="     Our Services"
          subtitle="Transform your matchmaking platform with cutting-edge solutions"
          badgeText="Premium Services"
          addLineBreak={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
