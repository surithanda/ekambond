"use client";
import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div
      key={service.id}
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow / Gradient Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl ${service.glowColor} opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
      ></div>

      {/* Card Container */}
      <div className="relative bg-white/60 backdrop-blur-2xl border-2 border-white/80 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/90 overflow-hidden">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} animate-shimmer`}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-xl p-4 rounded-2xl shadow-xl border-2 border-white/50 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
              >
                <service.icon className={`w-7 h-7 ${service.accentColor}`} />
                <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
              </div>

              <span className="text-xs font-neue-haas-bold bg-secondary text-white px-4 py-2 rounded-full shadow-lg uppercase tracking-wide">
                {service.id}
              </span>
            </div>

            <div className="text-right bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/80 shadow-lg">
              <div
                className={`text-3xl font-neue-haas-bold ${service.accentColor}`}
              >
                {service.price}
              </div>
              <div className="text-xs text-muted font-neue-haas-medium uppercase tracking-wider">
                /{service.priceType}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-neue-haas-medium text-secondary mb-3 group-hover:text-brown transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted mb-8 leading-relaxed font-neue-haas-regular">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {service.features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl p-3 border border-white/60 shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 bg-gradient-to-br ${service.gradient} rounded-full p-1.5 shadow-md`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-secondary font-neue-haas-medium text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
