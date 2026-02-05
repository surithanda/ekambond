"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const profiles: any = {
    usa: [
      {
        name: "Jessica",
        age: 28,
        location: "New York",
        image: "/images/hero/humans/jessica.png",
      },
      {
        name: "Michael",
        age: 32,
        location: "California",
        image: "/images/hero/humans/michael.png",
      },
      {
        name: "Sarah",
        age: 29,
        location: "Texas",
        image: "/images/hero/humans/sarah.png",
      },
    ],
    india: [
      {
        name: "Aaradhya",
        age: 26,
        location: "Mumbai",
        image: "/images/hero/humans/aradhya.png",
      },
      {
        name: "Vivaan",
        age: 30,
        location: "Bangalore",
        image: "/images/hero/humans/Vivaan.png",
      },
      {
        name: "Devi",
        age: 27,
        location: "Delhi",
        image: "/images/hero/humans/devi.png",
      },
    ],
    canada: [
      {
        name: "Emma",
        age: 31,
        location: "Toronto",
        image: "/images/hero/humans/emma.png",
      },
      {
        name: "James",
        age: 33,
        location: "Vancouver",
        image: "/images/hero/humans/james.png",
      },
      {
        name: "Sophie",
        age: 28,
        location: "Montreal",
        image: "/images/hero/humans/sophie.png",
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-pink-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-section-image-two.png"
          alt="Global Connections"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 pt-20 max-w-full mx-auto">
        {/* Main Content Row */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column: Flags and Profile Cards */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-start gap-36 mt-10">
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
                          <h3 className="text-2xl lg:text-3xl font-canela  mb-1">
                            {profile.name}
                          </h3>
                          <p className="text-white/90 text-base font-canela lg:text-lg">
                            {profile.age} • {profile.location}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full flex justify-start mb-20">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-black font-neue-haas-bold">
              Powering the Future of
              <br />
              <span >
                Matrimony Platforms
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-accent font-canela ">
              Technology that empowers meaningful connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;