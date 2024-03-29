"use client";

// Hooks
import { useState } from "react";

// Utils
import { arrowDown } from "@/utils/data/svgData";

// Components
import Image from "next/image";
import Modal from "@/components/Modal";

// Motion
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicBanner({ title, subtitle, caption }) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <section>
        <div className="m-auto p-4 md:p-12 md:flex items-start justify-around lg:text-right">
          <motion.div
            onClick={() => (modalOpen ? close() : open())}
            className="w-1/2 h-full m-auto cursor-pointer"
          >
            <Image
              priority
              className="object-cover"
              src="/images/cjs-banner.png"
              alt="cjs-banner"
              width={1710}
              height={751}
            />
          </motion.div>
          <div className="w-1/2 m-auto">
            <h2 className="lg:text-lg text-cjsBrown font-title">{title}</h2>
            <h4 className="text-md text-cjsPink font-title my-4">{subtitle}</h4>
          </div>
        </div>
        <p className="text-sm text-cjsBrown font-main mb-6">{caption}</p>
        <div className="w-8 h-8 animate-bounce m-auto">{arrowDown}</div>
      </section>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
}
