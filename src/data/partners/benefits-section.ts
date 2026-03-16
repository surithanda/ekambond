import { Award, Handshake, Layers, Quote, Target, TrendingUp, Users } from "lucide-react";

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
}


export  const benefits: Benefit[] = [
    // {
    //   icon: TrendingUp,
    //   title: "Revenue Growth",
    //   description: "300% average increase in successful matches and revenue",
    //   stat: "300%",
    // },
    // {
    //   icon: Users,
    //   title: "Expanded Network",
    //   description: "Access to 1M+ verified profiles across global markets",
    //   stat: "1M+",
    // },
    // {
    //   icon: Target,
    //   title: "AI Precision",
    //   description: "Advanced algorithms for unprecedented match quality",
    //   stat: "AI",
    // },
    // {
    //   icon: Award,
    //   title: "Elite Credibility",
    //   description: "Enhanced brand authority through premium platform",
    //   stat: "★★★★★",
    // },
    {
      icon: TrendingUp,
      title: "Advanced Technology",
      description: "AI-powered recommendations, background checks, and cross-platform search.",
      stat: "300%",
    },
    {
      icon: Users,
      title: "White-Label Customization",
      description: "Fully branded platforms tailored to your community or organization.",
      stat: "1M+",
    },
    {
      icon: Target,
      title: "Revenue Opportunities",
      description: "Shared revenue models for bureaus, partners, and organizations.",
      stat: "AI",
    },
    {
      icon: Award,
      title: "Training & Onboarding",
      description: "Provide your team with expert training, tools, and matchmaker workflows.",
      stat: "★★★★★",
    },
    {
  icon: Layers, // Scalable system / multi-layer architecture
  title: "Scalable Architecture",
  description: "Built for small groups to large global communities.",
  stat: "Global",
},
{
  icon: Quote,
  title: "Partner Success Stories",
  description: `
    “EkamBond helped us modernize our community matchmaking while staying true to cultural values.”
    — Gouda Association, India

    “Our matchmakers now work faster and more confidently thanks to verification and AI tools.”
    — Marriage Bureau Partner
  `,
  stat: "Success",
},

{
  icon: Handshake, // Ideal for partnerships / collaboration
  title: "Become an EkamBond Partner Today",
  description:
    "Work with us to create meaningful connections and build stronger communities.",
  stat: "Apply",
  // cta: "Apply for Partnership",
},

  ];