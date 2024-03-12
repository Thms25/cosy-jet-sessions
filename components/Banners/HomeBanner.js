'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Modal from '@/components/Modal'
import Image from 'next/image'
import { useState } from 'react'
import { arrowDown } from '@/utils/data/svgData'

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
        <Image
          //   id={styles.cjsBanner}
          className="object-contain w-full h-2/3"
          priority
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
        <div className="w-8 h-8 animate-bounce m-auto">{arrowDown}</div>
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}
