import PageHero from "../components/PageHero";
import heroBg from "../assets/images/hero-bg.jpg";

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="We build scalable digital products for modern businesses"
        bgImage={heroBg}
      />

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Saviratech is a premier technology solutions provider founded with a vision to bridge the gap between innovative ideas and successful digital implementations. We specialize in creating comprehensive web development, mobile applications, and e-commerce solutions that empower businesses to thrive in the digital marketplace.
              </p>
              <p>
                Our journey began with a simple belief: every business deserves access to world-class technology solutions. Over the years, we've grown from a small development team to a full-service digital agency, serving clients across industries and continents. Our commitment to excellence, innovation, and client success has made us a trusted partner for businesses seeking digital transformation.
              </p>
              <p>
                We combine technical expertise with creative vision to deliver solutions that not only meet current needs but also anticipate future challenges. Our team of skilled developers, designers, project managers, and digital strategists work collaboratively to ensure every project exceeds expectations and delivers measurable results.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
