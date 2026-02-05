"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/data/faq/faq-data";

export default function FAQSectionTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden px-4 py-20 sm:px-6 lg:px-12 mt-20">
      {/* Decorative Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-300 to-amber-300 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative">
              <h2 className="font-neue-haas-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter text-gray-900 relative">
                Frequently
                <br />
                <span className="relative inline-block">
                  asked
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-3 bg-amber-300/40 -z-10"
                  />
                </span>
                <br />
                questions
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-muted text-lg font-neue-haas-regular leading-relaxed max-w-md"
              >
                Everything you need to know about working with us. Can't find
                the answer you're looking for? Reach out to our team.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <div className="lg:col-span-7 space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -inset-0.5 bg-gradient-to-r from-white/50 via-gray-100/50 to-white/50 rounded-3xl blur-sm"
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  layout
                  className="relative backdrop-blur-xl bg-white/40 rounded-3xl overflow-hidden transition-all duration-500 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]"
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? "0 8px 32px 0 rgba(31, 38, 135, 0.12)"
                        : "0 8px 32px 0 rgba(31, 38, 135, 0.08)",
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative w-full px-7 py-7 sm:px-9 sm:py-8 flex items-start justify-between gap-6 text-left group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-neue-haas-medium text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight pr-4 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-shrink-0 mt-1"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-gray-900/10"
                            : "bg-gray-900/5 group-hover:bg-gray-900/10"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 text-muted transition-colors duration-300" />
                      </div>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          className="px-7 pb-8 sm:px-9 sm:pb-9"
                        >
                          <div className="pt-2 border-t border-gray-300/50">
                            <p className="font-neue-haas-regular text-muted text-base sm:text-lg leading-relaxed whitespace-pre-line mt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <Link href="/contact-us">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-8 backdrop-blur-xl bg-white/40 rounded-3xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]"
              >
                <h3 className="font-neue-haas-medium text-2xl text-gray-900 mb-3">
                  Still have questions?
                </h3>
                <p className="font-neue-haas-regular text-muted mb-5 leading-relaxed">
                  Can't find the answer you're looking for? Please chat to our
                  friendly team.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-orange text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get in touch
                </motion.button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
