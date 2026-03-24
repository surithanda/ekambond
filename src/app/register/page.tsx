import { Metadata } from "next";
import PartnerRegisterForm from "@/components/sections/register/PartnerRegisterForm";

export const metadata: Metadata = {
  title: "Become a Partner | EkamBond Matrimony Platform",
  description:
    "Register your matrimony organization on the EkamBond platform. Get your white-label website, AI-powered search, and partner admin portal — live in 1–2 weeks.",
};

export default function RegisterPage() {
  return <PartnerRegisterForm />;
}
