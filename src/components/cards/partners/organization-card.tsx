import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import CategoryBadge from '@/components/badges/category-badge';

export interface Organization {
  title: string;
  category: string;
  description: string;
  stat: string;
  statLabel: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  badgeIcon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
}

interface OrganizationCardProps {
  org: Organization;
  index: number;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ org, index }) => (
  <div 
    className="group relative flex h-full"
    style={{
      animation: `slideUp 0.8s ease-out ${index * 0.2}s both`
    }}
  >
    {/* Glass Tint Card with Fixed Equal Height */}
    <div className="relative bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden flex flex-col w-full h-full min-h-[580px] group-hover:border-white/60">
      
      {/* Glass Reflection Effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-3xl">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange/20 rounded-full blur-2xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:translate-x-[100%] transition-transform duration-1500 ease-out" />
      </div>

      {/* Enhanced Gradient Border */}
      <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-white/60 via-accent/30 to-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full bg-transparent rounded-3xl" />
      </div>

      <div className="relative p-8 z-10 flex flex-col h-full">
        
        {/* Header with Unique Badge */}
        <div className="flex items-center justify-between mb-6">
          <CategoryBadge 
            category={org.category} 
            icon={org.badgeIcon} 
            color={org.badgeColor}
          />
          
          {/* Glass Icon Container */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 border border-white/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <org.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-500 relative z-10" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-neue-haas-medium text-secondary leading-tight group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-orange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {org.title}
          </h3>

          <p className="text-muted text-base leading-relaxed font-neue-haas-regular bg-white/30 backdrop-blur-sm p-4 rounded-2xl border border-white/30 group-hover:border-white/50 transition-all duration-500">
            {org.description}
          </p>
        </div>

        {/* Glass Stats Card */}
        <div className="mb-6">
          <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-2xl border border-white/40 p-4 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:border-white/60">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-1">
              <div className="text-3xl font-black bg-gradient-to-r from-accent to-orange bg-clip-text text-transparent">
                {org.stat}
              </div>
              <div className="text-secondary text-sm font-neue-haas-medium opacity-90 uppercase tracking-wide">
                {org.statLabel}
              </div>
            </div>
            
            <Sparkles className="absolute bottom-3 right-3 w-6 h-6 text-accent opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
          </div>
        </div>

        {/* Features List - Only 3 items, no scroll */}
        <div className="flex-1 mb-6">
          <div className="h-full space-y-3">
            <h4 className="text-lg font-neue-haas-medium text-secondary mb-3">Key Features:</h4>
            <div className="space-y-3">
              {org.features.slice(0, 3).map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 group/feature hover:translate-x-2 transition-all duration-300 p-3 rounded-2xl hover:bg-white/30 backdrop-blur-sm border border-transparent hover:border-white/30"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center shadow-lg group-hover/feature:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange opacity-0 group-hover/feature:opacity-30 transition-opacity duration-300" />
                      <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover/feature:scale-150 group-hover/feature:bg-orange transition-all duration-300 relative z-10" />
                    </div>
                  </div>
                  <span className="text-secondary text-sm font-neue-haas-medium group-hover/feature:text-accent transition-colors duration-300 flex-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      {/* Bottom Accent Glow */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent via-orange to-accent group-hover:w-full transition-all duration-1000 ease-out rounded-full" />
    </div>

    {/* Outer Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange/20 opacity-0 group-hover:opacity-30 blur-3xl -z-10 rounded-3xl transition-all duration-700 scale-95 group-hover:scale-100" />
  </div>
);

export default OrganizationCard;