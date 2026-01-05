export default function Services() {
  return (
    <section className="home-services-section">
      <div className="container">

        <div className="home-services-header">
          <h2 className="home-services-title">Our Expertise & Services</h2>
          <p className="home-services-subtitle">
            We provide comprehensive e-commerce solutions and digital services to help your business thrive in the online marketplace. From store setup to advanced marketing strategies, we deliver results that drive growth.
          </p>
        </div>

        <div className="home-services-grid">

          <div className="home-service-card">
            <div className="home-service-icon icon-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <h3 className="home-service-title">Store Setup</h3>
            <p className="home-service-description">
              Complete e-commerce store setup with custom design, payment integration, inventory management, and shipping configuration. We ensure your online store is fully functional and ready to accept orders from day one.
            </p>
          </div>

          <div className="home-service-card">
            <div className="home-service-icon icon-purple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="home-service-title">App Development</h3>
            <p className="home-service-description">
              Custom mobile applications for iOS and Android platforms. We create user-friendly apps that enhance your customer experience, increase engagement, and drive more sales through mobile commerce.
            </p>
          </div>

          <div className="home-service-card">
            <div className="home-service-icon icon-red">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M3.8 3.8l4.2 4.2m6 0l4.2-4.2M3.8 20.2l4.2-4.2m6 0l4.2 4.2" />
              </svg>
            </div>
            <h3 className="home-service-title">Theme Development</h3>
            <p className="home-service-description">
              Custom Shopify theme development tailored to your brand identity. We create responsive, conversion-optimized themes that provide exceptional user experience and reflect your unique business personality.
            </p>
          </div>

          <div className="home-service-card">
            <div className="home-service-icon icon-blue">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="home-service-title">Store Migration to Shopify</h3>
            <p className="home-service-description">
              Seamless migration from any e-commerce platform to Shopify. We handle data transfer, product migration, customer information, and ensure zero downtime during the transition process.
            </p>
          </div>

          <div className="home-service-card">
            <div className="home-service-icon icon-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <h3 className="home-service-title">Shopify SEO Services</h3>
            <p className="home-service-description">
              Advanced SEO optimization for your Shopify store. We implement technical SEO, content optimization, schema markup, and performance enhancements to improve your search engine rankings and organic traffic.
            </p>
          </div>

          <div className="home-service-card">
            <div className="home-service-icon icon-cyan">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </div>
            <h3 className="home-service-title">Shopify Website Maintenance</h3>
            <p className="home-service-description">
              Ongoing website maintenance and support services. Regular updates, security monitoring, performance optimization, and technical support to keep your store running smoothly and securely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
