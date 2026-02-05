import React from "react";

interface ServiceBadgeProps {
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceBadge: React.FC<ServiceBadgeProps> = ({ badge, icon: Icon }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-60 backdrop-blur-xl rounded-full border border-white border-opacity-60 text-sm font-bold text-secondary uppercase tracking-wider shadow-lg">
    <Icon className="w-4 h-4 text-accent" />
    <span className="text-xs font-neue-haas-medium ">{badge}</span>
  </div>
);

export default ServiceBadge;
