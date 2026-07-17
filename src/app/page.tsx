import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GlobalVision } from "@/components/sections/GlobalVision";
import { Hero } from "@/components/sections/Hero";
import { PartnerBenefits } from "@/components/sections/PartnerBenefits";
import { Process } from "@/components/sections/Process";
import { SustainablePortfolio } from "@/components/sections/SustainablePortfolio";
import { TrustTransparency } from "@/components/sections/TrustTransparency";
import { WhyAmerica } from "@/components/sections/WhyAmerica";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GlobalVision />
        <WhyAmerica />
        <PartnerBenefits />
        <Process />
        <SustainablePortfolio />
        <TrustTransparency />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
