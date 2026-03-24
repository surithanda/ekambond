import { Metadata } from "next";
import DownloadAppPage from "@/components/sections/download-app/DownloadAppPage";

export const metadata: Metadata = {
  title: "Download the App | EkamBond Matrimony Partner Network",
  description:
    "Add EkamBond to your home screen and use it like a native app on iPhone or Android — no app store needed. Step-by-step installation instructions for iOS and Android.",
};

export default function DownloadApp() {
  return <DownloadAppPage />;
}
