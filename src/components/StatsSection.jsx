import { useEffect, useRef } from "react";


export default function StatsSection() {
  const countersRef = useRef([]);

  useEffect(() => {
    function animateCounter(element, target, duration = 2000) {
      const suffix = element.dataset.suffix || "";
      const numericTarget = parseFloat(target);
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(easeOutQuad * numericTarget);

        let formatted = current.toString();
        if (current >= 1000) {
          formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        element.textContent = formatted + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          let finalValue = numericTarget.toString();
          if (numericTarget >= 1000) {
            finalValue = finalValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          }
          element.textContent = finalValue + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
            entry.target.classList.add("counted");
            animateCounter(entry.target, entry.target.dataset.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-numbers">
        <div className="container"> 
      <div className="section-header"> 
        <h2 className="section-title">Our Impact & Achievements</h2>
        <p className="section-description">
          Discover the numbers that showcase our dedication to delivering exceptional digital solutions and driving business success for our clients.
        </p>
      </div>

      <div className="stats-grid">

        {/* CARD 1 */}
        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 48 48" fill="none">
            <path d="M24 8C24 8 16 12 16 20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20C32 12 24 8 24 8Z" stroke="currentColor" strokeWidth="2" />
            <path d="M24 28V40" stroke="currentColor" strokeWidth="2" />
            <path d="M12 40H36" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div
            className="stat-number"
            data-target="24800"
            ref={(el) => (countersRef.current[0] = el)}
          >
            0
          </div>

          <h3 className="stat-title">Projects Delivered</h3>
          <p className="stat-description">
            Successfully completed over 24,800 digital projects across web development, mobile apps, and e-commerce solutions for clients worldwide.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 48 48" fill="none">
            <path d="M8 36L16 28L24 32L40 16" stroke="currentColor" strokeWidth="2" />
            <path d="M32 16H40V24" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div
            className="stat-number"
            data-target="98"
            data-suffix="%"
            ref={(el) => (countersRef.current[1] = el)}
          >
            0%
          </div>

          <h3 className="stat-title">Client Satisfaction</h3>
          <p className="stat-description">
            98% of our clients report complete satisfaction with our services, with projects delivered on time and exceeding expectations.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="stat-card">
          <svg className="stat-icon" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
            <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div
            className="stat-number"
            data-target="500"
            data-suffix="+"
            ref={(el) => (countersRef.current[2] = el)}
          >
            0+
          </div>

          <h3 className="stat-title">Active Clients</h3>
          <p className="stat-description">
            Over 500 businesses trust us with their digital transformation, from startups to enterprise-level corporations across the globe.
          </p>
        </div>

      </div>
      </div>
    </section>
  );
}
