'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import YoutubeVideo from '@/components/videos/YoutubeVideo'
import { Reveal } from '../animations/Reveal'

export default function VideoAccordeon({ videos }) {
  const [selected, setSelected] = useState(0)

  return (
    <section className="mx-auto">
      <Tabs selected={selected} setSelected={setSelected} videos={videos} />
      <div className="">
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
                  videoId={video.id}
                  width={720}
                  height={480}
                  iframeClassName="artistPageVideo"
                />
              </motion.div>
            ) : undefined
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
                className=" text-left p-2 w-[720px] h-[360px] overflow-y-scroll hide-scrollbar"
              >
                <Reveal dly={0.1} initX={0} initY={0} duration={1}>
                  {video.description.split('\n').map((line, index) => (
                    <p key={index} className="text-sm font-caption">
                      {line === '' ? <br /> : line}
                    </p>
                  ))}
                </Reveal>
              </motion.div>
            ) : undefined
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

const Tabs = ({ selected, setSelected, videos }) => {
  return (
    <div className="w-full flex  md:w-fit pb-2">
      {videos.map((video, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={video.title}
            tabNum={index}
          />
        )
      })}
    </div>
  )
}

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit m-2">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full transition-colors md:flex-col mb-1"
      >
        <span
          className={`max-w-full text-start text-lg font-caption tracking-wider transition-colors ${
            selected
              ? 'text-cjsBrown'
              : 'text-cjsPink group-hover:text-cjsBrown'
          }`}
        >
          {title.match(/over by (.*?)\)/) || title.includes('(')
            ? 'Cover'
            : 'Original'}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="horizontal-slide-feature-slider"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-cjsBrown"
        />
      )}
    </div>
  )
}
