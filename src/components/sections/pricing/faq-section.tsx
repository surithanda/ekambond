"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ChevronDown,
  Star,
  Zap,
  Shield,
  Cpu,
  Database,
  Book,
} from "lucide-react";
import SectionHeader from "../partners/section-header";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "Can I upgrade or downgrade at any time?",
    answer:
      "Yes, you can modify your plan without losing any data.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    question:
      "Do you support multiple communities under one plan?",
    answer:
      "Yes. EkamBond is built for multi-community operations.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    question: "Do you offer training for matchmakers?",
    answer:
      "Yes, all paid plans include training modules.",
    icon: <Shield className="w-6 h-6" />,
  },
  // {
  //   question:
  //     "What happens if I consume more CDN bandwidth than what's included in my plan?",
  //   answer:
  //     "If you go over the CDN bandwidth allowance for your paid plan you hit a soft limit, which means you will be billed for the average until you reach a hard limit, after that you need to upgrade to a higher plan. If you are on the free plan and you go over your allowance, you have to upgrade to paid plan.",
  //   icon: <Cpu className="w-6 h-6" />,
  // },
  // {
  //   question:
  //     "If I want to transfer a repository to a new owner, will my card details be cleared on transfer?",
  //   answer:
  //     "Your payment information stays secure and private. When transferring ownership, only repository access changes - your billing remains protected.",
  //   icon: <Star className="w-6 h-6" />,
  // },
];

function FloatingOrbits() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-surface/20 rounded-full"
          style={{
            width: 200 + i * 150,
            height: 200 + i * 150,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function LiquidBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-xl opacity-20 bg-white/30 ${className}`}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function GlassCard({
  children,
  className,
  isOpen = false,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dampen = 40;
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const rotateXSpring = useSpring(rotateX, { damping: 30, stiffness: 300 });
  const rotateYSprint = useSpring(rotateY, { damping: 30, stiffness: 300 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = event.clientX - rect.left;
    const mouseYRelative = event.clientY - rect.top;
    const xPos = mouseXRelative - width / 2;
    const yPos = mouseYRelative - height / 2;

    mouseX.set(xPos);
    mouseY.set(yPos);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl border border-white/30 backdrop-blur-2xl bg-white/10 shadow-2xl ${className} ${
        isOpen ? "ring-2 ring-orange/30" : ""
      }`}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSprint,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {/* Liquid Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <LiquidBlob className="w-32 h-32 -top-8 -left-8" />
        <LiquidBlob className="w-40 h-40 -bottom-10 -right-10" />
        <LiquidBlob className="w-24 h-24 top-1/2 left-1/4" />
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-orange/10 opacity-0"
        animate={{ opacity: isOpen ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function GlowingParticle({ index }: { index: number }) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setPosition({
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
    });
  }, []);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-orange/40 rounded-full blur-sm"
      initial={{ x: position.x, y: position.y, scale: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.2,
      }}
    />
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-primary relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange/10 via-transparent to-transparent"></div>
        <FloatingOrbits />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <GlowingParticle key={i} index={i} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader
          badgeIcon={Book}
          badgeText="FAQ"
          title="Frequently Asked"
          highlightText="Questions "
          description="Empowering social connections through meaningful partnerships and community."
        />

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 relative">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <GlassCard
                className="h-full cursor-pointer"
                isOpen={openIndex === index}
              >
                <div className="p-8 h-full relative">
                  <div className="relative z-10">
                    {/* Icon and Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 rounded-xl bg-white/20 text-secondary shadow-2xl backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:text-orange"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {faq.icon}
                      </motion.div>

                      <motion.button
                        onClick={() => toggleFAQ(index)}
                        className={`p-2 rounded-lg transition-all duration-300 backdrop-blur-sm border ${
                          openIndex === index
                            ? "bg-orange/20 text-orange border-orange/30"
                            : "bg-white/20 text-secondary border-white/30 group-hover:bg-orange/20 group-hover:text-orange group-hover:border-orange/30"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>
                    </div>

                    {/* Question */}
                    <h3 className="text-xl font-neue-haas-medium text-secondary mb-4 pr-8 group-hover:text-orange transition-colors duration-300">
                      {faq.question}
                    </h3>

                    {/* Answer with Smooth Animation */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary/80 font-neue-haas-regular leading-relaxed backdrop-blur-sm group-hover:text-orange/80 transition-colors duration-300"
                          >
                            {faq.answer}
                          </motion.p>

                          {/* Decorative Element */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.2 }}
                            className="h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent mt-4"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
    </section>
  );
}
