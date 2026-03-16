"use client";

import {
  Sparkles,
  Shield,
  Globe,
  User,
  Star,
  Calendar,
  Check,
} from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Matchmaking",
    description:
      "AI models analyze lifestyle, values, preferences, and compatibility to deliver personalized and meaningful match suggestions.",
  },

  {
    icon: Shield,
    title: "Background & Identity Verification",
    description: (
      <div className="space-y-2">
        <p className="text-foreground text-sm">
          Multi-layer verification including:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Document checks
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Facial verification
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Phone & email validation
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Social media checks
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Optional education & employment verification
          </li>
        </ul>
      </div>
    ),
  },

  {
    icon: Globe, // replace with an appropriate icon for search/global
    title: "Global & Cross-Community Search",
    description: (
      <div className="space-y-2">
        <p className="text-foreground text-sm">
          Search profiles across all EkamBond-powered communities with:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            10+ advanced filters
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Saved searches & alerts
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Analytics & insights
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Multi-language support
          </li>
        </ul>
      </div>
    ),
  },

  {
    icon: User, // replace with an appropriate icon for profile management
    title: "Profile Management",
    description: (
      <div className="space-y-2">
        <p className="text-foreground text-sm">
          Rich, secure profile structures with:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Advanced profile builder
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Consent-based privacy controls
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Admin moderation tools
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            AI-assisted photo verification
          </li>
        </ul>
      </div>
    ),
  },

  {
    icon: Star, // replace with an appropriate icon for horoscope/astrology
    title: "Horoscope Integration (Optional)",
    description: (
      <div className="space-y-2">
        <p className="text-foreground text-sm">
          Culturally aligned features including:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Vedic/Kundli matching
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Manglik checks
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Planetary charts
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Astrologer consultations
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Calendar, // replace with an appropriate icon for events/calendar
    title: "Event Invites & Management",
    description: (
      <div className="space-y-2">
        <p className="text-foreground text-sm">
          Host community events, virtual meets, or premium sessions with:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Automated invites
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            RSVP tracking
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Calendar sync
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-600 mt-1" />
            Event analytics
          </li>
        </ul>
      </div>
    ),
  },
];

export function FeatureGrid() {
  return (
    <section className="py-10 bg-primary">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Core Capabilities
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything You Need to Launch and Scale Your Matrimony Platform
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, index) => (
    <div
      key={index}
      className={index === 0 ? "col-span-full" : ""}
    >
      <FeatureCard feature={feature} />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
