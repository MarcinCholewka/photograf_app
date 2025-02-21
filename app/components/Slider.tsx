"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Virtual } from "swiper/modules";
import { sliderItems } from "@/app/utils/slider";
import { useViewportHeight } from "@/app/hooks/useViewportHeight";

import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const navbarHeight = 65; // height of the navbar in pixels
  const sectionHeight = useViewportHeight(navbarHeight);

  return (
    <section className="relative w-full h-full">
      <Swiper
        style={{ height: sectionHeight }}
        modules={[Autoplay, EffectFade, Pagination, Virtual]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        virtual
      >
        {sliderItems.map(
          ({ id, image, heading, subheading, redirectionUrl }) => (
            <SwiperSlide key={id} className="cursor-grab">
              <div
                className="h-full flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="p-4 sm:p-0 text-center text-white rounded flex flex-col gap-8 items-center">
                  <h1 className="text-4xl sm:text-6xl font-bold">{heading}</h1>
                  <p className="text-2xl sm:text-xl font-semibold uppercase">
                    {subheading}
                  </p>
                  <Link
                    href={redirectionUrl}
                    className="py-3 bg-white text-black/85 rounded rounded-s shadow w-[200px]"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default Slider;
