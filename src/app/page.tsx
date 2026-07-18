import { Banner } from "@/components/Banner";
import FeaturedCards from "@/components/FeaturedCards";
import FeaturedProduct from "@/components/FeaturedCards";
import { Footer } from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { StatsSection } from "@/components/StatsSection";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marquee></Marquee>
      <FeaturedCards></FeaturedCards>
      <StatsSection></StatsSection>



      
      <Footer></Footer>
    </div>
  );
}
