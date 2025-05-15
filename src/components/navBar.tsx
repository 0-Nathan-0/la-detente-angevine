import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [showBg, setShowBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const photoDeCouverture = document.getElementById("photoDeCouverture");
    const handleScroll = () => {
      if (photoDeCouverture) {
        setShowBg(scrollY > photoDeCouverture.offsetHeight - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed text-white w-full flex justify-between px-6 py-4 z-10 ${
        showBg ? "bg-black" : "bg-transparent"
      } animation duration-400`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-center">
        La Détente Angevine
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#accueil" className="nav-link">
            Accueil
          </a>
        </li>
        <li>
          <a href="#menu" className="nav-link">
            Menu
          </a>
        </li>
      </ul>

      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#reservation" className="nav-link">
            Réservation
          </a>
        </li>
        <li>
          <a href="#aPropos" className="nav-link">
            À Propos
          </a>
        </li>
      </ul>

      <button
        className="md:hidden z-50 text-white ml-auto duration-200 hover:scale-110 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <ul
          className="fixed top-0 py-15 right-0 h-full w-1/4 bg-black text-white p-6 items-end md:hidden z-40 animate-slide-in"
        >
          <li>
            <a href="#accueil" className="nav-link">
              Accueil
            </a>
          </li>
          <li>
            <a href="#menu" className="nav-link">
              Menu
            </a>
          </li>
          <li>
            <a href="#reservation" className="nav-link">
              Réservation
            </a>
          </li>
          <li>
            <a href="#aPropos" className="nav-link">
              À Propos
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
