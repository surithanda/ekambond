'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowDown, Zap, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PricingHeader() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="relative text-center mb-20 overflow-hidden py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Floating Icons */}
        <motion.div
          className="absolute left-10 top-20 text-orange-500 opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Zap className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute right-10 top-40 text-orange-400 opacity-30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <Star className="w-10 h-10" />
        </motion.div>

        {/* Animated Badge with Glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center gap-2 relative mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full shadow-2xl border-2 border-orange-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="w-5 h-5 inline mr-2" />
            </motion.div>
            <span className="font-bold text-lg">No Credit Card Required</span>
          </div>
        </motion.div>

        {/* Main Heading with Stagger Effect */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-none"
          >
            {['Choose', 'Your'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="inline-block mr-6 text-gray-900"
                whileHover={{ scale: 1.05, color: '#f97316' }}
              >
                {word}
              </motion.span>
            ))}
            
            {/* Gradient Text with Shine Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              className="relative inline-block mt-4"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent blur-sm"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                Perfect Plan
              </span>
              
              {/* Shine Animation */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{ 
                  x: ['-100%', '200%'],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                style={{ mixBlendMode: 'overlay' }}
              />
            </motion.div>
          </motion.div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent mx-auto mb-8 rounded-full"
          />
        </div>

        {/* Description with Fade In */}
        <motion.p 
          className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="inline-block"
          >
            Flexible plans designed to{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="inline-block font-semibold text-orange-600"
          >
            fit your needs
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="inline-block"
          >
            , whether you're just starting or scaling up
          </motion.span>
        </motion.p>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 relative"
        >
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-orange-500 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-3 text-orange-600 cursor-pointer group"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-base font-semibold tracking-wider uppercase">
              Explore Plans
            </span>
            <motion.div
              className="relative"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 group-hover:text-orange-700 transition-colors" />
              <motion.div
                className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-50"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}