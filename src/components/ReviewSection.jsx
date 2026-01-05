// ReviewSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sarah Chen",
    rating: 5,
    text: "Saviratech transformed our e-commerce platform completely. The new website increased our conversion rate by 40% and the mobile app has been a game-changer for our customers.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "David Rodriguez",
    rating: 5,
    text: "Outstanding web development work! They delivered our custom CRM system on time and within budget. The UI/UX design is intuitive and our team productivity has improved significantly.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Lisa Thompson",
    rating: 5,
    text: "The digital marketing strategy they implemented boosted our online visibility tremendously. We've seen a 300% increase in qualified leads since working with Saviratech.",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Marcus Johnson",
    rating: 4,
    text: "Professional team with excellent technical expertise. They helped us migrate our legacy system to a modern cloud-based solution. Highly recommend their consulting services.",
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

function ReviewSection() {
  return (
    <section className="review-section">
      <div className="review-container">
        <h2 className="review-title">Customer Reviews</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="review-avatar"
                />

                <h3 className="review-name">{review.name}</h3>

                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating ? "star active" : "star"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="review-text">"{review.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewSection;
