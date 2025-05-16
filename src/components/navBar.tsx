import React, { useState, useEffect } from "react";
import NavItems from "./navItems";

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
      <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold whitespace-nowrap z-50">
        La Détente Angevine
      </div>

      <NavItems isMobile={false} />

      {/* Version mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden ml-auto relative w-8 h-8 z-50 flex flex-col justify-center cursor-pointer"
      >
        <span
          className={`hamburger 
      ${isMenuOpen ? "rotate-45 top-3.5" : "top-2"}`}
        />
        <span
          className={`hamburger
      ${isMenuOpen ? "opacity-0" : "top-4"}`}
        />
        <span
          className={`hamburger
      ${isMenuOpen ? "-rotate-45 top-3.5" : "top-6"}`}
        />
      </button>

      {isMenuOpen && <NavItems isMobile={true} />}
    </div>
  );
};

export default Navbar;
