import React from "react";

const Hero: React.FC = () => {
  return (
    <section
    >
      <img
        id="photoDeCouverture"
        src="https://plus.unsplash.com/premium_photo-1670984940156-c7f833fe8397?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fHww"
        alt="Bar"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue à La Détente Angevine
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
