// Components
import CjsBanner from "@/components/CjsBanner";
import Header from "@/components/Header";
import SmoothCarousel from "@/components/caroussels/SmoothCarousel";

// Utils
import { popularVideos } from "@/utils/data/videoData";

// ---------------------------------------------------------------------

export default async function Home() {
  return (
    <section>
      <header>
        <Header className="hidden md:block" />
        <CjsBanner className="md:hidden" />
      </header>
      <div className="p-16">
        <h3 className="text-4xl">Most popular videos</h3>
        <SmoothCarousel slides={popularVideos} />
      </div>
    </section>
  );
}
