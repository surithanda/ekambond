"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Community",
    tag: "Self-Service",
    tagColor: "bg-secondary text-primary",
    description: "Perfect for getting started with basic support",
    stat: "Response: 2x - 22 hrs",
    features: [
      "Business hours",
      "Community forums",
      "Basic documentation",
      "Email support",
    ],
    gradient:
      "linear-gradient(135deg, rgba(217, 169, 30, 0.1), rgba(200, 75, 49, 0.05))",
    iconColor: "#D9A91E",
  },
  {
    title: "Professional",
    tag: "Extended Support",
    tagColor: "bg-accent/20 text-secondary",
    description: "Enhanced support for growing businesses",
    stat: "Response: 4 hrs",
    features: [
      "Everything in Community",
      "Extended business hours",
      "Phone support",
      "Priority email",
    ],
    gradient:
      "linear-gradient(135deg, rgba(194, 169, 140, 0.15), rgba(217, 169, 30, 0.08))",
    iconColor: "#C2A98C",
    featured: true,
  },
  {
    title: "Enterprise",
    tag: "Premium",
    tagColor: "bg-orange/20 text-orange",
    description: "Dedicated support for enterprise needs",
    stat: "Response: <1 hr",
    features: [
      "Everything in Professional",
      "24/7 support",
      "Phone support",
      "Custom SLAs",
    ],
    gradient:
      "linear-gradient(135deg, rgba(200, 75, 49, 0.12), rgba(217, 169, 30, 0.08))",
    iconColor: "#1B3A6E",
  },
];

const ServicesCards = () => {
  return (
    <section className="relative bg-primary py-24 px-6 overflow-hidden font-neue-haas">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(217, 169, 30, 0.2)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(200, 75, 49, 0.2)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/40 border border-white/50 backdrop-blur-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-secondary">
              Choose Your Support Level
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-neue-haas-medium mb-6 text-secondary">
            Right Plan for Your Needs
          </h2>

          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            From self-service to dedicated enterprise support, we have the
            perfect solution.
          </p>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 80 }}
          >
            <motion.div
              className="relative rounded-3xl p-8 overflow-hidden h-full flex flex-col"
              style={{
                background: service.featured
                  ? "rgba(255,255,255,0.5)"
                  : "rgba(255,255,255,0.35)",
                border: service.featured
                  ? "2px solid rgba(200,75,49,0.3)"
                  : "1px solid rgba(255,255,255,0.5)",
                backdropFilter: "blur(16px)",
                boxShadow: service.featured
                  ? "0 20px 60px rgba(200,75,49,0.15), 0 0 0 1px rgba(200,75,49,0.1)"
                  : "0 8px 32px rgba(26,26,26,0.08)",
              }}
              whileHover={{
                y: -12,
                boxShadow: service.featured
                  ? "0 30px 80px rgba(200,75,49,0.2), 0 0 0 1px rgba(200,75,49,0.15)"
                  : "0 20px 50px rgba(26,26,26,0.12)",
              }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              {/* Featured badge */}
              {service.featured && (
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-neue-haas-medium text-cream"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,75,49,0.9), rgba(217,169,30,0.9))",
                    boxShadow: "0 4px 12px rgba(200,75,49,0.3)",
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  POPULAR
                </motion.div>
              )}

              {/* Tag */}
              <motion.span
                className={`inline-block px-4 py-1.5 rounded-full text-xs font-neue-haas-medium mb-5 ${service.tagColor}`}
                style={{ boxShadow: "0 2px 8px rgba(26,26,26,0.1)" }}
                whileHover={{ scale: 1.05 }}
              >
                {service.tag}
              </motion.span>

              {/* Title */}
              <h3 className="text-2xl font-neue-haas-medium mb-4 text-secondary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-gray-600 font-neue-haas-regular">{service.description}</p>

              {/* Stats */}
              <motion.div
                className="rounded-xl px-4 py-3 mb-6 text-center font-neue-haas-medium text-sm"
                style={{
                  background: `${service.iconColor}20`,
                  border: `1px solid ${service.iconColor}30`,
                  color: service.iconColor,
                }}
                whileHover={{ scale: 1.02 }}
              >
                {service.stat}
              </motion.div>

              {/* Features list */}
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + idx * 0.1 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: `${service.iconColor}20`,
                        border: `1.5px solid ${service.iconColor}`,
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: service.iconColor }}
                        strokeWidth={3}
                      />
                    </div>
                    <span className="font-neue-haas-medium text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA button */}
              <motion.button
                className="w-full px-6 py-4 rounded-full font-neue-haas-medium transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                style={{
                  background: service.featured
                    ? "linear-gradient(135deg, #1B3A6E, #D9A91E)"
                    : "rgba(26,26,26,0.05)",
                  border: service.featured ? "none" : "2px solid #0F2145",
                  color: service.featured ? "#EFECE6" : "#0F2145",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: service.featured
                    ? "0 8px 24px rgba(200,75,49,0.4)"
                    : "0 4px 16px rgba(26,26,26,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get {service.title} Support
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
              </motion.button>

              {/* Light effect overlay */}
              <motion.div
                className="absolute top-0 -left-full h-full w-1/2 skew-x-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />

              {/* Radial accent */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rounded-tl-full"
                style={{
                  background: `radial-gradient(circle at bottom right, ${service.iconColor}, transparent 70%)`,
                }}
              />
            </motion.div>

            {/* Shadow on hover */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              style={{ background: service.iconColor }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full opacity-40 bg-accent" />
      <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full opacity-40 bg-red-500" />
      <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full opacity-40 bg-yellow-400" />
    </section>
  );
};

export default ServicesCards;
