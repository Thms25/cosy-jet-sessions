"use client";

// Hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Utils
import { arrowLeft, arrowRight } from "@/utils/data/svgData";

// Components
import YoutubeVideo from "../videos/YoutubeVideo";

// ----------------------------------------------------

export default function SmoothCarousel({ slides }) {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={800}
      slidesPerView={"auto"}
      centeredSlides
      initialSlide={2}
      preventClicks={true}
      effect={"coverflow"}
      lazyPreloadPrevNext={2}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
      coverflowEffect={{
        rotate: 80,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <YoutubeVideo
            key={index}
            videoId={slide.videoId}
            iframeClassName="homeVidFrame"
            width={640}
            height={390}
          />
        </SwiperSlide>
      ))}
      <div className="button-prev w-10 h-10 hidden md:block">{arrowLeft}</div>
      <div className="button-next w-10 h-10 hidden md:block">{arrowRight}</div>
    </Swiper>
  );
}
