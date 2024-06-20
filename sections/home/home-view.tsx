// Components
import { HomeBanner } from '@/components/Banners/HomeBanner'
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
      <header className="h-screen">
        <HomeBanner />
      </header>

      <div
        className="px-8 my-8 w-full md:w-1/2 flex flex-col items-center justify-center mx-auto"
        id="slogan"
      >
        <Reveal dly={0.4} duration={1} initS={0.9}>
          <h1 className="text-2xl md:text-4xl font-title mt-8 mx-6 tracking-wider">
            {content.slogan}
          </h1>
        </Reveal>
        <Reveal dly={0.6} duration={1} initS={0.9}>
          <h1 className="text-sm md:text-md mx-auto font-title mt-4 tracking-wider">
            {content.description}
          </h1>
        </Reveal>
      </div>

      <Reveal dly={1} initS={0.9} duration={1.5}>
        <SmoothCarousel slides={popularVideos} />
      </Reveal>
    </section>
  )
}
