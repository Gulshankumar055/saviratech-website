export default function Marquee() {
  return (
    <section className="text-marquee">
      <div className="text-marquee__inner">

        {/* SET 1 */}
        <span className="marquee-item">
          <svg className="marquee-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Get Ready for <strong className="highlight">Sunshine</strong>
        </span>

        <span className="marquee-item">
          <svg className="marquee-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Get Ready for <strong className="highlight">Sunshine</strong>
        </span>

        {/* SET 2 (duplicate – mandatory for infinite scroll) */}
        <span className="marquee-item">
          <svg className="marquee-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Get Ready for <strong className="highlight">Sunshine</strong>
        </span>

        <span className="marquee-item">
          <svg className="marquee-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
            <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Get Ready for <strong className="highlight">Sunshine</strong>
        </span>

      </div>
    </section>
  );
}
