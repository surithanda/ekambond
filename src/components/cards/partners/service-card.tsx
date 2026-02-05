import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceBadge from "@/components/badges/service-badge";

export interface Service {
  title: string;
  badge: string;
  description: string;
  stat: string;
  statLabel: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <div
    className="group relative flex h-full"
    style={{
      animation: `slideUp 0.8s ease-out ${index * 0.2}s both`,
    }}
  >
    {/* Modern Glass Tint Card */}
    <div className="relative bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] overflow-hidden flex flex-col w-full h-full min-h-[520px] group-hover:border-white/50">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-orange/5 opacity-60" />

      {/* Animated Glass Reflections */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-1/2 -left-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-orange/10 rounded-full blur-lg" />
      </div>

      <div className="relative p-6 z-10 flex flex-col h-full">
        {/* Header with Enhanced Glass Badge */}
        <div className="flex items-center justify-between mb-6">
          <ServiceBadge badge={service.badge} icon={service.icon} />

          {/* Floating Glass Icon Container */}
          <div className="relative w-12 h-12 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border border-white/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <service.icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors duration-500 relative z-10" />
          </div>
        </div>

        {/* Title & Description with Modern Typography */}
        <div className="mb-6 space-y-4">
          <h3 className="text-2xl font-neue-haas-medium text-secondary leading-tight bg-gradient-to-r from-secondary to-secondary bg-clip-text group-hover:from-accent group-hover:to-orange transition-all duration-700">
            {service.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed font-neue-haas-regular bg-white/30 backdrop-blur-sm p-3 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
            {service.description}
          </p>
        </div>

        {/* Enhanced Glass Stats Card */}
        <div className="mb-6">
          <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl border border-white/30 p-4 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:border-white/50">
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 space-y-2">
              <div className="text-3xl font-neue-haas-bold bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">
                {service.stat}
              </div>
              <div className="text-secondary text-sm font-neue-haas-medium opacity-90 uppercase tracking-wider">
                {service.statLabel}
              </div>
            </div>

            {/* Floating Sparkle Icon */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-float" />
          </div>
        </div>

        {/* Modern Features List */}
        <div className="flex-1 mb-6">
          <div className="h-full space-y-3">
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 group/feature hover:translate-x-1 transition-all duration-300 p-3 rounded-2xl hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  {/* Animated Glass Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg group-hover/feature:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange opacity-0 group-hover/feature:opacity-30 transition-opacity duration-300" />
                      <div className="w-2 h-2 bg-accent rounded-full group-hover/feature:scale-150 group-hover/feature:bg-orange transition-all duration-300 relative z-10" />
                    </div>
                  </div>

                  {/* Feature Text */}
                  <span className="text-secondary text-sm font-neue-haas-medium group-hover/feature:text-accent transition-colors duration-300 flex-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent group-hover:via-orange/70 transition-all duration-1000 rounded-full" />
    </div>

    {/* Enhanced Outer Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-orange/20 opacity-0 group-hover:opacity-30 blur-3xl -z-10 rounded-3xl transition-all duration-700 scale-95 group-hover:scale-100" />
  </div>
);

export default ServiceCard;
