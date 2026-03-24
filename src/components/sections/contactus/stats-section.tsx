'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Users, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Clock,
      value: '< 2 min',
      label: 'Average Response Time',
      accentColor: 'rgba(217, 169, 30, 0.8)'
    },
    {
      icon: Star,
      value: '98.5%',
      label: 'Customer Satisfaction',
      accentColor: 'rgba(200, 75, 49, 0.8)'
    },
    {
      icon: Users,
      value: '24/7',
      label: 'Support Agents',
      accentColor: 'rgba(217, 169, 30, 0.8)'
    },
    {
      icon: CheckCircle,
      value: '99.2%',
      label: 'Issues Resolved',
      accentColor: 'rgba(200, 75, 49, 0.8)'
    }
  ];

  return (
    <section className="relative bg-primary py-16 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(217, 169, 30, 0.15)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(200, 75, 49, 0.15)' }}></div>
      </div>

      <div className="relative w-full px-6">
        {/* Optional header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-neue-haas-medium mb-4" style={{ color: '#0F2145' }}>
            Proven Excellence
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #D9A91E, #1B3A6E)' }}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 100 }}
            >
              {/* Glass card with professional styling */}
              <motion.div
                className="relative backdrop-blur-md rounded-2xl p-8 text-center overflow-hidden shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 8px 32px 0 rgba(26, 26, 26, 0.1)'
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 16px 48px 0 rgba(26, 26, 26, 0.15)'
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                {/* Subtle gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.accentColor}15, transparent)`
                  }}
                ></motion.div>
                
                {/* Professional glass icon container */}
                <motion.div
                  className="relative w-20 h-20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${stat.accentColor}20, ${stat.accentColor}10)`,
                    border: `1.5px solid ${stat.accentColor}40`,
                    boxShadow: `0 4px 16px ${stat.accentColor}20`
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    rotate: [0, -5, 5, 0],
                    boxShadow: `0 8px 24px ${stat.accentColor}30`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon 
                    className="w-10 h-10" 
                    strokeWidth={2} 
                    style={{ color: stat.accentColor }}
                  />
                </motion.div>
                
                {/* Value with elegant animation */}
                <motion.h3
                  className="text-5xl md:text-6xl font-neue-haas-bold mb-3"
                  style={{ 
                    color: '#0F2145',
                    textShadow: '0 2px 8px rgba(26, 26, 26, 0.1)'
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 + 0.25 }}
                >
                  {stat.value}
                </motion.h3>
                
                <p 
                  className="text-base font-neue-haas-medium tracking-wide leading-relaxed"
                  style={{ color: '#5A5A5A' }}
                >
                  {stat.label}
                </p>

                {/* Elegant shine effect */}
                <motion.div
                  className="absolute top-0 -left-full h-full w-1/3 skew-x-12"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                  }}
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                />

                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-20"
                  style={{
                    background: `radial-gradient(circle at top right, ${stat.accentColor}, transparent)`
                  }}
                ></div>
              </motion.div>

              {/* Subtle bottom glow */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: stat.accentColor }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;