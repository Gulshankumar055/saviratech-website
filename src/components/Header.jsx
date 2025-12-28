import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const nav = navRef.current;
    const toggle = toggleRef.current;

    const onScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add("header--scrolled");
        header.classList.remove("header--transparent");
      } else {
        header.classList.add("header--transparent");
        header.classList.remove("header--scrolled");
      }
    };

    const onToggle = () => {
      nav.classList.toggle("active");
    };

    window.addEventListener("scroll", onScroll);
    toggle.addEventListener("click", onToggle);

    return () => {
      window.removeEventListener("scroll", onScroll);
      toggle.removeEventListener("click", onToggle);
    };
  }, []);

  return (
    <header
      className="header header--transparent"
      id="siteHeader"
      ref={headerRef}
    >
      <div className="header__container container">
        <div className="header__row">

          {/* LOGO */}
          <div className="header__logo">
            <img src="/src/assets/images/logo.png" alt="Logo" />
          </div>

          {/* NAV */}
          <nav className="header__nav" id="headerNav" ref={navRef}>
            <ul className="header__menu">
              <li className="header__menu-item">
                <a href="#" className="header__link">Home</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__link">About</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__link">Services</a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="header__actions">
            <a href="#" className="header__btnS btn btn-secondary">
              Get Quote
            </a>

            <button
              className="header__toggle"
              id="menuToggle"
              ref={toggleRef}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
