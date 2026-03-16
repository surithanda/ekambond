"use client";
import React, { useState } from "react";
import {
  Shield,
  Check,
  FileText,
  Scale,
  Lock,
  Users,
  Globe,
  AlertCircle,
} from "lucide-react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const sections: any = [
    { id: 1, icon: Users, title: "Eligibility", color: "orange" },
    { id: 2, icon: FileText, title: "Account Registration", color: "accent" },
    { id: 3, icon: Shield, title: "Services & Features", color: "orange" },
    { id: 4, icon: AlertCircle, title: "User Conduct", color: "accent" },
    { id: 5, icon: Globe, title: "Payments & Revenue", color: "orange" },
    { id: 6, icon: Lock, title: "Intellectual Property", color: "accent" },
    { id: 7, icon: Shield, title: "Privacy & Security", color: "orange" },
    { id: 8, icon: AlertCircle, title: "Termination", color: "accent" },
    { id: 9, icon: FileText, title: "Disclaimer & Liability", color: "orange" },
    { id: 10, icon: Scale, title: "Governing Law", color: "accent" },
    { id: 11, icon: FileText, title: "Changes to Terms", color: "orange" },
  ];

  const content: any = {
    1: {
      title: "Eligibility",
      items: [
        "You must be at least 18 years old or the legal age of majority in your jurisdiction",
        "You represent that you are legally capable of entering into binding contracts",
        "Services intended for individuals seeking relationships, professional matchmakers, and marriage bureaus",
      ],
    },
    2: {
      title: "Account Registration and Profile Management",
      items: [
        "Create an account with accurate, current, and complete information",
        "Maintain confidentiality of your account credentials",
        "100% profile checks and background verifications conducted",
        "Update profile promptly if information changes",
        "Accounts with false information may be suspended or terminated",
      ],
    },
    3: {
      title: "Services and Features",
      items: [
        "AI-based matchmaking with global search capabilities",
        "Horoscope integration and personalized recommendations",
        "Background and certification validation services",
        "White-labeling solutions for partners and bureaus",
        "Pre- and post-event management services",
        "Flexible subscription plans (non-refundable except as specified)",
      ],
    },
    4: {
      title: "User Conduct",
      items: [
        "Do not use Services for unlawful, harmful, or abusive purposes",
        "Respect other users' privacy and personal information",
        "No harassment, fraud, or misrepresentation permitted",
        "Prohibited: offensive content, spamming, or platform disruption",
        "Partners must adhere to cross-border data policies",
      ],
    },
    5: {
      title: "Payments and Revenue Sharing",
      items: [
        "Subscriptions charged as per our cost model",
        "Partners earn defined percentage of successful subscriptions",
        "Revenue used for operations, development, and security",
        "Secure payment processing with minimal data storage",
      ],
    },
    6: {
      title: "Intellectual Property",
      items: [
        "All platform content owned by EkamBond or licensors",
        "Non-exclusive license granted for profile content use",
        "White-labeling partners may customize themes only",
        "Underlying technology remains EkamBond property",
      ],
    },
    7: {
      title: "Privacy and Data Security",
      items: [
        "Usage governed by our Privacy Policy",
        "Data privacy, security, and transparency prioritized",
        "Manage privacy settings for visibility control",
      ],
    },
    8: {
      title: "Termination",
      items: [
        "Access may be terminated for Terms violations",
        "Loss of account and associated data upon termination",
      ],
    },
    9: {
      title: "Disclaimer and Limitation of Liability",
      items: [
        "Services provided 'as is' without warranties",
        "No guarantee of match success",
        "Not liable for indirect or consequential damages",
        "Liability limited to amount paid in last 12 months",
      ],
    },
    10: {
      title: "Governing Law and Dispute Resolution",
      items: [
        "Governed by laws of the United States",
        "Disputes resolved through arbitration",
        "Courts located in Delaware, USA",
      ],
    },
    11: {
      title: "Changes to Terms",
      items: [
        "Terms may be updated at any time",
        "Continued use constitutes acceptance of changes",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-neutral to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl mb-8 backdrop-blur-sm">
              <Scale className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-8">
              Understanding the foundation of our commitment to you
            </p>
            <div className="flex items-center justify-center gap-6 text-primary/60 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Last Updated: October 07, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>11 Sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Introduction */}
        <div className="mb-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-surface/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">
                Welcome to EkamBond
              </h2>
              <p className="text-muted leading-relaxed">
                By accessing or using our platform, including our website,
                mobile applications, API services, white-labeling features, and
                any related services, you agree to be bound by these Terms and
                Conditions. If you do not agree to these Terms, please do not
                use our Services.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {sections.map((section: any) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-2xl transition-all duration-300 text-left group ${
                  activeSection === section.id
                    ? "bg-gradient-to-br from-secondary to-neutral text-primary shadow-xl scale-105"
                    : "bg-white hover:bg-surface/10 text-secondary shadow-md hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    activeSection === section.id
                      ? "bg-accent/20"
                      : `bg-${section.color}/10 group-hover:bg-${section.color}/20`
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      activeSection === section.id
                        ? "text-accent"
                        : `text-${section.color}`
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-sm">{section.title}</h3>
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        {activeSection && (
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-surface/20 animate-fade-in">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-surface/20">
              {React.createElement(
                sections.find((s: any) => s.id === activeSection).icon,
                {
                  className: "w-8 h-8 text-accent",
                }
              )}
              <h2 className="text-3xl font-bold text-secondary">
                {content[activeSection].title}
              </h2>
            </div>
            <div className="space-y-4">
              {content[activeSection].items.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/5 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-secondary to-neutral rounded-3xl p-8 lg:p-12 text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Questions About Our Terms?
          </h3>
          <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and
            Conditions, our team is here to help you understand our policies.
          </p>
          <a
            href="mailto:support@ekambond.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Contact Support
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}