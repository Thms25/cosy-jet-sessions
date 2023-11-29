"use client";

// Hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Styles
import styles from "styles/carousel.module.scss";
import { arrowLeft, arrowRight } from "@/utils/data/svgData";

// Components
import YoutubeVideo from "../videos/YoutubeVideo";

// ----------------------------------------------------

export default function SmoothCarousel({ slides }) {
  return (
    <Swiper
      className={styles.swiper}
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={styles.slideInner}>
          <img src={slide} alt="" />
        </SwiperSlide>
      ))}
      <div className="button-prev">{arrowLeft}</div>
      <div className="button-next">{arrowRight}</div>
    </Swiper>
  );
}
