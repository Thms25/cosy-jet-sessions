// Components
import { HomeBanner } from '@/components/Banners/HomeBanner'
import { Reveal } from '@/components/animations/Reveal'
// import CanvasHome from '@/components/CanvasHome'
import SmoothCarousel from '@/components/caroussels/SmoothCarousel'

// Utils
import { popularVideos } from '@/utils/data/videoData'

// ---------------------------------------------------------------------

export default function Homeview({ content }) {
  // console.log('content: ', content)
  return (
    <section className="hide-scrollbar">
      <header className="h-screen">
        <HomeBanner />
      </header>

      <div className="p-8 md:p-16">
        <Reveal dly={1} duration={1} initS={0.8}>
          <h1 className="text-4xl font-title mt-8 mx-6 tracking-wider">
            {content.title_one}
          </h1>
        </Reveal>
      </div>

      <div className="p-8 md:p-16">
        {/* <SmoothCarousel slides={popularVideos} /> */}
      </div>
    </section>
  )
}
