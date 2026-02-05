"use client";

import SecondaryButton from "@/components/button/secondary-button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface FeaturesSectionProps {
  badgeText?: any;
  title?: string;
  highlightedText?: string;
  description?: string;
  buttonText?: string;
}

export default function HeroSectionDynamic({
  badgeText = "AI-Powered Features",
  title = "Discover Our",
  highlightedText = "Advanced  Capabilities",
  description = "Step into the future of matrimony technology with innovative, secure, and culturally aware features—built to create meaningful connections with confidence.",
  buttonText = "Learn More",
}: FeaturesSectionProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const x1 = useTransform(mouseX, [0, windowSize.width], [-20, 20]);
  const y1 = useTransform(mouseY, [0, windowSize.height], [-20, 20]);
  const x2 = useTransform(mouseX, [0, windowSize.width], [20, -20]);
  const y2 = useTransform(mouseY, [0, windowSize.height], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Modern gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, "rgba(234, 88, 12, 0.03)");
      gradient.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dynamic connections
      ctx.strokeStyle = "#EA580C";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.globalAlpha = (1 - distance / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles with glow effect
      particles.forEach((p) => {
        // Glow effect
        ctx.globalAlpha = p.opacity * 0.3;
        ctx.fillStyle = "#EA580C";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Main particle
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#F8FAFC";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] bg-primary py-12 overflow-hidden flex items-center justify-center"
    >
      {/* Enhanced Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Modern Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #EA580C 0%, transparent 70%)",
            x: x1,
            y: y1,
          }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #DC2626 0%, transparent 70%)",
            x: x2,
            y: y2,
          }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Central Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="modernGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="0.5" fill="#6B7280" />
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#6B7280"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)" />
        </svg>
      </div>

      {/* Animated Border Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="20"
          y="20"
          width="calc(100% - 40)"
          height="calc(100% - 40)"
          stroke="url(#borderGradient)"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Modern Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-orange" />
            </motion.div>
            <span className="text-black text-sm font-neue-haas-medium tracking-wide">
              {badgeText}
            </span>
          </motion.div>

          {/* Modern Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-neue-haas-bold text-black mb-6 tracking-tight leading-tight">
              {title}
              <br />
              <span className="relative inline-block">
                <span className="bg-orange bg-clip-text text-transparent">
                  {highlightedText}
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-orange rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Modern Description */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-muted mb-12 max-w-4xl mx-auto leading-relaxed font-neue-haas-regular tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Modern Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SecondaryButton 
              label={buttonText} 
              onClick={onButtonClick}
              
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary via-primary/80 to-transparent pointer-events-none" />

      {/* Mouse Follow Element */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-orange/20 backdrop-blur-sm pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}