import PageHero from "../components/PageHero";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Transform your business with our comprehensive suite of digital solutions and technology services"
        bgImage={heroBg}
      />

      <section className="services-section">
        <div className="container">
          <div className="services-intro">
            <h2>Complete Digital Solutions</h2>
            <p>
              From concept to deployment, we provide end-to-end digital services that help businesses establish a strong online presence, 
              engage customers effectively, and achieve sustainable growth in the digital marketplace.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Custom websites and web applications built with cutting-edge technologies including React, Node.js, and cloud platforms. 
                We create responsive, scalable, and secure web solutions that deliver exceptional user experiences and drive business results.
              </p>
            </div>
            <div className="service-card">
              <h3>Mobile Apps</h3>
              <p>
                Native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. 
                Our mobile apps feature intuitive interfaces, robust functionality, and seamless integration with backend systems.
              </p>
            </div>
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                User-centered design solutions that prioritize usability, accessibility, and visual appeal. 
                We conduct thorough user research, create detailed wireframes and prototypes, and deliver pixel-perfect designs that convert visitors into customers.
              </p>
            </div>
            <div className="service-card">
              <h3>Digital Marketing</h3>
              <p>
                Comprehensive digital marketing strategies including SEO optimization, social media marketing, content creation, 
                PPC campaigns, and email marketing. We help businesses increase visibility, drive traffic, and generate qualified leads.
              </p>
            </div>
            <div className="service-card">
              <h3>E-commerce Solutions</h3>
              <p>
                Complete e-commerce platforms with secure payment gateways, inventory management, order processing, and customer support systems. 
                We build scalable online stores that provide seamless shopping experiences and maximize conversion rates.
              </p>
            </div>
            <div className="service-card">
              <h3>Technical Consulting</h3>
              <p>
                Strategic technology consulting and digital transformation planning. We assess your current systems, identify opportunities for improvement, 
                and develop roadmaps for implementing innovative solutions that align with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
