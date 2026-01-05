import { useEffect } from "react";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import ServicePlans from "./components/ServicePlans";
import Marquee from "./components/Marquee";
import BestDeals from "./components/BestDeals";
import StatsSection from "./components/StatsSection";
import VideoSection from "./components/VideoSection";
import Herogallery from "./components/Herogallery.jsx";
import Pricing from "./components/Pricing";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {

  useEffect(() => {
    // body me page name ki class
    document.body.className = "page-home";
  }, []);

  return (
    <>
      <div className="main-content">
        <Header />
        <HeroSlider />
        <Services />
        <ServicePlans />
        <Marquee />
        <BestDeals />
        <StatsSection />
        <VideoSection />
        <Herogallery />
        <Pricing />
        <ReviewSection />
        <Footer />
      </div>
      <ChatBot />
    </>
  );
}
