"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Zap,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { events, eventStats } from "@/data/features/features-data";

const EventInvites = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual - Event Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl blur-xl" style={{ backgroundColor: 'rgba(200, 75, 49, 0.05)' }}></div>
              
              {/* Header Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white px-6 py-2 rounded-full text-sm font-neue-haas-medium shadow-lg border border-orange-300/30">
                Automated
              </div>

              {/* Main Content */}
              <div className="relative space-y-8 pt-8 z-10">
                {/* Event Preview */}
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 rounded-2xl shadow-lg transform rotate-6" style={{ background: 'linear-gradient(to bottom right, #C84B31, #D55A3F)' }}></div>
                    <div className="absolute inset-0 rounded-2xl shadow-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #C84B31, #D55A3F)' }}>
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-neue-haas-medium text-gray-900 mb-2">
                      Event Invites
                    </h3>
                    <p className="text-muted text-sm font-neue-haas-regular">
                      Complete event management system
                    </p>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="rounded-2xl p-6 text-center text-white bg-orange font-neue-haas-medium" >
                  {/* <div className="text-4xl mb-2">10K+</div> */}
                  <div className="text-sm font-neue-haas-regular" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Events Monthly</div>
                </div>

                {/* Event Features */}
                <div className="space-y-4">
                  <h4 className="font-neue-haas-medium text-gray-900 text-sm uppercase tracking-wide">
                    Event Features
                  </h4>
                  <div className="space-y-3">
                    {eventStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: 'rgba(200, 75, 49, 0.1)', borderColor: 'rgba(200, 75, 49, 0.2)', borderWidth: '1px' }}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(200, 75, 49, 0.15)', color: '#C84B31' }}>
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-neue-haas-medium text-gray-700">{stat.label}</div>
                            <div className="text-xs font-neue-haas-regular text-gray-500">{stat.description}</div>
                          </div>
                        </div>
                        <div className="text-lg font-neue-haas-medium" style={{ color: '#C84B31' }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar Integration */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(200, 75, 49, 0.15)' }}>
                      <CalendarCheck className="w-5 h-5" style={{ color: '#C84B31' }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-neue-haas-medium text-gray-700">Calendar integration</div>
                      <div className="text-xs font-neue-haas-regular text-gray-500">Sync with all platforms</div>
                    </div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C84B31' }}></div>
                  </div>
                  <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ width: '85%', background: 'linear-gradient(to right, #C84B31, #D55A3F)' }}
                    ></div>
                  </div>
                  <div className="text-xs font-neue-haas-regular text-gray-500 mt-2">Processing event invitations</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl opacity-20 shadow-lg"
              style={{ background: 'linear-gradient(to bottom right, #C84B31, #D55A3F)' }}
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full opacity-20 shadow-lg"
              style={{ background: 'linear-gradient(to bottom right, #D55A3F, #E07856)' }}
            ></motion.div>
            
            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-10"></div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Header Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #C84B31, #D55A3F)' }}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-neue-haas-medium text-gray-700">
                  Event Management
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
               <h1 className="text-5xl lg:text-6xl font-neue-haas-medium text-gray-900 leading-tight">
  Event
  <span className="block bg-orange bg-clip-text text-transparent font-canela">
    Management
  </span>
</h1>

<p className="text-xl font-neue-haas-regular text-muted mt-6 leading-relaxed max-w-2xl">
  <span className="font-medium block text-orange">
    Effortless Matchmaking Events at Scale
  </span>
  Plan &amp; manage community gatherings, premium meets, or virtual events from a single dashboard.
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
              {events.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;

                return (
                  <motion.div
                    key={feature.id}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isActive ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/80"
                    }`}
                    style={isActive ? { borderColor: 'rgba(200, 75, 49, 0.2)', borderWidth: '1px' } : { borderColor: 'transparent', borderWidth: '1px' }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? "shadow-lg" : "bg-gray-100"}`}
                        style={isActive ? { background: 'linear-gradient(to bottom right, #C84B31, #D55A3F)' } : {}}
                      >
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-white" : "text-muted"}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-neue-haas-medium transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                            {feature.title}
                          </h3>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: '#C84B31' }}
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
                              <p className="text-muted text-sm font-neue-haas-regular mt-2">
                                {feature.description}
                              </p>
                              <div className="flex items-center gap-2 mt-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C84B31' }}></div>
                                <span className="text-sm font-neue-haas-medium" style={{ color: '#C84B31' }}>
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
        </div>
      </div>
    </section>
  );
};

export default EventInvites;
