"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SecondaryButton from "@/components/button/secondary-button";

interface Dot {
  left: number;
  top: number;
  xOffset: number;
  duration: number;
  delay: number;
}

export default function PartnersHero() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generatedDots: Dot[] = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <section className="relative min-h-[80vh] w-full bg-primary overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/2 -right-1/4 w-[900px] h-[900px] bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating dots */}
      <div className="absolute inset-0">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [-20, -100, -20],
              x: [0, dot.xOffset, 0],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            className="absolute w-1 h-1 bg-accent/50 rounded-full"
            style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center items-center text-center min-h-[80vh] py-8">
          {/* Partner badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-secondary text-sm font-medium">
              Partner With EkamBond
            </span>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-neue-haas-bold text-secondary mb-6 leading-[1.1]"
          >
            Empowering Organizations to Build
            <br />
            <motion.span
              className="text-accent inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meaningful Connections
            </motion.span>
          </motion.h1>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted font-neue-haas-regular  max-w-3xl mx-auto leading-relaxed"
          >
            Whether you’re a community leader, nonprofit organization,
            matchmaker, bureau, or global matrimony platform, EkamBond gives you
            the technology and tools to grow faster and serve better.
          </motion.p>

          {/* CTA Button */}

          <div className="mt-10 mb-5">
            <SecondaryButton
              label="Get Started"
              onClick={() => {
                console.log("Get Started");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
