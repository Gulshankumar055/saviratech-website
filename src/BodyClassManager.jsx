import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BodyClassManager = () => {
  const location = useLocation();

  useEffect(() => {
    // saari purani body classes hatao
    document.body.className = "";

    // URL se page name nikalo
    const pageClass =
      location.pathname === "/"
        ? "page-home"
        : `page-${location.pathname.replace("/", "")}`;

    document.body.classList.add(pageClass);
  }, [location]);

  return null; // UI kuch nahi dikhata
};

export default BodyClassManager;
