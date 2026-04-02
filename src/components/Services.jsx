import { SERVICES } from "../data/servicesData";

const ICON_CLASS_MAP = {
  grid: "icon-green",
  code: "icon-purple",
  spark: "icon-red",
  doc: "icon-blue",
  thumb: "icon-orange",
  mic: "icon-cyan",
  file: "icon-green",
  database: "icon-purple",
  pulse: "icon-red",
  chart: "icon-blue"
};

const ICON_EMOJI_MAP = {
  grid: "🛒",
  code: "🛍️",
  spark: "⚙️",
  doc: "📱",
  thumb: "🎨",
  mic: "🎯",
  file: "✍️",
  database: "🗄️",
  pulse: "☁️",
  chart: "📈"
};

function renderServiceIcon(icon) {
  return <span className="home-service-emoji">{ICON_EMOJI_MAP[icon] || "💼"}</span>;
}

export default function Services() {
  return (
    <section className="home-services-section">
      <div className="container">
        <div className="home-services-header">
          <h2 className="home-services-title">Our Services</h2>
          <p className="home-services-subtitle">
            We provide complete digital services to help businesses establish a strong online presence and grow with modern technology.
          </p>
        </div>

        <div className="home-services-grid">
          {SERVICES.map((service) => (
            <div className="home-service-card" key={service.id}>
              <div className={`home-service-icon ${ICON_CLASS_MAP[service.icon] || "icon-blue"}`}>
                {renderServiceIcon(service.icon)}
              </div>

              <h3 className="home-service-title">{service.title}</h3>

              {service.priceLabel ? <p className="home-service-price">{service.priceLabel}</p> : null}

              <p className="home-service-description">{service.description}</p>

              {service.features?.length ? (
                <ul className="home-service-features">
                  {service.features.map((feature) => (
                    <li key={`${service.id}-${feature}`}>{feature}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
