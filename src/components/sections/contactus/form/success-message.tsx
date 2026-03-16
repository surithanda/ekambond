import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SuccessMessage = () => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="relative z-10 flex flex-col items-center justify-center py-20"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 bg-accent/30 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="relative p-8 bg-gradient-to-br from-accent to-orange rounded-full shadow-2xl">
        <CheckCircle className="w-24 h-24 text-primary" strokeWidth={2.5} />
      </div>
    </motion.div>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-5xl font-black text-secondary mt-8 mb-4"
    >
      Message Sent!
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-xl text-muted text-center max-w-md font-medium"
    >
      Thank you for reaching out! We'll get back to you within 24 hours.
    </motion.p>

    <LoadingDots />
  </motion.div>
);

const LoadingDots = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="mt-8 flex gap-2"
  >
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-orange"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </motion.div>
);

export default SuccessMessage;