'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { arrowDown } from '@/utils/data/svgData'
import { cjsTextSvg } from '@/public/assets/svg/cjs_text_svg'
import MediaModal from '@/components/media-modal'

export function HomeBanner() {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <motion.div
        className="h-screen pt-32"
        onClick={() => {
          modalOpen ? close() : open()
        }}
      >
        <div className="w-1/2 mx-auto my-8 p-4 md:p-24 xl:p-32">
          {cjsTextSvg}
        </div>
        <div className="w-8 h-8 animate-bounce mx-auto mt-24">{arrowDown}</div>
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <MediaModal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}
