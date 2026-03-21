import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Marquee from "../components/Marquee";
import BestDeals from "../components/BestDeals";
import StatsSection from "../components/StatsSection";
import VideoSection from "../components/VideoSection";
import Herogallery from "../components/Herogallery";
import Pricing from "../components/Pricing";
import ReviewSection from "../components/ReviewSection";
import HomeContact from "../components/HomeContact";

export default function Home() {
  return (
    <div className="main-content">
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <Marquee />
      <BestDeals />
      <StatsSection />
      <VideoSection />
      <Herogallery />
      <Pricing />
      <ReviewSection />
      <HomeContact />
    </div>
  );
}
