'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from './animations/Reveal'

export const WhoWeAre = () => {
  return (
    <div className="bg-cjsWhite hide-scrollbar">
      <TextParallaxContent
        imgUrl="/images/decor.png"
        subheading="Cosy Jet Sessions"
        heading="Selected With Care"
      >
        <TextContent
          title="Welcome to Cosy Jet Sessions"
          content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="/images/synth.png"
        subheading="Modern Vintage"
        heading="The best of both worlds"
      >
        <TextContent />
      </TextParallaxContent>
    </div>
  )
}

const IMG_PADDING = 0

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
    // style={{
    //   paddingLeft: IMG_PADDING,
    //   paddingRight: IMG_PADDING,
    // }}
    >
      <div className="relative h-[150vh] hide-scrollbar">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        height: '125vh',
        top: 0,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-cjsWhite bg-opacity-25"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-cjsWhite"
    >
      <Reveal>
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
      </Reveal>
      <p className="text-center text-4xl font-bold md:text-8xl">{heading}</p>
    </motion.div>
  )
}

const TextContent = ({ title, content = '' }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      {content.split('\n').map((line, index) => (
        <p key={index} className="mb-4 text-xl text-cjsBrown">
          {line === '' ? <br /> : line}
        </p>
      ))}
    </div>
  </div>
)
