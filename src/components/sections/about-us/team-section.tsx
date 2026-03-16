"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      image: "/images/hero/indian/team-one.png", // Indian male
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      image: "/images/hero/indian/team-two.png", // Indian female
    },
    {
      name: "Ananya Kapoor",
      role: "Technology Lead",
      image: "/images/hero/indian/team-three.png", // Indian female
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-5xl md:text-6xl font-neue-haas-medium text-secondary mb-6 leading-tight">
            Meet The Team
          </h3>
        </motion.div>

      
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
        
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-3xl font-neue-haas-regular text-secondary leading-tight"
          >
            Ekam bond is build by a mission - driver team
          </motion.h2>

          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted font-neue-haas-regular leading-relaxed self-end"
          >
            Experienced professionals passionate about transforming the
            matrimony industry through techonology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
             
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

       
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-neue-haas-medium text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted text-sm font-neue-haas-regular">
                    {member.role}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-muted hover:text-accent transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
