import { AiFeatureSection } from "@/components/AiFeatureSection";
import { Banner } from "@/components/Banner";
import FeaturedCards from "@/components/FeaturedCards";
import { Footer } from "@/components/Footer";
import { HighlightsSection } from "@/components/HighlightsSection";
import { InteractiveFeaturesSection } from "@/components/InteractiveFeaturesSection";
import { LargeCtaSection } from "@/components/LargeCtaSection";
import Marquee from "@/components/Marquee";
import { PartnerLogosSection } from "@/components/PartnerLogosSection";
import { PricingSection } from "@/components/PricingSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { SecuritySection } from "@/components/SecuritySection";
import { TestimonialsGridSection } from "@/components/TestimonialsGridSection";




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
      <InteractiveFeaturesSection></InteractiveFeaturesSection>
      <LargeCtaSection></LargeCtaSection>
      <TestimonialsGridSection></TestimonialsGridSection>
     
      <Footer></Footer>
    </div>
  );
}
