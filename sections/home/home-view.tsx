import React from 'react'

// Components
import { Reveal } from '@/components/animations/Reveal'
// import CanvasHome from '@/components/CanvasHome'
import SmoothCarousel from '@/components/caroussels/SmoothCarousel'

// Utils
import { popularVideos } from '@/utils/data/videoData'

// ---------------------------------------------------------------------

type HomeViewProps = {
  content: {
    slogan: string
    description: string
  }
}
export default function Homeview({ content }: HomeViewProps) {
  return (
    <section className="hide-scrollbar">
      <header className="h-screen">{/* <HomeBanner /> */}</header>

      <div className="p-8 md:p-16" id="slogan">
        <Reveal dly={0.5} duration={1} initS={0.8}>
          <h1 className="text-4xl font-title mt-8 mx-6 tracking-wider">
            {content.slogan}
          </h1>
        </Reveal>
        <Reveal dly={0.7} duration={1} initS={0.9}>
          <h1 className="text-lg w-1/2 mx-auto font-title mt-8 tracking-wider">
            {content.description}
          </h1>
        </Reveal>
      </div>

      <div className="p-2 md:p-8 xl:p-16">
        <Reveal dly={1} initS={0.9} duration={1.5}>
          <SmoothCarousel slides={popularVideos} />
        </Reveal>
      </div>
    </section>
  )
}
