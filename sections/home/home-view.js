// Components
import { HomeBanner } from '@/components/Banners/HomeBanner'
// import CanvasHome from '@/components/CanvasHome'
import SmoothCarousel from '@/components/caroussels/SmoothCarousel'
import { WhoWeAre } from '@/components/who-we-are'

// Utils
import { popularVideos } from '@/utils/data/videoData'

// ---------------------------------------------------------------------

export default function Homeview() {
  return (
    <section className="hide-scrollbar">
      <header>
        <HomeBanner />
      </header>
      {/* <WhoWeAre /> */}

      <div className="p-8 md:p-16">
        <SmoothCarousel slides={popularVideos} />
      </div>
    </section>
  )
}
