"use client";
import React from "react";
import { Home, ArrowLeft, Compass } from "lucide-react";

const NotFound: React.FC = () => {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-primary overflow-hidden">
      {/* Liquid Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[10%] w-[800px] h-[800px] bg-orange/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-surface/10 rounded-full blur-3xl animate-blob-slow" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Minimal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-12 animate-fade-in shadow-2xl">
          <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
          <span className="text-sm font-neue-haas-medium text-muted">404 Error</span>
        </div>

        {/* Large Glass 404 */}
        <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="absolute inset-0 flex items-center justify-center blur-3xl opacity-30">
            <h1 className="text-[200px] font-neue-haas-medium text-orange">404</h1>
          </div>
          <h1 className="relative text-[140px] sm:text-[200px] font-neue-haas-medium leading-none tracking-tighter bg-gradient-to-br from-orange via-orange/80 to-accent bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-neue-haas-medium text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-muted mb-12 max-w-md mx-auto animate-fade-in-up font-neue-haas-medium" style={{ animationDelay: "0.3s" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Glass Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up font-neue-haas-medium" style={{ animationDelay: "0.4s" }}>
          {/* Primary Button */}
          <button
            onClick={() => window.location.href = '/'}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange to-orange/90 text-white rounded-2xl font-medium overflow-hidden shadow-2xl hover:shadow-orange/50 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </div>
          </button>

          {/* Glass Button */}
          <button
            onClick={handleGoBack}
            className="group font-neue-haas-medium px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-secondary rounded-2xl font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Go Back</span>
            </div>
          </button>
        </div>

        {/* Bottom Help Link */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button className="group inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300">
            <Compass className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-sm font-neue-haas-medium">Need help?</span>
          </button>
        </div>
      </div>

      {/* Floating Particles - Static positions to avoid hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "10%", top: "20%", animationDelay: "0s", animationDuration: "12s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "25%", top: "60%", animationDelay: "1s", animationDuration: "14s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "40%", top: "10%", animationDelay: "2s", animationDuration: "11s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "55%", top: "75%", animationDelay: "0.5s", animationDuration: "13s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "70%", top: "40%", animationDelay: "1.5s", animationDuration: "15s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "85%", top: "15%", animationDelay: "3s", animationDuration: "10s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "15%", top: "85%", animationDelay: "2.5s", animationDuration: "12s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "30%", top: "35%", animationDelay: "4s", animationDuration: "14s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "50%", top: "50%", animationDelay: "1s", animationDuration: "11s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "65%", top: "90%", animationDelay: "3.5s", animationDuration: "13s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "80%", top: "55%", animationDelay: "0.8s", animationDuration: "15s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "20%", top: "70%", animationDelay: "2.2s", animationDuration: "10s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "45%", top: "25%", animationDelay: "4.5s", animationDuration: "12s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "75%", top: "5%", animationDelay: "1.8s", animationDuration: "14s" }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle" style={{ left: "90%", top: "80%", animationDelay: "3.2s", animationDuration: "11s" }} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.95);
          }
        }

        @keyframes blobSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.05);
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(30px);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }

        .animate-blob-slow {
          animation: blobSlow 15s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: floatParticle 15s linear infinite;
        }

        .animation-delay-2000 { 
          animation-delay: 2s; 
        }
      `}</style>
    </section>
  );
};

export default NotFound;