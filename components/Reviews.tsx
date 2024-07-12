"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { IconArrowNarrowLeft, IconArrowRight } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const reviews = [
  {
    message:
      "Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.",
  },
  {
    message:
      "Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.",
  },
  {
    message:
      "Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.",
  },
  {
    message:
      "Estamos muy satisfechos con el trabajo realizado por el equipo de nox. Desde un inicio se evidencia un equipo muy profesional y comprometidos con lo que hacen.",
  },
];

export default function Reviews() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div id="comentarios" className="py-20 text-brand_dark px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-brand_dark sm:text-4xl">
          Nuestros Clientes Hablan
        </h2>
        <p className="mt-4 text-muted-foreground">
          Hemos pedido a alguno de nuestros clientes que emitan su valoración y
          estos son sus comentarios
        </p>
      </div>
      <div className="relative mt-10 flex items-center justify-between space-x-4 max-w-4xl mx-auto">
        <Swiper
          slidesPerGroupAuto
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          className=" card-slider-4-columns !py-10"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-xl text-center mx-auto">
                <div className="text-2xl text-accent-foreground mx-auto">
                  <Image
                    alt="quote"
                    width={24}
                    height={24}
                    src="/quote.svg"
                    className="mx-auto mb-6"
                  />
                </div>
                <p className="text-lg">{review.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={navigationPrevRef}
          className="snbp2 absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 cursor-pointer"
        >
          <IconArrowNarrowLeft size={24} />
        </div>
        <div
          ref={navigationNextRef}
          className="snbn1 absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-20 cursor-pointer"
        >
          <IconArrowRight size={24} />
        </div>
      </div>
    </div>
  );
}
