"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { values } from "@/data/about-us/values-section-data";

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-5 md:py-10 bg-primary">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-neue-haas-medium text-secondary mb-5"
        >
          Our Values
        </motion.h2>

        {/* Lightweight Grid */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="border border-secondary/15 p-6 rounded-xl bg-white/30 backdrop-blur-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-3">
                <span className="text-orange text-xl">✱</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-neue-haas-medium text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary/70 text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
