'use client'

// Hooks
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

// Components
import MediaModal from '@/components/media-modal'
// import Image from 'next/image'

// Asstes
import { arrowDown } from '@/utils/data/svgData'
import { cjsTextSvg } from '@/public/assets/svg/cjs_text_svg'

export function HomeBanner() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <motion.div
        className="mt-72 sm:mt-48 md:mt-32"
        onClick={() => {
          modalOpen ? close() : open()
        }}
      >
        <div className="w-1/2 mx-auto my-8 p-4 md:p-24 xl:p-32">
          {cjsTextSvg}
        </div>
        <ScrollLink
          to="slogan"
          smooth={true}
          duration={500}
          className=" text-cjsBrown z-50 cursor-pointer"
        >
          <div className="w-6 h-6 animate-bounce mx-auto mt-48 md:mt-24 opacity-50">
            {arrowDown}
          </div>
        </ScrollLink>
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <MediaModal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}
