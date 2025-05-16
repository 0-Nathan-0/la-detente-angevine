import React from "react";
import Masonry from "react-masonry-css";

type CarteSectionProps = {
  title: string;
  items: { name: string; price: string }[];
};

const CarteSection: React.FC<CarteSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col md:w-[48%] bg-white-100 shadow-lg rounded-lg py-10">
      <h3 className="flex justify-center text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-col items-center justify-center space-y-2">
        {items.map((item, index) => (
          <p key={index}>
            {item.name}
            <span className="float-right ml-4"> {item.price}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CarteSection;
