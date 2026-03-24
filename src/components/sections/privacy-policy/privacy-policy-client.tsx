"use client";
import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  UserCheck,
  FileText,
  Bell,
} from "lucide-react";

export default function PrivacyPolicyClient() {
  const [expandedSection, setExpandedSection] = useState<any>(null);

  const sections = [
    {
      id: 1,
      icon: Database,
      title: "Information We Collect",
      color: "accent",
      items: [
        {
          label: "Personal Information",
          desc: "Name, age, address, email, phone, photos, education, employment, horoscope data",
        },
        {
          label: "Verification Data",
          desc: "Job letters, criminal records, licenses (with your consent)",
        },
        {
          label: "Usage Data",
          desc: "Profile views, searches, favorites, interests, and analytics",
        },
        {
          label: "Partner Data",
          desc: "Business info, branding, API integration details",
        },
        {
          label: "Device & Log Data",
          desc: "IP address, browser, device identifiers, access logs",
        },
        {
          label: "Cookies",
          desc: "Session management, preferences, and analytics tracking",
        },
      ],
    },
    {
      id: 2,
      icon: Eye,
      title: "How We Use Your Information",
      color: "orange",
      items: [
        {
          label: "Matchmaking",
          desc: "AI recommendations, global searches, horoscope matching",
        },
        {
          label: "Verification",
          desc: "Profile authentication, background checks, trust building",
        },
        {
          label: "Service Delivery",
          desc: "Account management, events, subscriptions, support",
        },
        {
          label: "Partners",
          desc: "White-labeling, cross-border data flows, unified matching",
        },
        {
          label: "Analytics",
          desc: "Feature enhancement, usage monitoring, improvements",
        },
        {
          label: "Communications",
          desc: "Updates, notifications, marketing (with opt-out)",
        },
        {
          label: "Legal",
          desc: "Compliance, law enforcement requests, Terms enforcement",
        },
      ],
    },
    {
      id: 3,
      icon: Globe,
      title: "Sharing Your Information",
      color: "accent",
      items: [
        {
          label: "With Matches",
          desc: "Profile details shared based on visibility settings",
        },
        {
          label: "Partners",
          desc: "Data access via API for matchmaking purposes",
        },
        {
          label: "Service Providers",
          desc: "Verification firms, payment processors, analytics",
        },
        {
          label: "Legal Requirements",
          desc: "When required by law or to protect rights/safety",
        },
        {
          label: "Business Transfers",
          desc: "In case of merger, acquisition, or asset sale",
        },
      ],
      note: "We do not sell your personal information",
    },
    {
      id: 4,
      icon: Lock,
      title: "Data Security",
      color: "orange",
      items: [
        {
          label: "Protection",
          desc: "Encryption, firewalls, secure servers for data safety",
        },
        {
          label: "Privacy Controls",
          desc: "Manage visibility, delete data, request access/export",
        },
        {
          label: "Transparency",
          desc: "Industry-standard security measures implemented",
        },
      ],
      warning: "No system is 100% secure; you use Services at your own risk",
    },
    {
      id: 5,
      icon: Globe,
      title: "International Transfers",
      color: "accent",
      items: [
        {
          label: "Global Platform",
          desc: "Data may be transferred across borders",
        },
        { label: "Compliance", desc: "Follow applicable laws with safeguards" },
        {
          label: "Protection",
          desc: "Standard contractual clauses for data protection",
        },
      ],
    },
    {
      id: 6,
      icon: Database,
      title: "Data Retention",
      color: "orange",
      items: [
        {
          label: "Duration",
          desc: "Data kept as needed for Services and legal obligations",
        },
        {
          label: "Financial Records",
          desc: "Retained for 7 years as required",
        },
        {
          label: "Deletion",
          desc: "Request deletion anytime (some data may remain in backups)",
        },
      ],
    },
    {
      id: 7,
      icon: UserCheck,
      title: "Your Rights",
      color: "accent",
      items: [
        {
          label: "Access & Correct",
          desc: "View and update your personal data",
        },
        { label: "Delete", desc: "Request deletion of your information" },
        { label: "Opt Out", desc: "Unsubscribe from marketing communications" },
        {
          label: "GDPR Rights",
          desc: "EU/UK users have portability and objection rights",
        },
      ],
      contact: "privacy@ekambond.com",
    },
  ];

  const features = [
    { icon: Shield, label: "100% Verified", desc: "Complete profile checks" },
    { icon: Lock, label: "Encrypted", desc: "Bank-level security" },
    { icon: Eye, label: "Your Control", desc: "Manage visibility" },
    { icon: FileText, label: "Transparent", desc: "Clear policies" },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <div className="relative overflow-hidden bg-gradient-to-br from-neutral via-secondary to-neutral">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/20 rounded-3xl mb-8 backdrop-blur-sm">
              <Shield className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-12">
              Your privacy is our priority. Learn how we protect and manage your
              data.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                  >
                    <Icon className="w-5 h-5 text-accent" />
                    <div className="text-left">
                      <div className="text-primary font-semibold text-sm">
                        {feature.label}
                      </div>
                      <div className="text-primary/60 text-xs">
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 text-primary/60 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Last Updated: October 07, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="mb-16 bg-gradient-to-br from-white to-surface/5 rounded-3xl p-8 lg:p-12 shadow-xl border border-surface/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Our Commitment to You
              </h2>
              <p className="text-muted leading-relaxed text-lg">
                EkamBond is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our platform. By using our
                Services, you consent to the practices described here.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <div
                key={section.id}
                className={`
          relative rounded-3xl border border-white/40 
          backdrop-blur-xl bg-white/40 
          shadow-[0_8px_32px_rgba(31,38,135,0.1)]
          overflow-hidden transition-all duration-500
          hover:shadow-[0_12px_40px_rgba(31,38,135,0.15)]
        `}
              >
                {/* gradient shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/10 pointer-events-none" />

                <button
                  onClick={() =>
                    setExpandedSection(isExpanded ? null : section.id)
                  }
                  className="w-full p-8 flex items-center justify-between text-left relative z-10 group"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`
                w-16 h-16 rounded-2xl flex items-center justify-center
                bg-${section.color}/20 
                shadow-inner backdrop-blur-lg
                group-hover:bg-${section.color}/30
                transition-colors duration-300
              `}
                    >
                      <Icon className={`w-8 h-8 text-${section.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-1">
                        {section.title}
                      </h3>
                      <p className="text-[#6B6B6B] text-sm">
                        {section.items.length}{" "}
                        {section.items.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full bg-white/60 border border-white/40 backdrop-blur-lg flex items-center justify-center transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-[#2E2E2E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-8 pb-8 animate-slide-down relative z-10">
                    <div className="rounded-2xl p-6 space-y-4 bg-white/60 backdrop-blur-xl border border-white/30 shadow-inner shadow-white/10">
                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl bg-white/70 hover:bg-white/80 border border-white/50 backdrop-blur-md transition-all duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-[#2E2E2E] mb-1">
                              {item.label}
                            </h4>
                            <p className="text-[#6B6B6B] text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}

                      {section.note && (
                        <div className="mt-4 p-4 bg-[#F7E7D3]/70 rounded-xl border-l-4 border-[#EAB676]">
                          <p className="text-[#2E2E2E] font-semibold text-sm">
                            {section.note}
                          </p>
                        </div>
                      )}

                      {section.warning && (
                        <div className="mt-4 p-4 bg-[#FFF1E6]/70 rounded-xl border-l-4 border-[#F59E0B]">
                          <p className="text-[#5A3E1B] text-sm">
                            {section.warning}
                          </p>
                        </div>
                      )}

                      {section.contact && (
                        <div className="mt-4 pt-4 border-t border-white/50">
                          <p className="text-[#6B6B6B] text-sm">
                            Contact us at{" "}
                            <a
                              href={`mailto:${section.contact}`}
                              className="text-[#1B3A6E] font-semibold hover:underline"
                            >
                              {section.contact}
                            </a>{" "}
                            to exercise your rights
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="bg-gradient-to-br from-white to-surface/5 rounded-3xl p-8 shadow-lg border border-surface/20">
            <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-orange" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Children's Privacy
            </h3>
            <p className="text-muted leading-relaxed">
              Our Services are not for individuals under 18. We do not knowingly
              collect data from children.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-surface/5 rounded-3xl p-8 shadow-lg border border-surface/20">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Policy Updates
            </h3>
            <p className="text-muted leading-relaxed">
              We may update this Policy. Changes are posted here; continued use
              constitutes acceptance.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-br from-secondary via-neutral to-secondary rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-4">
              Have Privacy Questions?
            </h3>
            <p className="text-primary/80 mb-8 max-w-2xl mx-auto text-lg">
              Our privacy team is here to answer your questions and address your
              concerns about how we handle your data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:privacy@ekambond.com"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-secondary px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Lock className="w-5 h-5" />
                Privacy Team
              </a>
              <a
                href="mailto:support@ekambond.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-primary border border-white/20 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm"
              >
                <Bell className="w-5 h-5" />
                General Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide-down {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 2000px; }
        }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
      `}</style>
    </div>
  );
}
