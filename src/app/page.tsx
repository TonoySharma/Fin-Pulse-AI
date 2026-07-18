import { AiFeatureSection } from "@/components/AiFeatureSection";
import { Banner } from "@/components/Banner";
import FeaturedCards from "@/components/FeaturedCards";
import { Footer } from "@/components/Footer";
import { HighlightsSection } from "@/components/HighlightsSection";
import Marquee from "@/components/Marquee";
import { PartnerLogosSection } from "@/components/PartnerLogosSection";
import { PricingSection } from "@/components/PricingSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { SecuritySection } from "@/components/SecuritySection";




export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee></Marquee>
      <FeaturedCards></FeaturedCards>
      <HighlightsSection></HighlightsSection>
      <PricingSection></PricingSection>
      <AiFeatureSection></AiFeatureSection>
      <PartnerLogosSection></PartnerLogosSection>
      <RoadmapSection></RoadmapSection>
      <SecuritySection></SecuritySection>


      
      <Footer></Footer>
    </div>
  );
}
