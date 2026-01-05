export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="page-hero__overlay"></div>

      <div className="page-hero__content container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
