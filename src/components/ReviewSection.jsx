// ReviewSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "Amazing service! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    rating: 4,
    text: "Good quality products and fast delivery.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Johnson",
    rating: 5,
    text: "Customer support was very helpful and responsive.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emma Watson",
    rating: 4,
    text: "Great experience, will buy again!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
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
