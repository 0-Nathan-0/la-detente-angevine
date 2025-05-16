import React from "react";
import { Link } from "react-router-dom";

type NavItemsProps = {
  isMobile: boolean;
};

const items = [
  { label: "Accueil", to: "#accueil" },
  { label: "Menu", to: "/menu" },
  { label: "Réserver", to: "#reservation" },
  { label: "À Propos", to: "#aPropos" },
];

const NavItems: React.FC<NavItemsProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <ul className="fixed top-0 right-0 pt-15 h-full sm:p-6 w-1/4 bg-black animate-slide-in z-40 md:hidden">
        {items.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2, 4);

  return (
    <div className="hidden md:flex md:justify-between md:w-full">
      <ul className="flex space-x-6">
        {leftItems.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-6">
        {rightItems.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
