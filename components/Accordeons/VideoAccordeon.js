"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import YoutubeVideo from "@/components/videos/YoutubeVideo";

export default function VideoAccordeon({ videos }) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex justify-around max-w-full flex-col-reverse items-start gap-6 py-12 md:flex-row md:gap-12 md:px-8">
      <Tabs selected={selected} setSelected={setSelected} videos={videos} />
      <AnimatePresence mode="wait">
        {videos.map((video, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <YoutubeVideo
                videoId={video.videoId}
                width={520}
                height={360}
                iframeClassName="artistPageVideo"
              />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {videos.map((video, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <p>{video.description}</p>
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </section>
  );
}

const Tabs = ({ selected, setSelected, videos }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {videos.map((video, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={video.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] transition-colors group-hover:border-scjsBrown md:flex-col md:border-l-8 p-4 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-lg font-bold transition-colors md:text-2xl ${
            selected
              ? "text-cjsBrown"
              : "text-cjsPink group-hover:text-cjsBrown"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-cjsBrown md:w-2"
        />
      )}
    </div>
  );
};
