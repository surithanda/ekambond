import { redirect } from "next/navigation";
import TeamPage from "@/components/sections/team/TeamPage";

export const metadata = {
  title: "Our Team | EkamBond",
  description:
    "Meet the EkamBond leadership team — the engineers, strategists, and community builders powering the world's most trusted white-label matrimony platform.",
};

export default function Team() {
  // Hidden from public — only accessible in local development
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }
  return <TeamPage />;
}
