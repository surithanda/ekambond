"use client";
import SecondaryButton from "@/components/button/secondary-button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServicesHeroSection: React.FC = () => {
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ["easeOut"] } },
  };

  const float: any = {
    animate: { y: [-10, 10], transition: { yoyo: Infinity, duration: 3, ease: ["easeInOut"] } },
  };

  const pulse: any = {
    animate: { scale: [1, 1.05, 1], transition: { yoyo: Infinity, duration: 2, ease: ["easeInOut"] } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#EFECE6] to-[#F5F2EC]">
      {/* Background decorative elements */}
      <motion.div
        className="absolute right-0 top-20 h-96 w-96 rounded-full opacity-10"
        style={{ backgroundColor: "#D9A91E" }}
        variants={float}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full opacity-10"
        style={{ backgroundColor: "#1B3A6E" }}
        variants={float}
        animate="animate"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 relative">
          {/* Left Column - Text Content */}
          <motion.div
            className="lg:col-span-6 z-10 space-y-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-neue-haas-bold leading-[0.95] tracking-tight text-[#0F2145]">
              Complete
              <br />
              matrimony
              <br />
              <span className="bg-gradient-to-r from-[#D9A91E] to-[#1B3A6E] bg-clip-text text-transparent font-neue-haas-bold">
                solutions
              </span>{" "}
              for
              <br />
              every need
            </h1>

            {/* Description */}
           <p className="max-w-lg text-xl leading-relaxed font-neue-haas-regular text-muted">
   <span className="font-medium">Complete Matrimony Solutions for Every</span>. <br/> 
  Whether you're launching a new platform or upgrading an established matchmaking service, 
  EkamBond Matrimony Enterprise Services delivers a fully operational, white-labeled platform 
  built for reliable growth.  

  From secure verification and AI-powered matching to streamlined operations and scalable 
  infrastructure, we help you offer a trusted, effortless experience for every user.  

  {/* From platform services to custom development, we provide everything you need to build and 
  scale your matrimony business with excellence. */}
</p>


            {/* CTA Buttons */}
            <div className="flex items-center gap-6">
              {/* <motion.button
                className="rounded-full px-12 py-5 text-lg font-neue-haas-medium text-[#EFECE6] bg-[#0F2145] transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button> */}
              <SecondaryButton label="Get Started" />
            </div>

            {/* Stats */}
            <motion.div className="flex items-center gap-8 pt-8" variants={fadeInUp}>
              <div className="flex -space-x-4">
                <Image
                  src="/images/hero/indian/indian-one.webp"
                  alt="Profile 1"
                  className="h-14 w-14 rounded-full border-4"
                  style={{ borderColor: "#EFECE6" }}
                  width={56}
                  height={56}
                />
                <Image
                  src="/images/hero/indian/indian-three.webp"
                  alt="Profile 3"
                  className="h-14 w-14 rounded-full border-4"
                  style={{ borderColor: "#EFECE6" }}
                  width={56}
                  height={56}
                />
                <Image
                  src="/images/hero/indian/indian-two.webp"
                  alt="Profile 2"
                  className="h-14 w-14 rounded-full border-4"
                  style={{ borderColor: "#EFECE6" }}
                  width={56}
                  height={56}
                />
                <Image
                  src="/images/hero/indian/indian-four.webp"
                  alt="Profile 4"
                  className="h-14 w-14 rounded-full border-4"
                  style={{ borderColor: "#EFECE6" }}
                  width={56}
                  height={56}
                />
              </div>
              <div>
                <div className="text-5xl font-neue-haas-light text-[#0F2145]">1,000+</div>
                <div className="text-sm font-neue-haas-medium uppercase tracking-wider text-muted">
                  Trusted Partners
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            className="lg:col-span-6 relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                className="relative z-10 aspect-[4/5] max-w-lg overflow-hidden rounded-3xl shadow-2xl ml-auto"
                variants={pulse}
                animate="animate"
              >
                <Image
                  src="/images/hero/services/service-hero.png"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                  width={448}
                  height={560}
                />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 z-20 w-80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm bg-[rgba(239,236,230,0.95)] border border-[rgba(26,26,26,0.1)]"
                variants={float}
                animate="animate"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[#D9A91E]"></div>
                    <div>
                      <div className="text-sm font-neue-haas-medium text-muted">
                        Success Rate
                      </div>
                      <div className="text-2xl font-neue-haas-light text-[#0F2145]">
                        98.5%
                      </div>
                    </div>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#C2A98C]">
                    <motion.div
                      className="h-full rounded-full bg-[#D9A91E]"
                      initial={{ width: 0 }}
                      animate={{ width: "98.5%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-sm font-neue-haas-regular text-muted">
                    Active matches this month
                  </div>
                </div>
              </motion.div>

              {/* Accent Badge */}
              <motion.div
                className="absolute right-8 top-8 z-30 rounded-full px-4 py-2 text-sm font-neue-haas-medium shadow-lg bg-[#D9A91E] text-[#0F2145]"
                whileHover={{ scale: 1.1 }}
              >
                Premium
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
