import { Database, Eye, FileText, Globe, Shield, UserCheck } from "lucide-react";

export  const sections = [
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

export  const features = [
    { icon: Shield, label: "100% Verified", desc: "Complete profile checks" },
    { icon: Lock, label: "Encrypted", desc: "Bank-level security" },
    { icon: Eye, label: "Your Control", desc: "Manage visibility" },
    { icon: FileText, label: "Transparent", desc: "Clear policies" },
  ];