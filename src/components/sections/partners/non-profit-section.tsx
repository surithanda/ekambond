import React from "react";
import {
  Heart,
  Users,
  Target,
  Award,
  Globe,
  Shield,
  Building2,
  Handshake,
} from "lucide-react";
import OrganizationCard, {
  Organization,
} from "@/components/cards/partners/organization-card";
import AnimatedBackground from "./animated-background";
import "@/styles/partners/non-profitable.css";
import SectionHeader from "./section-header";

const PartnerEcosystem: React.FC = () => {
  const organizations: Organization[] = [
    {
      title: "Community Marriage Foundation",
      category: "Social Impact",
      description:
        "Supporting underprivileged communities with free, modern matchmaking services",
      stat: "",
      statLabel: "successful matches",
      features: [
        "Free profile creation",
        "Community outreach",
        "Marriage counseling",
      ],
      icon: Users,
      badgeIcon: Heart,
      badgeColor: "bg-green-500/20 text-green-700 border-green-400/40",
    },
    {
      title: "Cultural Heritage Society",
      category: "Cultural",
      description:
        "Preserving cultural traditions through authentic matrimony connections",
      stat: "",
      statLabel: "cultural matches",
      features: [
        "Cultural matching",
        "Traditional ceremonies",
        "Heritage preservation",
      ],
      icon: Target,
      badgeIcon: Globe,
      badgeColor: "bg-blue-500/20 text-blue-700 border-blue-400/40",
    },
    {
      title: "Women Empowerment Alliance",
      category: "Empowerment",
      description:
        "Supporting women's choice and empowerment in matrimony decisions",
      stat: "",
      statLabel: "empowered choices",
      features: [
        "Women-centric marketing",
        "Counselling services",
        "Support groups",
      ],
      icon: Award,
      badgeIcon: Shield,
      badgeColor: "bg-purple-500/20 text-purple-700 border-purple-400/40",
    },
  ];

  return (
    <section className="relative py-28 px-4 bg-primary overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Handshake}
          badgeText="Who We Partner With"
          title="Non Profitable & Organization"
          highlightText="Social Organization"
          description="Empower your community with modern matchmaking tools at low or subsidized cost.
"
        />

        {/* Organization Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {organizations.map((org, index) => (
            <OrganizationCard key={index} org={org} index={index} />
          ))}
        </div>  
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          50% {
            transform: translateX(100%) rotate(180deg);
          }
          100% {
            transform: translateX(-100%) rotate(360deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PartnerEcosystem;
