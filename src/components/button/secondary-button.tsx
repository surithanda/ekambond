'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  label: string;
  onClick?: () => void;
  delay?: number;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
        className={`bg-black text-white border border-black px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1 sm:gap-2 w-auto justify-center ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className='font-semibold'>{label}</span>
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default SecondaryButton;