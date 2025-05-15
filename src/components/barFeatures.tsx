import React from "react";
import BarFeature from "./barFeature";

const BarFeatures: React.FC = () => {
  return (
    <section className="flex flex-col py-16 px-6 gap-y-20">
      <BarFeature
        image="https://ehonline.eu/wp-content/uploads/2018/11/alcohol-bar-beer-min-scaled.jpg"
        title="lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Modi ea iste magni repellat assumenda, cupiditate pariatur. 
        Eius voluptates adipisci quis reprehenderit harum molestias quaerat maxime"
      />

      <BarFeature
        image="https://ehonline.eu/wp-content/uploads/2018/11/alcohol-bar-beer-min-scaled.jpg"
        title="lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Eligendi repellat quo sed voluptatum velit mollitia consectetur, maxime, 
        aperiam nostrum illo a laborum odit illum quidem."
        reverse
      />
    </section>
  );
};

export default BarFeatures;
