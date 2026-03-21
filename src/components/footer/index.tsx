"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  Mail,
  Heart,
  Globe,
  Shield,
  FileText,
  HelpCircle,
  MessageCircle,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PrimaryButton from "../button/primary-button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState<any>("");
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
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log("Subscribed Email:", values.email);
    toast.success(`Subscribed with: ${values.email}`);
    resetForm();
  };

  return (
    <footer className="relative bg-primary overflow-hidden border-t border-white/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(200,75,49,0.1) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(200,75,49,0.3) 0%, transparent 70%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(213,90,63,0.3) 0%, transparent 70%)",
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
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                      animation: "spin 20s linear infinite",
                    }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                    }}
                  >
                    <Heart className="w-7 h-7 text-white fill-current" />
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-neue-haas-medium text-secondary">
                  Ekam<span style={{ color: "var(--color-orange)" }}>bond</span>
                </h2>
    
              </div>
                           <span className="font-medium block text-orange">
   Connecting hearts across continents
  </span>
              <p className="text-muted text-lg mb-8 max-w-md leading-relaxed font-neue-haas-regular">
                Your journey to meaningful relationships starts here.
              </p>

              {/* Email Contact Card - Glassmorphism */}
              <a
                href="mailto:support@ekambond.com"
                className="relative inline-flex items-center gap-4 px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Liquid Blob Background */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, #D55A3F 0%, transparent 70%)",
                  }}
                ></div>

                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                  }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="relative text-left">
                  <div className="text-xs text-muted font-neue-haas-regular mb-1">
                    Email us at
                  </div>
                  <div className="text-secondary font-neue-haas-medium">
                    support@ekambond.com
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Newsletter Section - Glassmorphism */}
            <div
              className="relative p-8 rounded-3xl shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 8px 32px 0 rgba(200, 75, 49, 0.15), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                animation: "fadeIn 0.6s ease-out 0.2s backwards",
              }}
            >
              {/* Liquid Blob Shapes */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, #C84B31 0%, transparent 70%)",
                  animation: "blob 20s infinite",
                }}
              ></div>
              <div
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, #D55A3F 0%, transparent 70%)",
                  animation: "blob 20s infinite 2s",
                }}
              ></div>

              <div className="relative flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-neue-haas-medium text-secondary">
                  Stay Connected
                </h3>
              </div>
              <p className="relative text-muted mb-6 font-neue-haas-regular">
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
                      className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-secondary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 transition-all shadow-sm"
                    />
                    <PrimaryButton label="Subscribe"  />

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
        <div className="py-16 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-neue-haas-medium text-secondary mb-6 uppercase tracking-wider">
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
                      className="group flex items-center gap-3 text-muted hover:text-secondary transition-colors duration-300"
                    >
                      <link.icon
                        className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity"
                        style={
                          isHovered === `company-${idx}`
                            ? { color: "#C84B31" }
                            : {}
                        }
                      />
                      <span className="text-sm lg:text-base font-neue-haas-regular">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-neue-haas-medium text-secondary mb-6 uppercase tracking-wider">
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
                      className="group flex items-center gap-3 text-muted hover:text-secondary transition-colors duration-300"
                    >
                      <link.icon
                        className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity"
                        style={
                          isHovered === `legal-${idx}`
                            ? { color: "#C84B31" }
                            : {}
                        }
                      />
                      <span className="text-sm lg:text-base font-neue-haas-regular">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-span-2">
              <h3 className="text-sm font-neue-haas-medium text-secondary mb-6 uppercase tracking-wider">
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
                      className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                      }}
                    ></div>
                    <div className="relative w-11 h-11 bg-white/5 border border-white/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden">
                      <social.icon className="w-5 h-5 text-muted relative z-10 transition-colors duration-300 group-hover:text-white" />
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #C84B31, #D55A3F)",
                        }}
                      ></div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quote Card - Glassmorphism */}
              <div
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 8px 32px 0 rgba(200, 75, 49, 0.1), inset 0 1px 0 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Liquid Accent Blob */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, #C84B31 0%, transparent 70%)",
                  }}
                ></div>
                <p className="relative text-md text-muted  leading-relaxed font-neue-haas-regular">
                 "Bringing hearts together, one connection at a time."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
           <p className="text-muted text-sm text-center md:text-left font-neue-haas-regular">
  © 2025{" "}
  <span
    className="font-neue-haas-medium"
    style={{ color: "var(--color-orange)" }}
  >
    EkamBond Matrimony Enterprise Services LLC
  </span>
  . All rights reserved.
</p>


            {/* Made with Love Badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-sm">
              <span className="text-sm text-muted font-neue-haas-medium">
                Crafted with
              </span>
              <Heart
                className="w-4 h-4 fill-current animate-pulse"
                style={{
                  color: "var(--color-orange)",
                  animationDuration: "1.5s",
                }}
              />
              <span className="text-sm text-muted font-neue-haas-regular">
                for meaningful connections
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
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
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
}
