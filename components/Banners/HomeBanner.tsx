'use client'

// Hooks
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

// Components
import Image from 'next/image'
import MediaModal from '../../components/media-modal'

// Asstes
import { arrowDown } from '../../utils/data/svgData'
import { cjsTextSvg } from '../../public/assets/svg/cjs_text_svg'

export function HomeBanner() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
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
        <ScrollLink
          to="slogan"
          smooth={true}
          duration={500}
          className=" text-cjsBrown z-50 cursor-pointer"
        >
          <div className="w-8 h-8 animate-bounce mx-auto mt-24">
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
