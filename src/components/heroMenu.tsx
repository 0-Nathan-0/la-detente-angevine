import React from "react";

const Hero: React.FC = () => {
  return (
    <section
    >
      <img
        id="photoDeCouverture"
        src="https://media.istockphoto.com/id/649668978/fr/photo/boissons-et-la-nourriture-de-pub.jpg?s=612x612&w=0&k=20&c=01sdZ7GBbePyYgbkrCoL_TpZVM75erRCGFyw8cwvqqA="
        alt="Bar"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Découvrez nos plats et boissons 🍾
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique
            animi dicta. Vero, enim obcaecati.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
