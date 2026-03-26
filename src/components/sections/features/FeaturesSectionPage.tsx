'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function FeaturesSectionPage() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  const x1 = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);
  const x2 = useTransform(mouseX, [0, window.innerWidth], [15, -15]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#D9A91E'; // Orange-600
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#F8FAFC'; // slate-50
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
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-primary py-12 overflow-hidden flex items-center justify-center">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Grid Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6B7280" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Smaller Radial Gradient Overlays */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, #D9A91E 0%, transparent 70%)',
          x: x1,
          y: y1,
          top: '15%',
          left: '15%',
        }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, #1B3A6E 0%, transparent 70%)',
          x: x2,
          y: y2,
          bottom: '15%',
          right: '15%',
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0" y1="15%" x2="100%" y2="15%"
          stroke="#6B7280"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.line
          x1="0" y1="85%" x2="100%" y2="85%"
          stroke="#6B7280"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-gray-700 text-xs font-medium">AI-Powered Features</span>
          </motion.div>

          {/* Smaller Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Discover Our
            <br />
            <span className="relative inline-block mt-1">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Advanced Features
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 to-orange-500"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore AI-driven matchmaking, secure verification, and seamless user experiences designed to connect you meaningfully.
          </motion.p>

          {/* Smaller CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="relative px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-base overflow-hidden group flex items-center gap-2 border border-gray-200 shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors">Learn More</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary via-primary/50 to-transparent pointer-events-none" />
    </section>
  );
}