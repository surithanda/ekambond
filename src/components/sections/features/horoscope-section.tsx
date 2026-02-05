"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles, CheckCircle, Moon } from "lucide-react";
import { horoscope, zodiacSigns } from "@/data/features/features-data";

const HoroscopeIntegration = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section className="min-h-screen bg-primary py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm border border-orange-100"
              >
                <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-neue-haas-medium text-gray-700">
                  Cultural
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-5xl lg:text-6xl font-neue-haas-medium text-gray-900 leading-tight">
                  Cultural Horoscope
                  <span className="block bg-orange bg-clip-text text-transparent font-canela">
                    Integration
                  </span>
                </h1>

                <p className="text-xl font-neue-haas-regular text-muted mt-6 leading-relaxed max-w-2xl">
                  <span className="font-medium block text-orange">
                    Where Tradition Meets Technology
                  </span>
                  Blend cultural expectations with modern tools for families who
                  value astrology.
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid gap-4"
            >
              {horoscope.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;

                return (
                  <motion.div
                    key={feature.id}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-lg border border-orange-100"
                        : "bg-white/50 hover:bg-white/80 border border-transparent"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-orange shadow-lg" : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-muted"
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3
                            className={`font-neue-haas-medium transition-colors duration-300 ${
                              isActive ? "text-gray-900" : "text-gray-700"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 bg-orange rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          )}
                        </div>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-muted text-sm mt-2 font-neue-haas-regular">
                                {feature.description}
                              </p>
                              <div className="flex items-center gap-2 mt-3">
                                <div className="w-2 h-2 bg-orange rounded-full"></div>
                                <span className="text-sm font-neue-haas-medium text-orange">
                                  {feature.stat}
                                </span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Visual - Astrology Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 shadow-2xl border border-orange-100/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-500/5 rounded-3xl blur-xl"></div>

              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange to-orange-600 text-white px-6 py-2 rounded-full text-sm font-neue-haas-medium shadow-lg border border-orange-300/30">
                Astrology
              </div>

              <div className="relative space-y-8 pt-8 z-10">
                {/* Horoscope Preview */}
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-orange rounded-2xl shadow-lg transform rotate-6"></div>
                    <div className="absolute inset-0 bg-orange rounded-2xl shadow-lg flex items-center justify-center">
                      <Star className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-neue-haas-medium text-gray-900 mb-2">
                      Horoscope Integration
                    </h3>
                    <p className="text-muted text-sm font-neue-haas-regular">
                      Traditional matching with modern technology
                    </p>
                  </div>
                </div>

                {/* Zodiac Circle Preview */}
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
                  </div>
                  <div className="relative">
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {zodiacSigns.slice(0, 8).map((sign, index) => (
                        <motion.div
                          key={sign.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white/70 backdrop-blur-sm rounded-lg p-2 text-center"
                        >
                          <div className="text-2xl text-white">
                            {sign.symbol}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-center text-white">
                      <div className="text-sm font-neue-haas-medium opacity-90 text-orange">
                        12 Zodiac Signs
                      </div>
                      <div className="text-xs font-neue-haas-regular opacity-75 mt-1 text-orange">
                        Complete astrological system
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compatibility Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-orange-100">
                    <div className="text-3xl font-neue-haas-medium text-orange mb-1">
                      {/* 15+ */}
                    </div>
                    <div className="text-xs font-neue-haas-regular text-muted">
                      Astrology Systems
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-orange-100">
                    <div className="text-3xl font-neue-haas-medium text-orange mb-1">
                      {/* 95% */}
                    </div>
                    <div className="text-xs font-neue-haas-regular text-muted">
                      Match Accuracy
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="bg-white rounded-xl p-4 border border-orange-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-neue-haas-medium text-gray-700">
                      Compatibility Analysis
                    </span>
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4 text-orange" />
                      <span className="text-sm font-neue-haas-medium text-orange">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div
                      className="bg-orange h-2 rounded-full transition-all duration-1000"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="text-xs font-neue-haas-regular text-gray-500 mt-2">
                    High compatibility detected
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-orange rounded-2xl opacity-20 shadow-lg"
            >
              <Star className="w-6 h-6 text-orange m-3" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange rounded-full opacity-20 shadow-lg flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-orange" />
            </motion.div>

            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeIntegration;
