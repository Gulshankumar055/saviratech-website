import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "./src/assets//images/pexels-fauxels-3184434.jpg",
    badge: "Premium Business Solutions",
    title: "Transform Your Digital Presence",
    desc: "Elevate your brand with cutting-edge technology."
  },
  {
    img: "./src/assets//images/pexels-gustavo-fring-7446602.jpg",
    badge: "Innovation & Technology",
    title: "Building Tomorrow Today",
    desc: "Harness the power of advanced technology."
  },
  {
    img: "./src/assets//images/pexels-thirdman-7651922.jpg",
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
