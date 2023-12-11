"use client";

// Components
import CjsBanner from "@/components/Banners/Banner";
import SmoothCarousel from "@/components/caroussels/SmoothCarousel";

// Utils
import { popularVideos } from "@/utils/data/videoData";

// Animate
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// ---------------------------------------------------------------------

export default function Homeview() {
  return (
    <section className="h-screen">
      <Parallax pages={2}>
        <ParallaxLayer offset={0}>
          <header>
            <CjsBanner />
          </header>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div className="p-4 md:p-16">
            <SmoothCarousel slides={popularVideos} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
