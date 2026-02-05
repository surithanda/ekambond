import { Service } from "@/components/cards/partners/service-card";
import { Award, Building2, Globe, MapPin } from "lucide-react";

export  const services: Service[] = [
    {
      title: "Elite Matrimony Services",
      badge: "Premium",
      description:
        "Premium matchmaking for high-net-worth individuals and professionals",
      stat: "Excellent",
      statLabel: "success rate",
      features: [
        "Executive matching",
        "Background verification",
        "Personalized service",
      ],
      icon: Award,
    },
    {
      title: "Traditional Matchmakers Guild",
      badge: "Traditional",
      description: "Time-tested matchmaking with modern technology integration",
      stat: "5+",
      statLabel: "years experience",
      features: [
        "Traditional matching",
        "Family consultations",
        "Horoscope matching",
      ],
      icon: Building2,
    },
    {
      title: "Global Marriage Network",
      badge: "Global",
      description:
        "International matrimony services connecting cultures worldwide",
      stat: "3+",
      statLabel: "countries served",
      features: [
        "International matching",
        "Visa assistance",
        "Cultural integration",
      ],
      icon: Globe,
    },
    {
      title: "Regional Marriage Bureau",
      badge: "Regional",
      description: "Local expertise with deep community connections and trust",
      stat: "25+",
      statLabel: "local matches",
      features: [
        "Local community focus",
        "Regional preferences",
        "Family networking",
      ],
      icon: MapPin,
    },
  ];