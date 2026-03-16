"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SecondaryButton from "@/components/button/secondary-button";

const ContactHero = () => {
  const avatars = [
    {
      id: 1,
      position: "top-[10%] left-[8%]",
      delay: 0,
      image: "/images/hero/indian/indian-one.webp",
    },
    {
      id: 2,
      position: "top-[35%] left-[3%]",
      delay: 0.1,
      image: "/images/hero/indian/indian-two.webp",
    },
    {
      id: 3,
      position: "bottom-[25%] left-[15%]",
      delay: 0.2,
      image: "/images/hero/indian/indian-three.webp",
    },
    {
      id: 4,
      position: "top-[12%] right-[10%]",
      delay: 0.3,
      image: "/images/hero/indian/indian-four.webp",
    },
    {
      id: 5,
      position: "top-[40%] right-[5%]",
      delay: 0.4,
      image: "/images/hero/indian/indian-one.webp",
    },
    {
      id: 6,
      position: "bottom-[20%] right-[12%]",
      delay: 0.5,
      image: "/images/hero/indian/indian-two.webp",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 py-24 px-6 overflow-hidden min-h-[700px] flex items-center justify-center mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      {/* Animated Profile Avatars */}
      {avatars.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.position} w-20 h-20 rounded-full border-4 border-secondary/20 shadow-2xl overflow-hidden`}
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: avatar.delay,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            zIndex: 10,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={avatar.image}
            alt="Team member"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-neue-haas-bold text-secondary mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We 're here to help
          <span className="block bg-accent bg-clip-text text-transparent">
            You Suceed
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-neue-haas-regular text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Get the support you need for your business. Your expert team is
          dedicated to
          <span className="text-secondary font-neue-haas-medium">
            {" "}
            running your business efficiently
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <SecondaryButton label="Explore Support Plans"/>
        </motion.div>

    
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
};

export default ContactHero;
