'use client'

// Hooks
import { useState } from 'react'

// Utils
import { arrowDown } from '@/utils/data/svgData'

// Components

// Motion
import { motion, AnimatePresence } from 'framer-motion'
import MediaModal from '@/components/media-modal'
import { Reveal } from '../animations/Reveal'
import YoutubeVideo from '../videos/YoutubeVideo'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function DiscoverBanner({
  title,
  subtitle,
  caption,
  videoID,
  artists,
}) {
  const { width } = useWindowSize()
  const isSmall = width < 640
  const isMedium = width < 880

  return (
    <>
      <section>
        <div className="m-auto p-4 md:p-12 md:flex items-start justify-center">
          <motion.div className="w-1/2 h-full m-auto cursor-pointer">
            <Reveal initS={0.8} initX={-10}>
              <YoutubeVideo
                videoId={videoID}
                iframeClassName="homeVidFrame"
                width={isSmall ? 400 : 480}
                height={isSmall ? 240 : 290}
              />
            </Reveal>
          </motion.div>
          <div className="w-1/2 m-auto lg:text-right ">
            <Reveal dly={0.1}>
              <h2 className="lg:text-xl text-cjsBrown font-subtitle">
                {title}
              </h2>
            </Reveal>
            <Reveal dly={0.4} initX={0} initY={50}>
              <h4 className="text-lg text-cjsPink font-subtitle my-2">
                {subtitle}
              </h4>
            </Reveal>
          </div>
        </div>
        <Reveal dly={0.6} initX={0} initY={30}>
          <p className="text-md text-cjsBrown font-caption mb-6">{caption}</p>
        </Reveal>
      </section>
    </>
  )
}
