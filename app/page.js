// Components
import Header from "@/components/Header";
import SmoothCarousel from "@/components/caroussels/SmoothCarousel";

// Utils
import { popularVideos, videoImgs } from "@/utils/data/videoData";

// ---------------------------------------------------------------------

export default async function Home() {
  return (
    <section>
      <Header />
      <SmoothCarousel slides={videoImgs} />
    </section>
  );
}
