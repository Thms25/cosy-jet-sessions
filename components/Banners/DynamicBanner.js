'use client'

// Hooks
import { useState } from 'react'

// Utils
import { arrowDown } from '@/utils/data/svgData'

// Components
import Image from 'next/image'
// import Modal from '@/components/Modal'

// Motion
import { motion, AnimatePresence } from 'framer-motion'
import MediaModal from '@/components/media-modal'
import { Reveal } from '../animations/Reveal'

export default function DynamicBanner({ title, subtitle, caption }) {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <>
      <section>
        <div className="m-auto p-4 md:p-12 md:flex items-start justify-center">
          <motion.div
            onClick={() => (modalOpen ? close() : open())}
            className="w-1/2 h-full m-auto cursor-pointer"
          >
            <Reveal initS={0.9} initX={-10}>
              <Image
                priority
                className="object-cover"
                src="/images/cjs-banner.png"
                alt="cjs-banner"
                width={1710}
                height={751}
              />
            </Reveal>
          </motion.div>
          <div className="w-1/2 m-auto lg:text-right ">
            <Reveal dly={0.1}>
              <h2 className="lg:text-xl text-cjsBrown font-subtitle">
                {title}
              </h2>
            </Reveal>
            <Reveal dly={0.8} initX={0} initY={50}>
              <h4 className="text-lg text-cjsPink font-subtitle my-2">
                {subtitle}
              </h4>
            </Reveal>
          </div>
        </div>
        <Reveal dly={1.5} initX={0} initY={30}>
          <p className="text-md text-cjsBrown font-caption mb-6">{caption}</p>
        </Reveal>
        <div className="w-8 h-8 animate-bounce m-auto">{arrowDown}</div>
      </section>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <MediaModal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  )
}
