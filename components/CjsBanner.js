"use client";

import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/home.module.scss";

const CjsBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <motion.div
        className={styles.banner}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <Image
          id={styles.cjsBanner}
          priority
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
      </motion.div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default CjsBanner;
