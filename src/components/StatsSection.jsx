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
        <h2 className="section-title">Statistics and Achievements</h2>
        <p className="section-description">
          Explore the numbers, milestones that showcase our commitment to excellence.
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

          <h3 className="stat-title">A Thirst for Variety</h3>
          <p className="stat-description">
            With over 24 800 unique bottles sourced from 40 different countries,
            our store boasts one of the most diverse bottles collections in the region.
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
            data-target="80"
            data-suffix="%"
            ref={(el) => (countersRef.current[1] = el)}
          >
            0%
          </div>

          <h3 className="stat-title">Sustainability</h3>
          <p className="stat-description">
            We've transitioned to 80% eco-friendly packaging, reducing our carbon
            footprint significantly.
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
            data-target="10000"
            data-suffix="+"
            ref={(el) => (countersRef.current[2] = el)}
          >
            0+
          </div>

          <h3 className="stat-title">Customer Loyalty</h3>
          <p className="stat-description">
            More than 10,000 customers actively engage with our loyalty program.
          </p>
        </div>

      </div>
      </div>
    </section>
  );
}
