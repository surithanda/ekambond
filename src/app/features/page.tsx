import { Metadata } from "next";
import FeaturesPage from "@/components/sections/features/FeaturesPage";

export const metadata: Metadata = {
  title: "Platform Features | EkamBond Matrimony Partner Network",
  description:
    "Explore EkamBond's full feature set: member-facing Matrimony UI, powerful Partner Admin Portal, AI-powered search & matching, and upcoming Horoscope Integration, Messaging, and Video Calling.",
};

export default function Features() {
  return <FeaturesPage />;
}
