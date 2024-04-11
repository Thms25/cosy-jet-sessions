// Components
import { HomeBanner } from '@/components/Banners/HomeBanner'
// import CanvasHome from '@/components/CanvasHome'
import SmoothCarousel from '@/components/caroussels/SmoothCarousel'

// Utils
import { popularVideos } from '@/utils/data/videoData'

// ---------------------------------------------------------------------

export default function Homeview() {
  return (
    <section className="">
      <header>
        <HomeBanner />
      </header>

      <div className="p-8 md:p-16">
        <SmoothCarousel slides={popularVideos} />
      </div>
    </section>
  )
}
