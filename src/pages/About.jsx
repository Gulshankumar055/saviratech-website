import PageHero from "../components/PageHero";
import heroBg from "../assets/images/hero-bg.jpg";

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="We build scalable digital products for modern businesses"
        bgImage={heroBg}
      />

      <div className="main-content">
        {/* page content */}
      </div>
    </>
  );
}
