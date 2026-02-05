"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;
      setIsScrolled(scrollY > scrollThreshold);
      const progress = Math.min(scrollY / 200, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/services", label: "Services" },
    { href: "/partners", label: "Partners" },
    { href: "/pricing", label: "Pricing" },
    { href: "/meetpeople", label: "Meet People" },
  ];

  const getNavbarStyle = () => {
    if (!isScrolled) {
      return {
        background: "transparent",
        backdropFilter: "none",
        border: "none",
        boxShadow: "none",
      };
    }

    const opacity = 0.8 * scrollProgress;
    const blur = 20 * scrollProgress;

    return {
      background: `linear-gradient(
        135deg,
        rgba(255, 250, 245, ${opacity}) 0%,
        rgba(255, 248, 240, ${opacity * 0.8}) 50%,
        rgba(255, 245, 235, ${opacity * 0.6}) 100%
      )`,
      backdropFilter: `blur(${blur}px) saturate(180%)`,
      border: `1px solid rgba(255, 255, 255, ${0.3 * scrollProgress})`,
      boxShadow: `
        0 8px 32px rgba(210, 180, 140, ${0.2 * scrollProgress}),
        inset 0 1px 0 rgba(255, 255, 255, ${0.4 * scrollProgress}),
        inset 0 -1px 0 rgba(0, 0, 0, ${0.05 * scrollProgress})
      `,
    };
  };

  const getDesktopNavStyle = () => {
    if (!isScrolled) {
      return {
        background: "rgba(255, 250, 245, 0.4)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: "0 8px 32px rgba(210, 180, 140, 0.2)",
      };
    }

    const opacity = 0.95;
    const tint = 0.05 * scrollProgress;

    return {
      background: `linear-gradient(
        135deg,
        rgba(255, 253, 250, ${opacity}) 0%,
        rgba(255, 251, 245, ${opacity}) 50%,
        rgba(255, 249, 240, ${opacity}) 100%
      )`,
      backdropFilter: "blur(25px) saturate(200%)",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      boxShadow: `
        0 12px 40px rgba(210, 180, 140, ${0.15 + tint}),
        inset 0 1px 0 rgba(255, 255, 255, 0.9),
        inset 0 -1px 0 rgba(0, 0, 0, 0.05)
      `,
    };
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={getNavbarStyle()}
    >
      <div className="px-4 sm:px-6 lg:px-12 py-2 lg:py-4">
        <div className="max-w-full mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full shadow-lg relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "linear-gradient(45deg, #ff6b35, #ff8e53, #ff6b35)",
                  filter: "blur(8px)",
                  transform: "scale(1.1)",
                }}
              />
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
            </div>
            <p className="text-xl lg:text-2xl text-gray-900 font-semibold">Ekambond</p>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 rounded-full px-12 py-3.5 transition-all duration-500 ease-out"
            style={getDesktopNavStyle()}
          >
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 relative group
                    ${
                      isActive(link.href)
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700 hover:text-orange-600 cursor-pointer font-normal"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/get-started"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg inline-block"
              style={{
                background: "linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 p-2 rounded-xl transition-all duration-300"
            aria-label="Toggle menu"
            style={{
              background: isScrolled ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: isScrolled ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-800" />
            ) : (
              <Menu size={20} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 left-0 w-full h-screen transition-all duration-300 ease-out z-40 ${
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Mobile Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Content */}
        <div
          className="absolute top-0 left-0 right-0 mx-4 mt-20 rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(255, 253, 250, 0.98) 0%,
              rgba(255, 250, 245, 0.96) 50%,
              rgba(255, 248, 240, 0.94) 100%
            )`,
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow: `
              0 20px 40px rgba(210, 180, 140, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.9)
            `,
          }}
        >
          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block w-full text-left px-6 py-4 transition-all duration-200 border-b border-orange-50 last:border-b-0 ${
                  isActive(link.href) 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-gray-800 hover:bg-orange-50/50"
                }`}
              >
                <span className="text-base font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="px-4 py-4 border-t border-orange-100 bg-white/50">
            <Link
              href="/get-started"
              onClick={handleLinkClick}
              className="block w-full px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-300 text-center hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}