"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import YoutubeVideo from "../videos/YoutubeVideo";

export default function VideoAccordeon ({ videos }) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8">
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
               <div className="w-full">
    <YoutubeVideo
      videoId={}
      width={480}
      height={360}
    />
  </div>
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
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
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-violet-500"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-violet-500 md:w-2"
        />
      )}
    </div>
  );
};

const FEATURES = [
  {
    title: "Original",
    Feature: () => <ExampleFeature text="Collaborate" />,
  },
  {
    title: "Cover",
    Feature: () => <ExampleFeature text="Encrypt" />,
  },
];

const Video = ({ text }) => (
  <div className="w-full">
    <YoutubeVideo
      videoId={}
      width={480}
      height={360}
    />
  </div>
);
