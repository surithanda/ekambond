import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-orange/20 rounded-full blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-surface/30 to-brown/20 rounded-full blur-3xl"
    />

    {/* Floating particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-accent/40 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, Math.sin(i) * 20, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3 + i * 0.2,
          repeat: Infinity,
          delay: i * 0.1,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>
);

export default AnimatedBackground;