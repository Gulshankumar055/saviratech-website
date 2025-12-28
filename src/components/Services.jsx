export default function Services() {
  return (
    <section className="services-section">
      <div className="container">

        <div className="services-header">
          <h2 className="services-title"> Business Growth</h2>
          <p className="services-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapiente sint
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon icon-green">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <h3 className="service-title">Store Setup</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon icon-purple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="service-title">App Development</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon icon-red">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M1 12h6m6 0h6M3.8 3.8l4.2 4.2m6 0l4.2-4.2M3.8 20.2l4.2-4.2m6 0l4.2 4.2" />
              </svg>
            </div>
            <h3 className="service-title">Theme Development</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon icon-blue">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="service-title">Store Migration to Shopify</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon icon-orange">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <h3 className="service-title">Shopify SEO Services</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon icon-cyan">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </div>
            <h3 className="service-title">Shopify Website Maintenance</h3>
            <p className="service-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
