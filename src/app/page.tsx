import { Banner } from "@/components/Banner";
import FeaturedCards from "@/components/FeaturedCards";
import { Footer } from "@/components/Footer";
import { HighlightsSection } from "@/components/HighlightsSection";
import Marquee from "@/components/Marquee";




export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee></Marquee>
      <FeaturedCards></FeaturedCards>
      <HighlightsSection></HighlightsSection>



      
      <Footer></Footer>
    </div>
  );
}
