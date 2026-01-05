import { useState } from "react";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("personal");

  return (
    <section className="pricing-sec">
      <div className="pricing-sec__container container">
        
        {/* Heading */}
        <header className="pricing-sec__header">
          <h2 className="pricing-sec__title">
            Transparent Pricing for Quality Services
          </h2>
          <p className="pricing-sec__subtitle">
            Choose the perfect package for your digital transformation needs
          </p>
        </header>

        {/* Toggle */}
        <div className="pricing-sec__toggle">
          <button
            className={`pricing-sec__toggle-btn ${
              activePlan === "personal" ? "active" : ""
            }`}
            onClick={() => setActivePlan("personal")}
          >
            Web Solutions
          </button>

          <button
            className={`pricing-sec__toggle-btn ${
              activePlan === "business" ? "active" : ""
            }`}
            onClick={() => setActivePlan("business")}
          >
            Enterprise
          </button>
        </div>

        {/* Content */}
        <div className="pricing-sec__content">
          
          {/* PERSONAL */}
          {activePlan === "personal" && (
            <div className="pricing-sec__panel active" id="personal">
              <div className="pricing-sec__grid">

                {/* Card 1 */}
                <article className="price-card">
                  <h3 className="price-card__name">Basic Website</h3>
                  <p className="price-card__price">₹15,000</p>
                  <p className="price-card__desc">
                    Perfect for small businesses and startups
                  </p>

                  <ul className="price-card__list">
                    <li>5-page responsive website</li>
                    <li>Mobile-friendly design</li>
                    <li>Basic SEO setup</li>
                    <li>Contact form integration</li>
                    <li>3 months support</li>
                  </ul>

                  <button className="price-card__btn muted btn btn-primary">
                    Get Started
                  </button>
                </article>

                {/* Card 2 */}
                <article className="price-card featured">
                  <span className="price-card__tag">Most Popular</span>
                  <h3 className="price-card__name">Professional Website</h3>
                  <p className="price-card__price">₹35,000</p>
                  <p className="price-card__desc">
                    Complete web solution with advanced features
                  </p>

                  <ul className="price-card__list">
                    <li>10-page custom website</li>
                    <li>CMS integration</li>
                    <li>Advanced SEO optimization</li>
                    <li>Social media integration</li>
                    <li>Analytics setup</li>
                    <li>6 months support</li>
                  </ul>

                  <button className="price-card__btn primary btn btn-secondary">
                    Choose Professional
                  </button>
                </article>

              </div>
            </div>
          )}

          {/* BUSINESS */}
          {activePlan === "business" && (
            <div className="pricing-sec__panel active" id="business">
              <div className="pricing-sec__grid single">

                <article className="price-card featured">
                  <span className="price-card__tag">Complete Solution</span>
                  <h3 className="price-card__name">Enterprise Package</h3>
                  <p className="price-card__price">₹1,50,000</p>
                  <p className="price-card__desc">
                    Full digital transformation for large businesses
                  </p>

                  <ul className="price-card__list">
                    <li>Custom web application</li>
                    <li>Mobile app development</li>
                    <li>E-commerce platform</li>
                    <li>Digital marketing strategy</li>
                    <li>Advanced analytics & reporting</li>
                    <li>12 months premium support</li>
                    <li>Dedicated project manager</li>
                  </ul>

                  <button className="price-card__btn primary">
                    Contact for Enterprise
                  </button>
                </article>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
