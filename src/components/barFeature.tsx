import React from "react";

interface BarFeatureProps {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const BarFeature: React.FC<BarFeatureProps> = ({
  image,
  title,
  text,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col items-center md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-3/5">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-9 bg-gray-200 shadow-lg p-5 rounded-lg md:w-2/5 md:mt-0 md:ml-6 md:mr-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{text}</p>
      </div>
    </div>
  );
};

export default BarFeature;
