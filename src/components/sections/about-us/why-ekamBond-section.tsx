"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const keyAdvantages = [
  {
    title: "White-Labeled Community Platforms",
    description: "Create unique platforms for communities while running on one powerful core.",
  },
  {
    title: "Cross-Community Search with Controls",
    description: "Connect users across compatible communities or restrict access based on your preferences.",
  },
  {
    title: "Verification-Driven Trust",
    description:
      "Document validation, photo verification, background screening, and trust badges ensure genuine profiles.",
  },
  {
    title: "Built for Every Operator",
    description: "Matchmakers, community leaders, nonprofits, and enterprises all thrive on the EkamBond ecosystem.",
  },
]

const WhyEkamBondSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-5 bg-primary">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
       <motion.div
  ref={ref}
  initial={{ opacity: 0, y: -20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="mb-10 md:mb-12 text-left"
>
  <h2 className="text-4xl md:text-5xl font-neue-haas-medium text-secondary mb-4 leading-snug">
    Why EkamBond?
  </h2>

  <motion.div
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.7, delay: 0.15 }}
    className="max-w-3xl"
  >
    <p className="text-base md:text-lg font-neue-haas-regular text-secondary/60 mb-2">
      <span className="font-neue-haas-medium text-secondary block mb-2 leading-tight">
        One Platform. Every Community. Infinite Possibilities.
      </span>

      <span className="text-sm md:text-base text-secondary/75 leading-relaxed">
        EkamBond enables you to launch fully branded community matrimony sites—such as
        Padmashali, Gouda, Chaturvarnam, regional groups, or private bureaus—on a single
        secure and scalable platform.
      </span>
    </p>
  </motion.div>
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

          <div className="relative border border-secondary/20 rounded-3xl bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-secondary/30 transition-all duration-300 p-4 md:p-6">
            {/* Key Advantages Header */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px bg-secondary/20 flex-1"></div>
              <h3 className="text-xl md:text-2xl font-neue-haas-medium text-secondary whitespace-nowrap">
                Key Advantages
              </h3>
              <div className="h-px bg-secondary/20 flex-1"></div>
            </div>

            {/* Advantages Grid - 2 Left, 2 Right */}
            <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
              {keyAdvantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange/20 flex items-center justify-center">
                    <span className="text-orange text-2xl font-light">✱</span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-md md:text-lg font-neue-haas-medium text-secondary mb-3 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-secondary/70 text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyEkamBondSection
