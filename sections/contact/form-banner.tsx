'use client'

import { Button } from '@/components/animations/Button'
import { arrowDown } from '@/utils/data/svgData'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

type FromBannerProps = {
  images: { id: string; src: string }[]
  content: {
    apply_title: string
    apply_subtitle: string
    apply_cta: string
  }
}

export default function FromBanner({ images, content }: FromBannerProps) {
  return (
    <div>
      <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold font-subtitle tracking-wide">
            {content.apply_title}
          </h3>
          <p className="md:text-lg text-cjsPink font-caption  my-2">
            {content.apply_subtitle}
          </p>
          <ScrollLink to="form" smooth={true} duration={500}>
            <Button>
              <button className="border border-cjsBrown text-cjsBrown bg-cjsBrown bg-opacity-0 hover:bg-opacity-10 font-medium py-2 px-4 mt-4 rounded-lg  shadow-sm hover:shadow-md transition duration-300">
                {content.apply_cta}
              </button>
            </Button>
          </ScrollLink>
        </div>
        <ShuffleGrid imgs={images} />
      </section>
      <div className="w-full h-12 flex justify-center items-center">
        <ScrollLink
          to="form"
          smooth={true}
          duration={500}
          className="w-6 h-6 mx-auto animate-bounce cursor-pointer text-cjsBrown"
        >
          {arrowDown}
        </ScrollLink>
      </div>
    </div>
  )
}

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

function generateSquares(squareData) {
  return shuffle(squareData).map(sq => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1, type: 'spring' }}
      className="w-full h-full rounded-md shadow-sm"
      style={{
        backgroundImage: `url(${sq.src})` || '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></motion.div>
  ))
}

function ShuffleGrid({ imgs }) {
  const timeoutRef = useRef(null)
  const [squares, setSquares] = useState(generateSquares(imgs))

  useEffect(() => {
    shuffleSquares()

    return () => clearTimeout(timeoutRef.current)
  }, [])

  const shuffleSquares = () => {
    setSquares(generateSquares(imgs))

    timeoutRef.current = setTimeout(shuffleSquares, 4000)
  }

  return (
    <div className="grid grid-cols-4 grid-rows-3 h-[300px] gap-1">
      {squares.map(sq => sq)}
    </div>
  )
}
