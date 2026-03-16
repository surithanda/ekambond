"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { value: "500+", label: "Partners" },
    { value: "2M+", label: "Matches" },
    { value: "10M+", label: "Users" },
    { value: "50+", label: "Countries" },
  ];

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/earth.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/60" />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl w-full pt-32 md:pt-40 pb-24">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange text-sm md:text-base font-neue-haas-medium tracking-wider uppercase">
            About Us
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-neue-haas-bold text-primary mb-10 leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
         EkamBond Matrimony 
          <br />
          Enterprise Services
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-primary/80 max-w-3xl leading-relaxed mb-20 font-neue-haas-regular"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
      <span className="font-medium block text-orange">
    Bridging Hearts, Ensuring Trust
  </span>
  What began as a mission to help individuals find love has grown into a
  global platform empowering matrimony professionals worldwide.
  <br />
  EkamBond Matrimony Enterprise Services is a next-generation matrimony
  technology platform designed to support communities, organizations,
  matchmakers, and families in building trusted, meaningful relationships.<br />
  We blend modern innovation, cultural understanding, and enterprise-grade
  reliability to create platforms where every match is made with confidence.

        </motion.p>

        {/* Stats */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl border-t border-primary/20 pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-left border-l-2 border-orange pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-neue-haas-bold text-primary mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-primary/70 font-neue-haas-regular">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
