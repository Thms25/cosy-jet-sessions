// "use client";

// Components
import CjsBanner from "@/components/Banners/Banner";
import CanvasHome from "@/components/CanvasHome";
import SmoothCarousel from "@/components/caroussels/SmoothCarousel";

// Utils
import { popularVideos } from "@/utils/data/videoData";

// Animate
// import { motion } from "framer-motion";

// ---------------------------------------------------------------------

export default function Homeview() {
  return (
    <section className="">
      <div>
        <CanvasHome />
      </div>
      <header>
        <CjsBanner />
      </header>

      <div className="p-8 md:p-16">
        <SmoothCarousel slides={popularVideos} />
      </div>
    </section>
  );
}
