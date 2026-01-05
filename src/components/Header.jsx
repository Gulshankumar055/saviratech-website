import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";

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

  // mobile menu close
  const closeMenu = () => {
    navRef.current.classList.remove("active");
  };

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
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          {/* NAV */}
          <nav className="header__nav" id="headerNav" ref={navRef}>
            <ul className="header__menu">
              <li className="header__menu-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "header__link active" : "header__link"
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="header__menu-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "header__link active" : "header__link"
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li className="header__menu-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "header__link active" : "header__link"
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>

              <li className="header__menu-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "header__link active" : "header__link"
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="header__actions">
            <NavLink
              to="/contact"
              className="header__btnS btn btn-secondary"
              onClick={closeMenu}
            >
              Get Quote
            </NavLink>

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
