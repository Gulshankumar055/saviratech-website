
const heroData = {
  rating: "5.00 from 144+ reviews",
  title: "Prioritize Safety and Ethics in Your",
  highlight: "Services Spotlight",
  description:
    "Expert guidance to conquer any challenge that comes your way.",
  buttons: [
    { text: "Shop All", link: "#", type: "primary" },
    { text: "Explore Features →", link: "#", type: "secondary" },
  ],
};

const imageColumns = [
  [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
  ],
  [
    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
  ],
];

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="Herogallery">
        <div className="container">
          <div className="Herogallery-wrapper">

            {/* LEFT CONTENT */}
            <div className="left-content">
              <div className="badge">
                <span className="star">★</span>
                <span>{heroData.rating}</span>
              </div>

              <h1>
                {heroData.title}
                <span className="highlight"> {heroData.highlight}</span>
              </h1>

              <p className="description">{heroData.description}</p>

              <div className="buttons">
                {heroData.buttons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.link}
                    className={`btn btn-${btn.type}`}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="right-images">
              <div className="image-gallery_wrapper">
                {imageColumns.map((column, colIndex) => (
                  <div className="image-column" key={colIndex}>
                    <div className="scroll-container">
                      {[...column, ...column].map((img, imgIndex) => (
                        <div className="img-box" key={imgIndex}>
                          <img src={img} alt="gallery" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
