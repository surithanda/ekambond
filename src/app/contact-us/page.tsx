import { Metadata } from "next";
import ContactPage from "@/components/sections/contactus/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | EkamBond Partner Network",
  description:
    "Get in touch with EkamBond. Call us, message us on WhatsApp, or fill out the contact form and our team will respond within 24 hours.",
};

export default function Contact() {
  return <ContactPage />;
}
