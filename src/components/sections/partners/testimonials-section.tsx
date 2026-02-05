"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PencilOffIcon, Quote } from "lucide-react";
import AnimatedBackground from "./animated-background";
import SectionHeader from "./section-header";
import { Testimonial, testimonialData } from "@/data/partners/testimonial-data";

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showLetter, setShowLetter] = useState<boolean>(false);

  const testimonials: Testimonial[] = testimonialData;

  // Navigate to next testimonial
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowLetter(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowLetter(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Navigate to specific testimonial
  const goToTestimonial = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setShowLetter(false);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const currentTestimonial = testimonials[current];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/50 via-white/40 to-surface/30 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          badgeIcon={PencilOffIcon}
          badgeText="What Our Clients Say"
          title="Customer Testimonials"
          highlightText="Real Experiences"
          description="Discover how our solutions have empowered businesses to achieve remarkable results and lasting impact."
        />

        <div className="relative mt-10">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange to-accent rounded-full flex items-center justify-center shadow-2xl z-20 backdrop-blur-xl border border-white/30 animate-bounce-slow">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Testimonial Card */}
          <div
            className={`relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 pt-16 overflow-hidden border border-white/40 transform transition-all duration-500 ease-out ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Decorative Backgrounds */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent opacity-30 rounded-br-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange/20 to-transparent opacity-30 rounded-tl-full animate-pulse delay-1000"></div>

            {/* Quote Text */}
            <p className="text-xl text-secondary leading-relaxed text-center font-light italic mb-10">
              {currentTestimonial.quote}
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 mb-6 group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange to-accent rounded-full blur-md opacity-60 group-hover:opacity-80 transition-all duration-500 animate-ping-slow"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-white/80 to-white/60 rounded-full flex items-center justify-center shadow-xl border border-white/50 overflow-hidden transform group-hover:scale-110 transition-all duration-500">
                  {showLetter ? (
                    <span className="text-2xl font-bold text-white">
                      {currentTestimonial.author.charAt(0)}
                    </span>
                  ) : (
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      onError={() => setShowLetter(true)}
                    />
                  )}
                </div>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-2">{currentTestimonial.author}</h4>
              <p className="text-muted font-medium">{currentTestimonial.role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center hover:bg-orange transition-all duration-500 ease-out group border border-white/40 hover:scale-110 hover:-translate-x-7"
          >
            <ChevronLeft className="w-5 h-5 text-secondary group-hover:text-white transition-transform duration-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl rounded-full shadow-xl flex items-center justify-center hover:bg-orange transition-all duration-500 ease-out group border border-white/40 hover:scale-110 hover:translate-x-7"
          >
            <ChevronRight className="w-5 h-5 text-secondary group-hover:text-white transition-transform duration-300" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-500 transform hover:scale-125 ${
                  index === current
                    ? "w-10 bg-gradient-to-r from-orange to-accent scale-110"
                    : "w-2 bg-surface/50 hover:bg-brown/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
