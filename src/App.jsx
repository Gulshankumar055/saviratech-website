import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServicesPage from "./pages/Services";

export default function App() {

  useEffect(() => {
    // body me page name ki class
    document.body.className = "page-home";
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="main-content">
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
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ChatBot />
    </>
  );
}
