import React from 'react';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
}

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  return (
    <div className="group relative">
      {/* Glass Tint Card */}
      <div className="relative bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-2xl rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group-hover:border-white/70">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Glass Reflection */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-orange/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animation-delay-200"></div>
        </div>

        {/* Corner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

        {/* Stat Badge - Glass Style */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-xl border border-white/40 shadow-md">
          <span className="text-accent font-neue-haas-medium text-lg">{benefit.stat}</span>
        </div>

        {/* Glass Icon Container */}
        <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange opacity-30 rounded-xl blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-accent to-orange rounded-xl flex items-center justify-center shadow-lg border border-white/30 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
            <benefit.icon className="w-8 h-8 text-white relative z-10" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-neue-haas-medium text-secondary mb-3 group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-orange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
          {benefit.title}
        </h3>
        <p className="text-muted font-neue-haas-regular text-base leading-relaxed mb-4 bg-white/30 backdrop-blur-sm p-3 rounded-xl border border-white/30 group-hover:border-white/50 transition-all duration-500">
          {benefit.description}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-orange group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange/20 opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl transition-all duration-500 scale-95 group-hover:scale-100"></div>
    </div>
  );
};

export default BenefitCard;