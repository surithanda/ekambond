"use client"
import React, { useState } from 'react';

export default function CoreCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<any>(null);

  const capabilities  = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI-Powered Matchmaking',
      description:
        'Advanced AI models analyze lifestyle, values, preferences, and compatibility to deliver personalized and meaningful match suggestions that truly resonate.',
      features: null
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Background & Identity Verification',
      description: 'Multi-layer verification ensuring trust and safety:',
      features: [
        'Document checks',
        'Photo & facial validation',
        'Phone/email verification',
        'Social media checks',
        'Optional education/employment verification'
      ]
    },
    {
      id: 3,
      icon: '🌍',
      title: 'Global & Cross-Community Search',
      description: 'Search profiles across all EkamBond-powered communities with:',
      features: [
        '10+ advanced filters',
        'Saved searches & alerts',
        'Analytics & insights',
        'Multi-language support'
      ]
    },
    {
      id: 4,
      icon: '👤',
      title: 'Profile Management',
      description: 'Rich, secure profile structures with:',
      features: [
        'Advanced profile builder',
        'Consent-based privacy controls',
        'Admin moderation tools',
        'AI-assisted photo verification'
      ]
    },
    {
      id: 5,
      icon: '✨',
      title: 'Horoscope Integration',
      description: 'Culturally aligned features including:',
      features: [
        'Vedic/Kundli matching',
        'Manglik checks',
        'Planetary charts',
        'Astrologer consultations'
      ]
    },
    {
      id: 6,
      icon: '🎉',
      title: 'Event Invites & Management',
      description: 'Host community events, virtual meets, or premium sessions with:',
      features: ['Automated invites', 'RSVP tracking', 'Calendar sync', 'Event analytics']
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: '4s' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* Header */}
          <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent tracking-tight">
              Core Capabilities
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-200 font-light px-4">
              Everything You Need to Launch and Scale Your Matrimony Platform
            </p>
          </header>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {capabilities.map((capability, index) => (
              <div
                key={capability.id}
                onMouseEnter={() => setHoveredCard(capability.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white border-opacity-10 transition-all duration-500 cursor-pointer hover:bg-opacity-10 hover:border-purple-400 hover:border-opacity-30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500 hover:shadow-opacity-20 animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                {/* Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-2xl sm:text-3xl">{capability.icon}</span>
                </div>

                {/* Title */}
                <h2 className="relative text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {capability.title}
                </h2>

                {/* Description */}
                <p className="relative text-purple-200 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                  {capability.description}
                </p>

                {/* Features */}
                {capability.features && (
                  <ul className="relative space-y-2 sm:space-y-3">
                    {capability.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start text-purple-100 text-sm sm:text-base transition-all duration-300 ${
                          hoveredCard === capability.id ? 'translate-x-2' : ''
                        }`}
                      >
                        <span className="text-green-400 font-bold mr-2 sm:mr-3 mt-0.5 text-base sm:text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative bg-white bg-opacity-5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-white border-opacity-10 text-center animate-fadeInUp delay-700">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Ready to Transform Matchmaking?
            </h3>
            <p className="text-purple-200 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
              Join the future of meaningful connections with EkamBond
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
