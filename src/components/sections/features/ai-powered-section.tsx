"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, CheckCircle, TrendingUp, Zap } from "lucide-react";
import { features } from "@/data/features/features-data";

const AIMatchmakingHero = () => {
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
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-neue-haas-medium text-gray-700">
                  High Success
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
               <h1 className="text-5xl lg:text-6xl font-neue-haas-medium text-gray-900 leading-tight">
  AI-Powered
  <span className="block bg-orange bg-clip-text text-transparent font-canela">
    Matchmaking
  </span>
</h1>

<p className="text-xl font-neue-haas-regular text-muted mt-6 leading-relaxed max-w-2xl">
  <span className="font-medium block text-orange">
    Smarter Matches. Higher Success.
  </span>
  Our ML engine analyzes behavior, lifestyle, preferences, and values to generate accurate matches.
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
              {features.map((feature) => {
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

          {/* Right Visual - Modern Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-500/5 rounded-3xl blur-xl"></div>

              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white px-6 py-2 rounded-full text-sm font-neue-haas-medium shadow-lg border border-orange-300/30">
                AI/ML
              </div>

              <div className="relative space-y-8 pt-8 z-10">
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-orange rounded-2xl shadow-lg transform rotate-6"></div>
                    <div className="absolute inset-0 bg-orange rounded-2xl shadow-lg flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-neue-haas-medium text-gray-900 mb-2">
                      AI-Powered Matches
                    </h3>
                    <p className="text-muted text-sm font-neue-haas-regular">
                      Smart algorithms for perfect compatibility
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                {/* <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-neue-haas-medium text-gray-900">800%</div>
                    <div className="text-xs font-neue-haas-regular text-muted">Success Rate</div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-neue-haas-medium text-gray-900">4</div>
                    <div className="text-xs font-neue-haas-regular text-muted">AI Models</div>
                  </div>
                </div> */}

                {/* Feature Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-neue-haas-regular text-gray-700">
                      Machine learning
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-sm font-neue-haas-regular text-gray-700">
                      Behavioral analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-neue-haas-regular text-gray-700">
                      Real-time optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-orange rounded-2xl opacity-20 shadow-lg"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange rounded-full opacity-20 shadow-lg"
            ></motion.div>

            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIMatchmakingHero;
