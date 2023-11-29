"use client";

// Hooks
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Utils

// Components
import YoutubeVideo from "./videos/YoutubeVideo";
import { arrowDown } from "@/utils/data/svgData";

// ----------------------------------------------------------------

export default function Header() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <section ref={targetRef} className="bg-cjsWhite h-[350vh]">
      <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
        <Background scrollYProgress={scrollYProgress} />
        <Images scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
//   const background = useTransform(scrollYProgress, (i) =>
//     i === 1 ? "rgb(13,10,9)" : "transparent"
//   );

//   return (
//     <motion.nav
//       style={{ background }}
//       className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
//     >
//       <div className="flex items-center gap-2 text-lg text-white">
//         <AiFillFileImage className="text-xl" />
//         <span className="font-bold">PIXII</span>
//       </div>
//       <button className="text-sm bg-white text-black hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 px-3 py-1.5">
//         <AiFillApple className="text-lg" />
//         <span>Download</span>
//       </button>
//     </motion.nav>
//   );

const Background = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
        backgroundImage: "url('/images/cjs-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="absolute px-8 w-full h-screen flex flex-col items-center justify-end pb-24"
    >
      {arrowDown}
    </motion.div>
  );
};

const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage: "url('/images/decor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url('/images/synth.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage: "url('/images/lights.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url('/images/cjs-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage: "url('/images/decor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          // backgroundImage:
          //   "url(https://plus.unsplash.com/premium_photo-1668790459004-780996a6404c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      >
        <YoutubeVideo
          videoId="XzcQ57UC_to"
          width={480}
          height={264}
          iframeClassName=""
        />
      </motion.div>
    </>
  );
};
