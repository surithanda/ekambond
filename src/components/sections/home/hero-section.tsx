"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const profiles: any = {
    india: [
      {
        name: "Mumbai Enterprise Hub",
        capacity: "1.2M+ Profiles",
        location: "Maharashtra Data Node",
        image: "/images/rebrand/leader.png",
      },
      {
        name: "Bangalore Innovation Hub",
        capacity: "AI Optimization",
        location: "Karnataka Node",
        image: "/images/rebrand/tech_hub.png",
      },
      {
        name: "Delhi Capital Network",
        capacity: "Cloud Native",
        location: "NCR Gateway",
        image: "/images/rebrand/couple.png",
      },
    ],
    usa: [
      {
        name: "US Enterprise Hub",
        capacity: "Network Leader",
        location: "New York Terminal",
        image: "/images/rebrand/usa_leader.png",
      },
      {
        name: "Silicon Valley Node",
        capacity: "AI Matchmaker",
        location: "California Core",
        image: "/images/rebrand/usa_tech.png",
      },
      {
        name: "America Diaspora Center",
        capacity: "Premium Reach",
        location: "Texas Bureau",
        image: "/images/rebrand/usa_couple.png",
      },
    ],
    canada: [
      {
        name: "Canada Legacy Node",
        capacity: "Verified Trust",
        location: "Toronto Hub",
        image: "/images/rebrand/canada_leader.png",
      },
      {
        name: "Toronto Tech Matrix",
        capacity: "High Capacity",
        location: "Ontario Engine",
        image: "/images/rebrand/canada_tech.png",
      },
      {
        name: "Vancouver Social Hub",
        capacity: "Community Link",
        location: "BC Gateway",
        image: "/images/rebrand/canada_couple.png",
      },
    ],
  };

  const countries = [
    { id: "usa", name: "USA", flag: "🇺🇸" },
    { id: "india", name: "India", flag: "🇮🇳" },
    { id: "canada", name: "Canada", flag: "🇨🇦" },
  ];

  const [activeCountry, setActiveCountry] = useState("india");
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentProfiles = profiles[activeCountry];

  const handleCountryChange = (countryId: any) => {
    setActiveCountry(countryId);
    setCurrentProfileIndex(0);
  };

  const getProfileCardStyle = (index: any) => {
    const isActive = index === currentProfileIndex;
    const isPrev = index === (currentProfileIndex - 1 + 3) % 3;
    const isNext = index === (currentProfileIndex + 1) % 3;

    if (isActive) {
      return { position: 0, zIndex: 30, scale: 1, opacity: 1 };
    } else if (isPrev) {
      return { position: -100, zIndex: 20, scale: 0.85, opacity: 0.5 };
    } else if (isNext) {
      return { position: 100, zIndex: 10, scale: 0.85, opacity: 0.5 };
    }
    return { position: 0, zIndex: 0, scale: 0.85, opacity: 0 };
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background Image with Strong Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/rebrand/tech_hub.png"
          alt="Global Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 pt-20 max-w-full mx-auto">
        {/* Main Content Row */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-12 mb-4 lg:mb-6">
          {/* Left Column: Flags and Profile Cards */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-start gap-40 mt-6">
            {/* Flags Section */}
            <div className="flex lg:flex-col gap-10  justify-center lg:justify-start">
              {countries?.map((country) => (
                <button
                  key={country.id}
                  onClick={() => handleCountryChange(country.id)}
                  className={`relative group transition-all duration-500 ${
                    activeCountry === country.id
                      ? "scale-110"
                      : "scale-100 hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl
                   backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-500
                   ${
                     activeCountry === country.id
                       ? "bg-gradient-to-br from-white/90 via-white/70 to-white/50 shadow-[0_8px_32px_rgba(255,255,255,0.4)]"
                       : "bg-gradient-to-br from-white/40 via-white/20 to-white/10"
                   }
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                   after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-br after:from-transparent after:via-white/10 after:to-transparent
                 `}
                  >
                    <span className="relative z-10 drop-shadow-lg">
                      {country.flag}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {activeCountry === country.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-[#C87B4C] to-[#E89A6F] rounded-full shadow-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Profile Cards with Smooth Animation */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[520px] flex-1 max-w-[360px] mx-auto lg:mx-0">
              {currentProfiles.map((profile: any, index: number) => {
                const style = getProfileCardStyle(index);
                return (
                  <motion.div
                    key={`${activeCountry}-${index}`}
                    className="absolute left-1/2 top-0"
                    initial={false}
                    animate={{
                      x: `calc(-50% + ${style.position}px)`,
                      scale: style.scale,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                    }}
                  >
                    {/* Profile Card */}
                    <div className="w-[280px] sm:w-[320px] lg:w-[360px] h-[380px] sm:h-[450px] lg:h-[480px] rounded-3xl overflow-hidden bg-white shadow-2xl">
                      <div className="relative h-full">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/30 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                          <span className="bg-gradient-to-r from-[#C87B4C] to-[#E89A6F] bg-clip-text text-transparent">
                            {
                              countries.find((c) => c.id === activeCountry)
                                ?.name
                            }
                          </span>
                        </div>
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-2xl lg:text-3xl font-neue-haas-bold mb-1">
                            {profile.name}
                          </h3>
                          <p className="text-white/90 text-base font-neue-haas-medium lg:text-lg">
                            {profile.capacity} • {profile.location}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: AI Matrimony Network Image */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-center mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[750px] xl:max-w-[900px] 2xl:max-w-[1000px] aspect-square rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.6)] border border-white/5"
            >
              <img
                src="/images/rebrand/network_globe.png"
                alt="Global Matrimony Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-orange-400/20 mix-blend-overlay" />
              
              {/* Decorative Glow - Extra Intensity for Large Screens */}
              <div className="absolute -inset-20 bg-indigo-500/30 blur-[150px] -z-10 opacity-70" />
              <div className="absolute -bottom-20 -right-20 bg-orange-500/10 blur-[120px] -z-10 opacity-40 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full flex justify-start mb-12">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-secondary font-neue-haas-bold">
              Powering the Global
              <br />
              <span className="text-accent underline decoration-orange decoration-4 underline-offset-8">
                Indian Diaspora
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-accent font-canela max-w-2xl">
              Scalable matrimony infrastructure for Bharat's expansion across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;