'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export function Reveal({
  children,
  width = 'w-full',
  initX = 0,
  initY = 0,
  dly = 0.3,
  duration = 0.5,
  initS = 0.95,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <div className={`${width} overflow-hidden`} ref={ref}>
      <motion.div
        className=""
        variants={{
          hidden: { opacity: 0, y: initY, x: initX, scale: initS },
          visible: { opacity: 1, y: 0, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: duration, delay: dly }}
      >
        {children}
      </motion.div>
    </div>
  )
}
