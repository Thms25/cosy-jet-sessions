'use client'

// Hooks
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Utils
import { arrowLeft, arrowRight } from '@/utils/data/svgData'

// Components
import YoutubeVideo from '../videos/YoutubeVideo'
import { useWindowSize } from '@/hooks/useWindowSize'

// ----------------------------------------------------

export default function SmoothCarousel({ slides }) {
  const { width } = useWindowSize()
  const isSmall = width < 640
  const isMedium = width < 880

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: '.button-prev',
        nextEl: '.button-next',
      }}
      pagination={{
        clickable: true,
      }}
      speed={800}
      slidesPerView={'auto'}
      centeredSlides
      initialSlide={2}
      preventClicks={true}
      effect={'coverflow'}
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
            width={isSmall ? 400 : isMedium ? 480 : 640}
            height={isSmall ? 240 : isMedium ? 290 : 390}
          />
        </SwiperSlide>
      ))}
      <div className="button-prev w-10 h-10 hidden sm:block">{arrowLeft}</div>
      <div className="button-next w-10 h-10 hidden sm:block">{arrowRight}</div>
    </Swiper>
  )
}
