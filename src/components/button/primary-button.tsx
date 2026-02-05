'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  delay?: number;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  delay = 0.4,
  className = '',
}) => {
  return (
    <motion.div
      className="flex justify-center items-center w-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`px-8 py-3.5 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap hover:cursor-pointer ${className}`}
        style={{
          background: 'linear-gradient(to right, #C84B31, #D55A3F)',
        }}
      >
        <span>{label}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

export default PrimaryButton;
