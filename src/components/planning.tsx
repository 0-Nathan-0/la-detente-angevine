import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

const pastEvents = [
  { src: "src/assets/exemple_evenements.png", title: "Janvier 2025" },
  { src: "src/assets/exemple_evenements.png", title: "Février 2025" },
  { src: "src/assets/exemple_evenements.png", title: "Mars 2025" },
  { src: "src/assets/exemple_evenements.png", title: "Avril 2025" },
  { src: "src/assets/exemple_evenements.png", title: "Mai 2025" },
  { src: "src/assets/exemple_evenements.png", title: "Juin 2025" },
];

const Planning: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4 overflow-hidden">
      <h1 className="flex justify-center text-3xl font-bold">
        Ce mois-ci, nous vous proposons :
      </h1>
      <div className="flex justify-center w-full mt-8 no-select">
        <img
          src="src/assets/exemple_evenements.png"
          alt="events"
          className="w-1/3 rounded-lg shadow-md"
        ></img>
      </div>
      <h2 className="flex justify-center text-2xl font-bold mt-8">
        Évenements passés :
      </h2>

      <Swiper
        modules={[Navigation, Scrollbar, Autoplay, EffectCards]}
        effect="cards"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        loop={true}
        navigation
        slidesPerView={3}
        cardsEffect={{
    perSlideOffset: 15,
    perSlideRotate: 5,
  }}
        className="w-full mt-8 no-select"
      >
        {pastEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={event.src}
                alt={event.title}
                className="rounded-lg shadow-md w-full max-w-xs mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Planning;
