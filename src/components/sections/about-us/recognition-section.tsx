"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Activity } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      icon: <Eye className="w-10 h-10 text-orange" />,
      title: "Our Vision",
      description:
        "To be the world's trusted matrimony technology platform, where every person has access to true services that help them find their perfect partner.",
    },
    {
      icon: <Activity className="w-10 h-10 text-orange" />,
      title: "Our Impact",
      description:
        "Beyond successful matches, we're building strong communities, preserving cultural traditions with tech that makes a real difference in people's lives.",
    },
  ];

  return (
    <section className="py-5 md:py-8 bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Mission Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-5xl font-neue-haas-medium text-secondary mb-6 leading-tight">
            Our Mission
          </h2>

         <p className="text-muted text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-neue-haas-regular">
  <span className="font-medium">
    To connect people meaningfully while preserving trust, culture, and authenticity.
  </span>
  <br />
  We empower communities and individuals with advanced tools that make
  matchmaking easier, safer, inclusive, and culturally aligned.
</p>

        </motion.div>

        {/* Team Photo */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
            alt="Our Team"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>

        {/* Vision and Impact Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-orange flex items-center justify-center text-4xl">
                {section.icon}
              </div>

              {/* Section Title */}
              <h3 className="text-2xl md:text-3xl font-neue-haas-medium text-black mb-4">
                {section.title}
              </h3>

              {/* Section Description */}
              <p className="text-muted text-lg leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
