'use client';

import { BillingCycle, PlanCardsProps, plans } from '@/data/pricing/pricing-data';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';



export default function PlanCards({ selectedPlan, onPlanSelect }: PlanCardsProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN');
  };

  const calculateSavings = (monthly: number, annual: number) => {
    return (monthly * 12) - annual;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232, 185, 35, 0.12) 0%, transparent 70%)',
            left: '-15%',
            top: '5%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(27,58,110, 0.1) 0%, transparent 70%)',
            right: '-10%',
            bottom: '0%',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-12">
        {/* Centered Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div 
            className="flex items-center gap-1 p-1.5 rounded-full"
            style={{ 
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
            }}
          >
            <button
              onClick={() => setBillingCycle('annual')}
              className="px-8 py-2.5 rounded-full text-sm font-neue-haas-medium transition-all duration-300"
              style={{
                background: billingCycle === 'annual' ? 'rgba(27,58,110, 0.9)' : 'transparent',
                color: billingCycle === 'annual' ? '#F8F6F2' : '#2A2A2A',
                boxShadow: billingCycle === 'annual' ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
              }}
            >
              Yearly
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className="px-8 py-2.5 rounded-full text-sm font-neue-haas-medium transition-all duration-300"
              style={{
                background: billingCycle === 'monthly' ? 'rgba(27,58,110, 0.9)' : 'transparent',
                color: billingCycle === 'monthly' ? '#F8F6F2' : '#2A2A2A',
                boxShadow: billingCycle === 'monthly' ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
              }}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {plans.map((plan, index) => {
            const isHighlighted = plan.highlighted;
            const currentPrice = plan.pricing[billingCycle];
            const savings = calculateSavings(plan.pricing.monthly, plan.pricing.annual);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glassmorphic Card */}
                <div 
                  className="relative rounded-3xl overflow-hidden h-full"
                  style={{
                    background: isHighlighted 
                      ? 'rgba(27,58,110, 0.97)'
                      : 'rgba(255, 255, 255, 0.35)',
                    backdropFilter: 'blur(30px)',
                    border: isHighlighted 
                      ? '1.5px solid rgba(232, 185, 35, 0.25)'
                      : '1.5px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: isHighlighted
                      ? '0 25px 70px -20px rgba(232, 185, 35, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
                      : '0 10px 40px -10px rgba(27,58,110, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.4) inset',
                  }}
                >
                  {/* Liquid Shine Effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isHighlighted 
                        ? 'linear-gradient(135deg, transparent 25%, rgba(232, 185, 35, 0.08) 50%, transparent 75%)'
                        : 'linear-gradient(135deg, transparent 25%, rgba(255, 255, 255, 0.15) 50%, transparent 75%)',
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 1 }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      x: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                      opacity: { duration: 0.3 }
                    }}
                  />

                  <div className="relative p-7">
                    {/* Badge */}
                    <div className="flex items-end justify-end mb-5">
                      <span
                        className="text-xs font-neue-haas-medium px-4 py-1.5 rounded-full flex items-center gap-1"
                        style={{
                          background: plan.badgeColor === 'gradient'
                            ? 'linear-gradient(135deg, #E8B923, #D45C44)'
                            : isHighlighted 
                            ? 'rgba(232, 185, 35, 0.2)'
                            : 'rgba(27,58,110, 0.1)',
                          color: plan.badgeColor === 'gradient' ? '#2A2A2A' : isHighlighted ? '#E8B923' : '#2A2A2A',
                          border: plan.badgeColor === 'gradient' ? 'none' : '1px solid rgba(27,58,110, 0.15)',
                        }}
                      >
                        {plan.badge} {plan.badge === 'Popular' && '•'}
                      </span>
                    </div>

                    {/* Plan Name */}
                    <h2 
                      className="text-3xl font-neue-haas-bold mb-1"
                      style={{ color: isHighlighted ? '#F8F6F2' : '#2A2A2A' }}
                    >
                      {plan.name}
                    </h2>

                    {/* Subtitle */}
                    <p 
                      className="text-lg italic mb-3 font-neue-haas-medium"
                      style={{ color: isHighlighted ? 'rgba(212, 200, 184, 0.8)' : 'rgba(106, 106, 106, 0.8)' }}
                    >
                      {plan.subtitle}
                    </p>

                    {/* Pricing */}
                    <div className="mb-5">
                      <motion.div 
                        key={billingCycle}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline gap-1"
                      >
                        <span 
                          className="text-4xl font-neue-haas-bold"
                          style={{ color: isHighlighted ? '#E8B923' : '#2A2A2A' }}
                        >
                          ₹{formatPrice(currentPrice)}
                        </span>
                        <span 
                          className="text-base font-neue-haas-medium"
                          style={{ color: isHighlighted ? 'rgba(212, 200, 184, 0.7)' : 'rgba(106, 106, 106, 0.7)' }}
                        >
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </motion.div>
                      {billingCycle === 'annual' && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xs mt-2 font-neue-haas-medium"
                          style={{ color: isHighlighted ? 'rgba(139, 195, 74, 0.9)' : 'rgba(139, 195, 74, 1)' }}
                        >
                          {/* Save ₹{formatPrice(savings)} per year */}
                        </motion.p>
                      )}
                    </div>

                    {/* Description */}
                    <p 
                      className="text-sm mb-6 font-neue-haas-regular leading-relaxed"
                      style={{ color: isHighlighted ? 'rgba(212, 200, 184, 0.85)' : 'rgba(106, 106, 106, 0.9)' }}
                    >
                      {plan.tagline}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-7">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div 
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{
                              background: feature.included
                                ? isHighlighted
                                  ? 'rgba(139, 195, 74, 0.2)'
                                  : 'rgba(139, 195, 74, 0.12)'
                                : 'transparent',
                              border: feature.included ? 'none' : `1.5px solid ${isHighlighted ? 'rgba(106, 106, 106, 0.4)' : 'rgba(184, 184, 184, 0.4)'}`,
                            }}
                          >
                            {feature.included ? (
                              <Check 
                                className="w-3.5 h-3.5" 
                                strokeWidth={3}
                                style={{ color: '#8BC34A' }}
                              />
                            ) : (
                              <X 
                                className="w-3 h-3" 
                                strokeWidth={2.5}
                                style={{ color: isHighlighted ? 'rgba(106, 106, 106, 0.5)' : 'rgba(184, 184, 184, 0.6)' }}
                              />
                            )}
                          </div>
                          <span 
                            className="text-sm leading-relaxed font-neue-haas-regular"
                            style={{ 
                              color: isHighlighted 
                                ? feature.included ? 'rgba(248, 246, 242, 0.95)' : 'rgba(106, 106, 106, 0.6)'
                                : feature.included ? '#2A2A2A' : 'rgba(184, 184, 184, 0.7)'
                            }}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

               
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}