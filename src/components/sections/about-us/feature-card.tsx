"use client";

import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: React.ReactNode; // allow JSX or string
}

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:bg-card hover:shadow-lg hover:shadow-orange-200/20">

      <div className="relative z-10">

        {/* Icon */}
        <div className="mb-4 inline-flex rounded-lg bg-orange/10 p-3 text-orange transition-colors duration-300 group-hover:bg-orange/20">
          <Icon className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-secondary">
          {feature.title}
        </h3>

        {/* Description / JSX List */}
        <div className="text-base leading-relaxed text-secondary/80">
          {feature.description}
        </div>

      </div>
    </div>
  );
}
