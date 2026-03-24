import { Metadata } from "next";
import FranchisePage from "@/components/sections/franchise/FranchisePage";

export const metadata: Metadata = {
  title: "Franchise Opportunity | EkamBond Matrimony Partner Network",
  description:
    "Own your territory. Build your brand. EkamBond franchise partners run thriving matrimony businesses with our complete technology platform — no tech skills needed.",
};

export default function Franchise() {
  return <FranchisePage />;
}
