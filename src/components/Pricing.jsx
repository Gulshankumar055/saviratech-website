import { useState } from "react";

export default function Pricing() {
  const [activePlan, setActivePlan] = useState("personal");

  return (
    <section className="pricing-sec">
      <div className="pricing-sec__container container">
        
        {/* Heading */}
        <header className="pricing-sec__header">
          <h2 className="pricing-sec__title">
            Simple pricing for every stage
          </h2>
          <p className="pricing-sec__subtitle">
            Choose a plan that grows with your business
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
            Personal
          </button>

          <button
            className={`pricing-sec__toggle-btn ${
              activePlan === "business" ? "active" : ""
            }`}
            onClick={() => setActivePlan("business")}
          >
            Business
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
                  <h3 className="price-card__name">Free</h3>
                  <p className="price-card__price">₹0</p>
                  <p className="price-card__desc">
                    For trying out the platform
                  </p>

                  <ul className="price-card__list">
                    <li>Basic usage</li>
                    <li>Limited features</li>
                    <li>Email support</li>
                  </ul>

                  <button className="price-card__btn muted btn btn-primary">
                    Current Plan
                  </button>
                </article>

                {/* Card 2 */}
                <article className="price-card featured">
                  <span className="price-card__tag">Recommended</span>
                  <h3 className="price-card__name">Go</h3>
                  <p className="price-card__price">₹0</p>
                  <p className="price-card__desc">
                    Powerful tools for individuals
                  </p>

                  <ul className="price-card__list">
                    <li>Extended limits</li>
                    <li>Smarter responses</li>
                    <li>Priority support</li>
                  </ul>

                  <button className="price-card__btn primary btn btn-secondary">
                    Upgrade to Go
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
                  <span className="price-card__tag">Best for teams</span>
                  <h3 className="price-card__name">Business</h3>
                  <p className="price-card__price">₹2,099</p>
                  <p className="price-card__desc">
                    Advanced AI for growing teams
                  </p>

                  <ul className="price-card__list">
                    <li>Unlimited usage</li>
                    <li>Team collaboration</li>
                    <li>SSO & security</li>
                    <li>Dedicated support</li>
                  </ul>

                  <button className="price-card__btn primary">
                    Get Business
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
