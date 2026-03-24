"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  Mail,
  Globe,
  Shield,
  FileText,
  HelpCircle,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import PrimaryButton from "../button/primary-button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

export default function Footer() {
  const [isHovered, setIsHovered] = useState<any>(null);

  const footerLinks = {
    company: [
      { name: "About us", href: "/about-us", icon: Globe },
      { name: "FAQ's", href: "/faq", icon: HelpCircle },
      { name: "Contact & Support", href: "/contact-us", icon: Phone },
    ],
    legal: [
      { name: "Terms & Condition", href: "/terms-conditions", icon: FileText },
      { name: "Privacy policy", href: "/privacy-policy", icon: Shield },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const initialValues = { email: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log("Subscribed Email:", values.email);
    toast.success(`Subscribed with: ${values.email}`);
    resetForm();
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #F2F4F8 0%, #ffffff 50%, #E8EDF5 100%)" }}>
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(27,58,110,0.12) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(27,58,110,0.4) 0%, transparent 70%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(217,169,30,0.4) 0%, transparent 70%)",
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Newsletter */}
        <div className="pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Brand Section */}
            <div style={{ animation: "fadeIn 0.6s ease-out" }}>
              <div className="flex items-center gap-4 mb-5">
                {/* Real Logo Image */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/images/ekambond-logo.png"
                    alt="EkamBond Logo"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-none" style={{ color: "#1B3A6E" }}>
                    EkamBond
                  </h2>
                  <p className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "#D9A91E" }}>
                    Matrimony Partner Network
                  </p>
                </div>
              </div>

              <p className="text-base mb-2 font-medium" style={{ color: "#2D6E4E" }}>
                Connecting hearts across continents
              </p>
              <p className="text-lg mb-8 max-w-md leading-relaxed font-neue-haas-regular" style={{ color: "#5A6880" }}>
                Your journey to meaningful relationships starts here.
              </p>

              {/* Email Contact Card */}
              <a
                href="mailto:support@ekambond.com"
                className="relative inline-flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(232,237,245,0.7) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(27,58,110,0.12)",
                  boxShadow: "0 8px 32px 0 rgba(27, 58, 110, 0.1), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, #D9A91E 0%, transparent 70%)" }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)" }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="relative text-left">
                  <div className="text-xs font-neue-haas-regular mb-1" style={{ color: "#5A6880" }}>
                    Email us at
                  </div>
                  <div className="font-neue-haas-medium" style={{ color: "#1B3A6E" }}>
                    support@ekambond.com
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" style={{ color: "#D9A91E" }} />
              </a>
            </div>

            {/* Newsletter Section */}
            <div
              className="relative p-8 rounded-3xl shadow-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(232,237,245,0.65) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(27,58,110,0.12)",
                boxShadow: "0 8px 32px 0 rgba(27, 58, 110, 0.12), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                animation: "fadeIn 0.6s ease-out 0.2s backwards",
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #1B3A6E 0%, transparent 70%)", animation: "blob 20s infinite" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-15"
                style={{ background: "radial-gradient(circle, #D9A91E 0%, transparent 70%)", animation: "blob 20s infinite 2s" }}
              />

              <div className="relative flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                  style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)" }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#1B3A6E" }}>
                  Stay Connected
                </h3>
              </div>
              <p className="relative text-base mb-6 font-neue-haas-regular" style={{ color: "#5A6880" }}>
                Get updates on success stories and exclusive features
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form className="relative flex flex-col sm:flex-row gap-3">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all shadow-sm"
                      style={{ borderColor: "rgba(27,58,110,0.2)" }}
                    />
                    <PrimaryButton label="Subscribe" />
                    <div className="text-red-500 text-sm mt-1">
                      <ErrorMessage name="email" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="py-16" style={{ borderTop: "1px solid rgba(27,58,110,0.1)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Links */}
            <div>
              <h3
                className="text-sm font-neue-haas-medium mb-6 uppercase tracking-wider"
                style={{ color: "#1B3A6E" }}
              >
                Company
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li
                    key={link.name}
                    className="transform hover:translate-x-1 transition-transform duration-200"
                    onMouseEnter={() => setIsHovered(`company-${idx}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 transition-colors duration-300"
                      style={{ color: "#5A6880" }}
                    >
                      <link.icon
                        className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                        style={isHovered === `company-${idx}` ? { color: "#1B3A6E" } : {}}
                      />
                      <span className="text-sm lg:text-base font-neue-haas-regular group-hover:text-gray-900">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3
                className="text-sm font-neue-haas-medium mb-6 uppercase tracking-wider"
                style={{ color: "#1B3A6E" }}
              >
                Legal
              </h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, idx) => (
                  <li
                    key={link.name}
                    className="transform hover:translate-x-1 transition-transform duration-200"
                    onMouseEnter={() => setIsHovered(`legal-${idx}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 transition-colors duration-300"
                      style={{ color: "#5A6880" }}
                    >
                      <link.icon
                        className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                        style={isHovered === `legal-${idx}` ? { color: "#1B3A6E" } : {}}
                      />
                      <span className="text-sm lg:text-base font-neue-haas-regular group-hover:text-gray-900">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-span-2">
              <h3
                className="text-sm font-neue-haas-medium mb-6 uppercase tracking-wider"
                style={{ color: "#1B3A6E" }}
              >
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="group relative transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <div
                      className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)" }}
                    />
                    <div className="relative w-11 h-11 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden" style={{ borderColor: "rgba(27,58,110,0.15)" }}>
                      <social.icon className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-white" style={{ color: "#5A6880" }} />
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "linear-gradient(135deg, #1B3A6E 0%, #3A5FA0 100%)" }}
                      />
                    </div>
                  </a>
                ))}
              </div>

              {/* Quote Card */}
              <div
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(232,237,245,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(27,58,110,0.1)",
                  boxShadow: "0 8px 32px 0 rgba(27, 58, 110, 0.08)",
                }}
              >
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{ background: "radial-gradient(circle, #D9A91E 0%, transparent 70%)" }}
                />
                <p className="relative text-base leading-relaxed font-neue-haas-regular italic" style={{ color: "#5A6880" }}>
                  &ldquo;Bringing hearts together, one connection at a time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8" style={{ borderTop: "1px solid rgba(27,58,110,0.1)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-center md:text-left font-neue-haas-regular" style={{ color: "#5A6880" }}>
              © 2025{" "}
              <span className="font-neue-haas-medium" style={{ color: "#1B3A6E" }}>
                EkamBond Matrimony Enterprise Services LLC
              </span>
              . All rights reserved.
            </p>

            {/* Made with Love Badge */}
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm" style={{ border: "1px solid rgba(27,58,110,0.1)" }}>
              <span className="text-sm font-neue-haas-medium" style={{ color: "#5A6880" }}>
                Crafted with
              </span>
              <svg
                className="w-4 h-4 animate-pulse"
                viewBox="0 0 24 24"
                fill="#D9A91E"
                style={{ animationDuration: "1.5s" }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-sm font-neue-haas-regular" style={{ color: "#5A6880" }}>
                for meaningful connections
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -30px) scale(1.1); }
          66%       { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </footer>
  );
}
