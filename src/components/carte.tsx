import React from "react";
import Masonry from "react-masonry-css";
import CarteSection from "./carteSection";

const breakpointColumnsObj = {
  default: 2,
  768: 1,
};



const entrees = [
  { name: "Salade César", price: "9,50€" },
  { name: "Bruschetta", price: "8,00€" },
  { name: "Soupe du jour", price: "7,00€" },
  { name: "Tartare de saumon", price: "12,00€" },
];

const plats = [
  { name: "Boeuf Bourguignon", price: "15,00€" },
  { name: "Coq au Vin", price: "14,50€" },
  { name: "Ratatouille", price: "13,00€" },
  { name: "Magret de Canard", price: "16,00€" },
];

const desserts = [
  { name: "Tarte Tatin", price: "6,00€" },
  { name: "Crème Brûlée", price: "5,50€" },
  { name: "Mousse au Chocolat", price: "5,00€" },
  { name: "Profiteroles", price: "6,50€" },
];

const boissons = [
  { name: "Coca-Cola", price: "2,50€" },
  { name: "Eau Minérale", price: "2,00€" },
  { name: "Vin Rouge", price: "4,00€" },
  { name: "Vin Blanc", price: "4,00€" },
  { name: "Bière Artisanale", price: "5,00€" },
  { name: "Jus de Fruits", price: "3,00€" },
  { name: "Thé Glacé", price: "2,50€" },
  { name: "Café", price: "2,00€" },
  { name: "Thé", price: "2,00€" },
];

const aPartager = [
  { name: "Planche de Charcuterie", price: "15,00€" },
  { name: "Planche de Fromages", price: "15,00€" },
  { name: "Saucissons", price: "5,00€" },
  { name: "Tapenade", price: "6,00€" },
  { name: "Olives Marinées", price: "4,00€" },
  { name: "Fruits Secs", price: "5,00€" },
  { name: "Pain de Campagne", price: "3,00€" },
  { name: "Baguette Tradition", price: "1,50€" },
  { name: "Focaccia", price: "4,00€" },
  { name: "Pain Complet", price: "2,50€" },
];

const Carte: React.FC = () => {
  return (
    <section className="px-4 py-6">
      <Masonry breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6">
      <CarteSection title="Entrées" items={entrees} />
      <CarteSection title="Plats" items={plats} />
      <CarteSection title="Desserts" items={desserts} />
      <CarteSection title="Boissons" items={boissons} />
      <CarteSection title="À Partager" items={aPartager} />
      </Masonry>
    </section>
  );
};

export default Carte;
