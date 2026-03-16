import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "EkamBond | Matrimony Partner Network",
  description:
    "EkamBond is a trusted Matrimony Partner Network powering modern matrimony platforms with AI matchmaking, background verification, and global reach — connecting hearts across continents.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "EkamBond | Matrimony Partner Network",
    description:
      "Powering the future of matrimony platforms with trust, technology, and meaningful connections.",
    type: "website",
    images: [{ url: "/Ekambond-3.jpeg", width: 1024, height: 512, alt: "EkamBond Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ background: "#F2F4F8" }}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
