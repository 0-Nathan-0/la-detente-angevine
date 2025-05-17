import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-5 py-10">


      <div className="container flex w-full justify-between items-center mx-auto text-sm gap-5">

        <div>
          <h3 className="text-lg font-semibold mb-3">Adresse</h3>
          <p>La Détente Angevine</p>
          <p>123 Rue du Maréchal Loison</p>
          <p>49100 Angers</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Horaires</h3>
          <ul>
            <li>Lundi - Vendredi : 10h - 23h</li>
            <li>Samedi : 10h - 1h</li>
            <li>Dimanche : 10h - 22h</li>
          </ul>
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
