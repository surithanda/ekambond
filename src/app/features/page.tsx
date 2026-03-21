import React from "react";
import AIMatchmakingHero from "@/components/sections/features/ai-powered-section";
import BackgroundVerification from "@/components/sections/features/background-verfication";
import ProfileManagementHero from "@/components/sections/features/features-layout";
import GlobalSearch from "@/components/sections/features/global-search";
import HoroscopeIntegration from "@/components/sections/features/horoscope-section";
import EventInvites from "@/components/sections/features/events-section";
import NewsLetter from "@/components/sections/features/newsletter";
import HeroSectionDynamic from "@/components/sections/features/hero-section";
import HeroSection from "@/components/sections/features/hero-section";


export const metadata = {
  title:
    "EkamBond Enterprise Suite | Powerful Matchmaking APIs & Tools",
  description:
    "Explore our full suite of enterprise features for matrimony businesses including AI Matchmaking APIs, profile management software, and automated background checks.",
};

const Features: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProfileManagementHero />
      <BackgroundVerification />
      <GlobalSearch />
      <AIMatchmakingHero />
      <HoroscopeIntegration />
      <EventInvites />
      <NewsLetter />
    </div>
  );
};

export default Features;
