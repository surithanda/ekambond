"use client";

import PrimaryButton from "@/components/button/primary-button";
import SecondaryButton from "@/components/button/secondary-button";
import { motion } from "framer-motion";
import {
  Star,
  Crown,
  Gem,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden mt-16" style={{ background: "linear-gradient(145deg, #0F2145 0%, #1B3A6E 40%, #1E3D70 60%, #0F2145 100%)" }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,75,49,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,75,49,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Orange Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Background Icons - Fixed within section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rupee Symbols */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-16 left-12 text-orange/20 text-5xl font-bold"
        >
          ₹
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-32 right-20 text-orange/15 text-6xl font-bold"
        >
          ₹
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-28 left-16 text-orange/25 text-4xl font-bold"
        >
          ₹
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 60 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-20 right-12 text-orange/20 text-7xl font-bold"
        >
          ₹
        </motion.div>

        {/* Plan Icons - Random Placement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute top-24 right-1/3 text-orange/30"
        >
          <Star className="w-10 h-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute top-44 left-20 text-surface/40"
        >
          <Zap className="w-8 h-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute top-1/3 left-1/4 text-orange/35"
        >
          <Crown className="w-12 h-12" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-32 right-1/4 text-accent/40"
        >
          <Gem className="w-9 h-9" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-44 left-1/3 text-orange/30"
        >
          <TrendingUp className="w-7 h-7" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute top-1/2 right-16 text-surface/35"
        >
          <Shield className="w-11 h-11" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-neue-haas-medium text-secondary leading-tight"
            >
              Plans that <span className="text-orange">grow</span> with your{" "}
              <span className="text-accent">Platform</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-muted leading-relaxed font-neue-haas-regular"
            >
              From solving established climate risk cycles to advanced
              mathematical planning for your company. Start with our Ready to
              Work plan and scale as needed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <PrimaryButton label="Start Free Trial" />

              <SecondaryButton label="View Demo" />
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { text: "Plan A: No credit card required", icon: CheckCircle },
                { text: "Plan B: Free 14-day trial", icon: CheckCircle },
                { text: "Plan C: Cancel anytime", icon: CheckCircle },
                { text: "Plan D: 24/7 Support", icon: CheckCircle },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted">
                  <item.icon className="w-5 h-5 text-orange" />
                  <span className="text-sm font-neue-haas-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Plan Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Cards Container */}
            <div className="relative h-96">
              {/* Guide Plan */}
              <motion.div
                initial={{ y: 20, opacity: 0, rotate: -5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute left-4 top-0 w-64 bg-white/95 backdrop-blur-sm border border-surface/30 rounded-2xl p-6 shadow-2xl hover:shadow-orange/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-surface/20 rounded-xl">
                    <Star className="w-6 h-6 text-brown" />
                  </div>
                  <h3 className="text-secondary font-neue-haas-medium text-lg">Guide</h3>
                </div>
                <div className="text-3xl font-neue-haas-bold text-secondary mb-2">
                  $ 50<span className="text-muted text-sm">/mo</span>
                </div>
                <p className="text-muted font-neue-haas-medium text-sm mb-4">Ready to Work plan</p>
                <div className="space-y-3">
                  {[
                    "Manual matching",
                    "Basic management",
                    "Global search",
                    "Webinars",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-orange" />
                      <span className="text-xs font-neue-haas-regular">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-surface/20 text-secondary py-2.5 rounded-lg font-semibold text-sm hover:bg-surface/30 transition-colors duration-300">
                  Get Started
                </button>
              </motion.div>

              {/* Product Plan - Highlighted */}
              <motion.div
                initial={{ y: -20, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute right-4 top-8 w-72 bg-orange/10 backdrop-blur-md border border-orange/30 rounded-2xl p-6 shadow-2xl hover:shadow-orange/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange text-primary px-4 py-1 rounded-full text-xs font-neue-haas-medium">
                    MOST POPULAR
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange/20 rounded-xl">
                    <Crown className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-secondary font-neue-haas-bold text-lg">Product</h3>
                </div>
                <div className="text-3xl font-neue-haas-bold text-secondary mb-2">
                  ₹2,499<span className="text-muted text-sm">/mo</span>
                </div>
                <p className="text-muted text-sm mb-4 font-neue-haas-medium">
                  Serious Match seekers
                </p>
                <div className="space-y-3">
                  {[
                    "Processed matching",
                    "Partner scheduling",
                    "Extended features",
                    "Priority support",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-orange" />
                      <span className="text-xs font-neue-haas-regular">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-orange text-primary py-2.5 rounded-lg font-neue-haas-medium text-sm hover:bg-orange/90 transition-colors duration-300">
                  Try Free for 14 Days
                </button>
              </motion.div>

              {/* Elite Plan */}
              <motion.div
                initial={{ y: 20, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-68 bg-white/95 backdrop-blur-sm border border-accent/30 rounded-2xl p-6 shadow-2xl hover:shadow-orange/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/20 rounded-xl">
                    <Gem className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-secondary font-bold text-lg">Elite</h3>
                </div>
                <div className="text-3xl font-black text-secondary mb-2">
                  $ 1,999<span className="text-muted text-sm">/year</span>
                </div>
                <p className="text-muted text-sm mb-4">
                  For Matrimonial Partner
                </p>
                <div className="space-y-3">
                  {[
                    "Advanced search",
                    "Partner dashboard",
                    "Profile activity",
                    "Dedicated support",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-orange" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-accent text-primary py-2.5 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors duration-300">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}