import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import PwaInstallBanner from "@/components/PwaInstallBanner";
import PartnerNotificationBanner from "@/components/PartnerNotificationBanner";

export const metadata: Metadata = {
  title: "EkamBond | Matrimony Partner Network",
  description:
    "EkamBond is a trusted Matrimony Partner Network powering modern matrimony platforms with AI matchmaking, background verification, and global reach — connecting hearts across continents.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "EkamBond | Matrimony Partner Network",
    description:
      "Powering the future of matrimony platforms with trust, technology, and meaningful connections.",
    type: "website",
    images: [{ url: "/images/ekambond-logo.png", width: 324, height: 331, alt: "EkamBond Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D1208" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="EkamBond" />
        <link rel="apple-touch-startup-image" href="/images/ekambond-logo.png" />
      </head>
      <body className="antialiased" style={{ background: "transparent" }}>
        {/* ── Global watermark — appears on every page ── */}
        <div
          className="fixed inset-0 z-0 pointer-events-none select-none flex items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src="/images/ekambond-logo.png"
            alt=""
            width={700}
            height={700}
            className="object-contain"
            style={{ opacity: 0.065, filter: "blur(0.5px)" }}
            priority
          />
        </div>

        <Navbar />
        {/* pt-24 accommodates the taller navbar (logo now 64px) */}
        <div className="relative z-10 pt-24">
          {children}
        </div>
        <Footer />
        <PwaInstallBanner />
        <PartnerNotificationBanner />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
