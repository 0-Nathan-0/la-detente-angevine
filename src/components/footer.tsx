// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="flex justify-between px-25 max-w-6xl mx-auto text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-3">Adresse</h3>
          <p>La Détente Angevine, 123 Rue du Maréchal Loison, 49100 Angers</p>
          <p></p>
          <p></p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>
            Email :{" "}
            <a href="mailto:?" className="hover:underline">
              contact@detenteangevine.fr
            </a>
          </p>
          <p>
            Tél :{" "}
            <a href="tel:?" className="hover:underline">
              01 23 45 67 89
            </a>
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} La Détente Angevine — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
