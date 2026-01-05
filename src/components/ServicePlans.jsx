export default function ServicePlans() {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "₹2,999",
      duration: "per month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Website Development (5 pages)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Email Support",
        "1 Year Free Hosting",
        "Basic Analytics Setup"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonClass: "btn-primary"
    },
    {
      id: 2,
      name: "Professional Plan",
      price: "₹7,999",
      duration: "per month",
      description: "Ideal for growing businesses needing advanced features",
      features: [
        "Website Development (15 pages)",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "Social Media Integration",
        "24/7 Support",
        "Custom Domain Setup",
        "Payment Gateway Integration",
        "Performance Optimization"
      ],
      popular: true,
      buttonText: "Most Popular",
      buttonClass: "btn-secondary"
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "₹15,999",
      duration: "per month",
      description: "Complete solution for large businesses and enterprises",
      features: [
        "Unlimited Pages Website",
        "Custom Web Application",
        "Advanced Analytics & Reporting",
        "Multi-platform Integration",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom API Development",
        "Advanced Security Features"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonClass: "btn-outline"
    }
  ];

  return (
    <section className="service-plans-section">
      <div className="container">

        {/* Header */}
        <div className="service-plans-header">
          <h2 className="service-plans-title">Service Plans</h2>
          <p className="service-plans-subtitle">
            Choose the perfect plan for your business needs. All plans include our core services with different feature sets.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="service-plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`service-plan-card ${plan.popular ? 'popular' : ''}`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="duration">{plan.duration}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="plan-footer">
                <button className={`btn ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="service-plans-bottom">
          <p className="bottom-text">
            Need a custom solution? <a href="#contact" className="contact-link">Contact us</a> for a personalized quote.
          </p>
        </div>

      </div>
    </section>
  );
}