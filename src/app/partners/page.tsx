import { Metadata } from "next";
import PartnersPage from "@/components/sections/partners/PartnersPage";

export const metadata: Metadata = {
  title: "Become a Partner | EkamBond Matrimony Platform",
  description:
    "Partner with EkamBond to launch your branded matrimony platform in 1–2 weeks. Built for marriage bureaus, community organizations, and professional matchmakers.",
};

export default function Partners() {
  return <PartnersPage />;
}