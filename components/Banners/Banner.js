"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import { arrowDown } from "@/utils/data/svgData";

export default function Banner() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <motion.div
        className="h-screen relative flex items-end justify-center"
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <Image
          className="hidden sm:block object-contain w-full h-full xl:p-24 cursor-pointer"
          priority
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
        <Image
          className="sm:hidden object-contain w-full h-full xl:p-24 cursor-pointer p-24"
          priority
          src="/images/cjsIcon.png"
          alt="cjs-banner"
          width={334}
          height={335}
        />
        <div className="w-8 h-8 animate-bounce m-auto mb-12 absolute">
          {arrowDown}
        </div>
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
}
