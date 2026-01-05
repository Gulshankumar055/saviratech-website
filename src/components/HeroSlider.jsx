import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "../assets/images/pexels-fauxels-3184434.jpg";
import slide2 from "../assets/images/pexels-gustavo-fring-7446602.jpg";
import slide3 from "../assets/images/pexels-thirdman-7651922.jpg";

const slides = [
  {
    img: slide1,
    badge: "Premium Business Solutions",
    title: "Transform Your Digital Presence",
    desc: "Elevate your brand with cutting-edge technology."
  },
  {
    img: slide2,
    badge: "Innovation & Technology",
    title: "Building Tomorrow Today",
    desc: "Harness the power of advanced technology."
  },
  {
    img: slide3,
    badge: "Global Excellence",
    title: "Connect With The World",
    desc: "Expand your horizons worldwide."
  }
];

export default function HeroSlider() {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        speed={1200}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt={slide.title} className="slide-bg" />
            <div className="slide-overlay"></div>

            <div className="slide-content">
              <div className="slide-badge">{slide.badge}</div>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.desc}</p>

              <div className="slide-buttons">
                <a href="#" className="btn btn-primary">
                  Get Started →
                </a>
                <a href="#" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
