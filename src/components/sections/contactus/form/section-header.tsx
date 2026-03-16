import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-16 md:mb-20 px-6 sm:px-8"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/40 backdrop-blur-xl border border-surface/40 text-accent rounded-full text-sm font-neue-haas-bold mb-6 sm:mb-8 shadow-lg"
    >
      <Sparkles className="w-4 h-4" />
      Let's Create Magic ✨
    </motion.div>

    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-neue-haas-bold text-secondary mb-5 sm:mb-6 leading-tight">
      READY TO
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="block bg-gradient-to-r from-accent via-orange to-orange bg-clip-text text-transparent"
      >
        ELEVATE?
      </motion.span>
    </h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-muted text-lg sm:text-xl md:text-2xl max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light"
    >
To become the world’s most trusted multi-community matrimony technology provider—supporting traditional values while embracing the future of AI-driven matchmaking.
    </motion.p>
  </motion.div>
);

export default SectionHeader;