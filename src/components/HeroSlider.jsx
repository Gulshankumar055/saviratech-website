import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "../assets/images/pexels-fauxels-3184434.jpg";

const slides = [
  {
    img: slide1,
    badge: "",
    title: "Build Powerful Digital Solutions for Your Business",
    desc: "We help businesses grow with professional websites, custom web applications, mobile apps, and digital marketing solutions. Our goal is to deliver scalable technology that improves efficiency and increases online visibility.",
    button: "Get Free Consultation"
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
                <NavLink to="/contact" className="btn btn-primary" onClick={() => window.scrollTo(0,0)}>
                  {slide.button}
                </NavLink>
                <NavLink to="/services" className="btn btn-secondary" onClick={() => window.scrollTo(0,0)}>
                  Learn More
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
