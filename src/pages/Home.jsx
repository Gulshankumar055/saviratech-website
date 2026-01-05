import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import Marquee from "../components/Marquee";
import BestDeals from "../components/BestDeals";
import StatsSection from "../components/StatsSection";
import VideoSection from "../components/VideoSection";
import Herogallery from "../components/Herogallery";
import Pricing from "../components/Pricing";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <div className="main-content">
      <HeroSlider />
      <Services />
      <Marquee />
      <BestDeals />
      <StatsSection />
      <VideoSection />
      <Herogallery />
      <Pricing />
      <ReviewSection />
    </div>
  );
}
