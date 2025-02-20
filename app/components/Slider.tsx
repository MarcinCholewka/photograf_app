"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Virtual } from "swiper/modules";

import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const [slides] = useState([
    {
      id: 1,
      image:
        "https://www.alexbucklandphotography.co.uk/wp-content/uploads/2024/01/wedding-day-timeline-003-1024x682.jpg",
      heading: "Profesjonalne fotografie ślubne",
      subheading: "Zatrzymaj wspomnienia na zawsze",
      redirectionUrl: "#weddings",
    },
    {
      id: 2,
      image:
        "https://matchthemes.com/demowp/luminis/wp-content/uploads/portrait-5.jpg",
      heading: "Portrety",
      subheading: "Esse cillum dolore",
      redirectionUrl: "#portraits",
    },
  ]);

  return (
    <div className="relative h-slider w-full">
      <Swiper
        className="h-slider"
        modules={[Autoplay, EffectFade, Pagination, Virtual]}
        // spaceBetween={25}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        virtual
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="cursor-grab">
            <div
              className="h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-center text-white rounded flex flex-col gap-8 items-center">
                <h1 className="text-6xl font-bold">{slide.heading}</h1>
                <p className="text-xl font-semibold uppercase">
                  {slide.subheading}
                </p>
                <Link
                  href={slide.redirectionUrl}
                  className="py-3 bg-white text-black/85 rounded rounded-s shadow w-[200px]"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
