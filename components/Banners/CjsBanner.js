"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import styles from "/styles/home.module.scss";
import { arrowDown } from "@/utils/data/svgData";

const CjsBanner = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <motion.div
        className={`${styles.banner} ${className} h-screen`}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <Image
          id={styles.cjsBanner}
          className="object-contain w-full h-2/3"
          priority
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
      </motion.div>
      {/* <div className="w-8 h-8 animate-bounce m-auto">{arrowDown}</div> */}
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default CjsBanner;
