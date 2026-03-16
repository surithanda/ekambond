import {
  FileCheck,
  Phone,
  Brain,
  TrendingUp,
  Heart,
  Sparkles,
  Target,
  BadgeCheck,
  Globe,
  ShieldCheck,
  CalendarCheck,
  Users,
  Send,
  BarChart3,
  Calendar,
  Filter,
  MapPin,
  Bell,
  Zap,
  Shield,
  Upload,
  User,
  Layers,
  LayoutGrid,
  ScanFace,
  UploadCloud,
  Lock,
  Briefcase,
  Network,
  Star,
} from "lucide-react";
import { Activity, HeartHandshake, UserCog } from "lucide-react";


export const features = [
  {
    id: 1,
    icon: Brain,
    title: "Advanced compatibility models",
    description:
      "AI-powered compatibility engines analyze deeper relationship factors",
    stat: "Next-gen accuracy",
  },
  {
    id: 2,
    icon: Layers,
    title: "Preference learning",
    description:
      "System learns user likes, dislikes, and patterns for smarter matches",
    stat: "Adaptive intelligence",
  },
  {
    id: 3,
    icon: Activity,
    title: "Behavioral analysis",
    description:
      "Analyzes behavior signals to understand personality and intent",
    stat: "Behavior-driven insights",
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: "Personalized match recommendations",
    description:
      "Smart recommendations tailored perfectly to each user’s profile",
    stat: "Highest precision",
  },
  {
    id: 5,
    icon: UserCog,
    title: "Matchmaker assistance tools",
    description:
      "Smart tools that help matchmakers guide users toward the best partners",
    stat: "Pro-level tools",
  },
];

export const backgroundverification = [
  {
    id: 1,
    icon: FileCheck, // Document verification
    title: "AI-based document verification",
    description:
      "Instant verification of government IDs and certificates using advanced AI checks.",
    stat: "99.9% accuracy",
  },
  {
    id: 2,
    icon: Phone, // Phone & email verification
    title: "Phone/email validation",
    description:
      "Secure multi-channel validation to confirm user identity via phone and email.",
    stat: "Real-time validation",
  },
  {
    id: 3,
    icon: Globe, // Social media verification
    title: "Social media checks",
    description:
      "Cross-platform verification to validate social profiles and detect authenticity.",
    stat: "Major platforms supported",
  },
  {
    id: 4,
    icon: ShieldCheck, // Third-party background checks
    title: "Third-party background checks",
    description:
      "Seamless integration with trusted background screening and identity providers.",
    stat: "Enterprise security",
  },
  {
    id: 5,
    icon: Briefcase, // Employment & education checks
    title: "Employment & education confirmation",
    description:
      "Verify employment history and academic credentials through secure data sources.",
    stat: "Global verification",
  },
];


export const verificationSteps = [
  {
    icon: FileCheck,
    text: "Document verification",
    completed: true,
  },
  {
    icon: Phone,
    text: "Phone & email verification",
    completed: true,
  },
  {
    icon: Globe,
    text: "Social media profile validation",
    completed: true,
  },
  {
    icon: ShieldCheck,
    text: "Third-party background check integration",
    completed: false,
  },
  {
    icon: BadgeCheck,
    text: "Verification status tracking & badges",
    completed: false,
  },
];

export const events = [
  {
    id: 1,
    icon: Send, // Automated invitations
    title: "Automated invitations",
    description:
      "Smart invitation delivery with personalized templates and scheduling options.",
    stat: "Instant delivery",
  },
  {
    id: 2,
    icon: Users, // Guest management & RSVPs
    title: "Guest management & RSVPs",
    description:
      "Advanced guest management with real-time RSVP tracking and automated reminders.",
    stat: "Real-time updates",
  },
  {
    id: 3,
    icon: CalendarCheck, // Multi-platform calendar sync
    title: "Multi-platform calendar sync",
    description:
      "Synchronize events seamlessly across multiple calendar platforms for easy scheduling.",
    stat: "Cross-platform integration",
  },
  {
    id: 4,
    icon: Bell, // Follow-up reminders
    title: "Follow-up reminders",
    description:
      "Automated reminders to keep guests engaged and informed before and after events.",
    stat: "Timely notifications",
  },
  {
    id: 5,
    icon: BarChart3, // Post-event analytics
    title: "Post-event analytics",
    description:
      "Gain actionable insights from attendance, engagement, and feedback data.",
    stat: "AI-powered insights",
  },
];

export const eventStats = [
  {
    label: "Monthly events",
    value: "",
    description: "Events organized",
  },
  {
    label: "Guest reach",
    value: "",
    description: "Invitations sent",
  },
  {
    label: "Response rate",
    value: "",
    description: "Average RSVP rate",
  },
];

export const horoscope = [
  {
    id: 1,
    icon: Heart, // Kundli matching
    title: "Kundli matching",
    description:
      "Traditional Vedic astrology matching to find compatibility between individuals.",
    stat: "15+ astrology systems",
  },
  {
    id: 2,
    icon: Calendar, // Manglik checks
    title: "Manglik checks",
    description:
      "Precise Mangal Dosha verification with remedial suggestions to guide matchmaking.",
    stat: "Accurate predictions",
  },
  {
    id: 3,
    icon: TrendingUp, // Planetary charts
    title: "Planetary charts",
    description:
      "Generate detailed planetary charts including positions, houses, and planetary transits.",
    stat: "Real-time calculations",
  },
  {
    id: 4,
    icon: Star, // Zodiac-based compatibility
    title: "Zodiac-based compatibility",
    description:
      "Analyze compatibility based on zodiac signs and astrological principles.",
    stat: "Daily updates",
  },
  {
    id: 5,
    icon: Users, // Astrologer consultation
    title: "Astrologer consultation booking",
    description:
      "Connect with certified astrologers for personalized guidance and consultations.",
    stat: "Expert consultations",
  },
];


export const zodiacSigns = [
  { name: "Aries", symbol: "♈" },
  { name: "Taurus", symbol: "♉" },
  { name: "Gemini", symbol: "♊" },
  { name: "Cancer", symbol: "♋" },
  { name: "Leo", symbol: "♌" },
  { name: "Virgo", symbol: "♍" },
  { name: "Libra", symbol: "♎" },
  { name: "Scorpio", symbol: "♏" },
  { name: "Sagittarius", symbol: "♐" },
  { name: "Capricorn", symbol: "♑" },
  { name: "Aquarius", symbol: "♒" },
  { name: "Pisces", symbol: "♓" },
];

export const globalSearch = [
  {
    id: 1,
    icon: Sparkles,
    title: "Intelligent suggestions",
    description:
      "AI-powered smart suggestions to help you find the right profiles instantly",
    stat: "Adaptive learning",
  },
  {
    id: 2,
    icon: Filter,
    title: "10+ advanced search filters",
    description:
      "Powerful filtering options for precise and efficient profile discovery",
    stat: "10+ filters",
  },
  {
    id: 3,
    icon: Network,
    title: "Multi-community & multi-organization search",
    description:
      "Search seamlessly across communities, organizations, and networks",
    stat: "Unified search",
  },
  {
    id: 4,
    icon: Bell,
    title: "Saved searches & alerts",
    description:
      "Save search criteria and receive instant real-time alerts on new matches",
    stat: "Instant alerts",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Search analytics & insights",
    description:
      "Gain visibility into search patterns with AI-driven analytics and insights",
    stat: "AI insights",
  },
];

export const globalSearchStats = [
  {
    label: "Supported globally",
    value: "",
    description: "Global search volume",
  },
  {
    label: "Multi-language search",
    value: "",
    description: "Worldwide coverage",
  },
  {
    label: "Real-time indexing",
    value: "Instant",
    description: "Search suggestions",
  },
];

export const profilemangamentdata = [
  {
    id: 1,
    icon: Zap,
    title: "Advanced profile builder",
    description: "Create stunning profiles with custom fields and validation",
    // stat: "50M+ profiles managed",
  },
  {
    id: 2,
    icon: User,
    title: "Photo verification",
    description: "Automated verification with AI-powered validation",
    // stat: "99.9% accuracy rate",
  },
  {
    id: 3,
    icon: Shield,
    title: "Privacy controls",
    description: "Granular privacy settings and visibility controls",
    stat: "Enterprise-grade security",
  },
  {
    id: 4,
    icon: Upload,
    title: "Bulk import/export",
    description: "Handle large datasets with seamless data migration",
    stat: "Unlimited scalability",
  },
];


export const featuresLayoutData = [
    {
    id: 1,
    icon: Layers, // Customizable builder
    title: "Customizable profile builder",
    description:
      "Easily create and manage profiles with flexible fields and modular components.",
    stat: "Fully customizable",
  },
  {
    id: 2,
    icon: LayoutGrid, // Layout/UI
    title: "Beautiful profile layouts",
    description:
      "Modern and visually appealing profile designs optimized for all devices.",
    stat: "Multiple layouts available",
  },
  {
    id: 3,
    icon: ScanFace, // Photo verification
    title: "AI-based photo verification",
    description:
      "Advanced facial recognition technology ensures authentic profile images.",
    stat: "99.9% verification accuracy",
  },
  {
    id: 4,
    icon: Shield, // Privacy & consent
    title: "Strong privacy & consent controls",
    description:
      "Granular privacy settings with user-controlled visibility and secure consent workflows.",
    stat: "Enterprise-grade privacy",
  },
  // {
  //   id: 5,
  //   icon: UploadCloud, 
  //   title: "Bulk import/export for large communities",
  //   description:
  //     "Seamlessly import and export large profile datasets with optimized processing.",
  //   stat: "Community-scale support",
  // },
  {
    id: 6,
    icon: Lock, // Encryption
    title: "End-to-end encryption",
    description:
      "All sensitive data is protected with advanced end-to-end encryption protocols.",
    stat: "AES-256 encryption",
  },
  ];
