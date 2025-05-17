import React from "react";

type CarteSectionProps = {
  title: string;
  items: { name: string; price: string }[];
};

const CarteSection: React.FC<CarteSectionProps> = ({ title, items }) => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-center text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-col items-center justify-center space-y-2">
        {items.map((item, index) => (
          <p key={index} className="w-full flex justify-between px-4">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default CarteSection;
