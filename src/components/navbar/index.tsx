"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    { href: "/franchise", label: "Franchise" },
    { href: "/blog", label: "Blog" },
    // { href: "/team", label: "Team" }, // hidden — coming soon
    { href: "/careers", label: "Careers" },
    { href: "/download-app", label: "Get App" },
  ];

  // Always solid white frosted-glass navbar — scroll only deepens the shadow slightly
  const getNavbarStyle = () => ({
    background: "rgba(255, 255, 255, 0.96)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderBottom: "1px solid rgba(27, 58, 110, 0.10)",
    boxShadow: isScrolled
      ? "0 4px 24px rgba(27, 58, 110, 0.12)"
      : "0 2px 8px rgba(27, 58, 110, 0.06)",
  });

  // Desktop nav pill — always white
  const getDesktopNavStyle = () => ({
    background: "rgba(255, 255, 255, 0.88)",
    backdropFilter: "blur(25px) saturate(200%)",
    border: "1px solid rgba(27, 58, 110, 0.10)",
    boxShadow: "0 4px 16px rgba(27, 58, 110, 0.08)",
  });

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={getNavbarStyle()}
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-2 lg:py-3">
        <div className="max-w-full mx-auto flex items-center justify-between gap-2">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            {/* Logo — enlarged */}
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex-shrink-0">
              <Image
                src="/images/ekambond-logo.png"
                alt="EkamBond Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none gap-0.5" style={{ width: "fit-content" }}>
              <span
                className="text-lg lg:text-2xl xl:text-3xl font-extrabold whitespace-nowrap"
                style={{ color: "#1B3A6E", letterSpacing: "-0.02em" }}
              >
                EkamBond
              </span>
              <span
                className="text-[8px] lg:text-[10px] uppercase font-semibold block"
                style={{
                  color: "#D9A91E",
                  letterSpacing: "0.06em",
                  width: "100%",          /* capped to EkamBond text width */
                  lineHeight: "1.3",
                }}
              >
                Matrimony Partner Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex flex-1 justify-center mx-2 xl:mx-4"
          >
            <div
              className="flex items-center rounded-full px-4 xl:px-8 py-2.5 transition-all duration-500 ease-out overflow-x-auto max-w-full"
              style={getDesktopNavStyle()}
            >
              <div className="flex items-center gap-3 xl:gap-5 2xl:gap-7 flex-nowrap">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs xl:text-sm tracking-wide transition-all duration-300 relative group pb-0.5 font-medium whitespace-nowrap flex-shrink-0`}
                    style={{
                      color: isActive(link.href) ? "#1B3A6E" : "#4B5563",
                    }}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      style={{ background: "#D9A91E" }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <Link
              href="/register"
              className="px-3 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              style={{ background: "rgba(200,48,42,0.10)", color: "#C8302A", border: "1.5px solid rgba(200,48,42,0.25)" }}
            >
              Register
            </Link>
            <Link
              href="/register"
              className="px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 hover:scale-105 inline-block whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)",
                color: "#FFFFFF",
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
              background: "rgba(27, 58, 110, 0.06)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(27, 58, 110, 0.12)",
            }}
          >
            {isMenuOpen ? (
              <X size={20} style={{ color: "#1B3A6E" }} />
            ) : (
              <Menu size={20} style={{ color: "#1B3A6E" }} />
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
          className="absolute inset-0 bg-black/25 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className="absolute top-0 left-0 right-0 mx-4 mt-20 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.97)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(27, 58, 110, 0.12)",
            boxShadow: `
              0 20px 40px rgba(27, 58, 110, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.9)
            `,
          }}
        >
          {/* Mobile Logo Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ borderColor: "rgba(27,58,110,0.08)" }}>
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/images/ekambond-logo.png"
                alt="EkamBond Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: "#1B3A6E" }}>EkamBond</p>
              <p className="text-[10px] tracking-widest uppercase" style={{ color: "#D9A91E" }}>Matrimony Partner Network</p>
            </div>
          </div>

          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block w-full text-left px-6 py-4 transition-all duration-200 border-b last:border-b-0 ${
                  isActive(link.href)
                    ? "font-semibold"
                    : "text-gray-700 hover:text-[#1B3A6E]"
                }`}
                style={{
                  borderColor: "rgba(27,58,110,0.06)",
                  color: isActive(link.href) ? "#1B3A6E" : undefined,
                  background: isActive(link.href) ? "rgba(27,58,110,0.04)" : undefined,
                }}
              >
                <span className="text-base font-medium">{link.label}</span>
                {isActive(link.href) && (
                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full align-middle" style={{ background: "#D9A91E" }} />
                )}
              </Link>
            ))}
          </div>

          <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(27,58,110,0.08)", background: "rgba(27,58,110,0.02)" }}>
            <Link
              href="/register"
              onClick={handleLinkClick}
              className="block w-full px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-300 text-center hover:opacity-90 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)",
              }}
            >
              Get Started → Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}