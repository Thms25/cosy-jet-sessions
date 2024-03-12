'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import YoutubeVideo from '@/components/videos/YoutubeVideo'

export default function VideoAccordeon({ videos }) {
  const [selected, setSelected] = useState(0)

  return (
    <section className="mx-auto max-w-full flex-col-reverse items-start gap-6 py-4 md:flex-row md:gap-12 md:px-8">
      <Tabs selected={selected} setSelected={setSelected} videos={videos} />
      <div className="flex justify-between">
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
                className="w-full text-left px-4 h-[480px] overflow-y-scroll"
              >
                {video.description.split('\n').map((line, index) => (
                  <p key={index} className="">
                    {line === '' ? <br /> : line}
                  </p>
                ))}
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
          className={`max-w-full text-start text-sm tracking-wider transition-colors ${
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
