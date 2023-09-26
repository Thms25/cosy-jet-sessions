import styles from "styles/modal.module.scss";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const DropIn = {
  init: {
    y: "-100vh",
    opacity: 0,
  },
  anim: {
    y: "0",
    opacity: 1,
  },
  trs: {
    duration: 0.3,
    type: "spring",
    damping: 25,
    stiffness: 80,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        variants={DropIn}
        initial="init"
        animate="anim"
        transition="trs"
        exit="exit"
      >
        <div className={styles.crossDiv}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClose}
            className={styles.cross}
          />
        </div>
        <div className={styles.modalContent}>
          <h1>Follow us on our social medias</h1>
          <ul onClick={handleClose}>
            <Link
              href="https://www.youtube.com/@cosyjetsessions"
              target="_blank"
            >
              <li>Youtube</li>
            </Link>
            <Link
              href="https://www.instagram.com/cosyjetsessions/"
              target="_blank"
            >
              <li>Instagram</li>
            </Link>
            <Link
              href="https://www.tiktok.com/@cosyjetsessions/"
              target="_blank"
            >
              <li>TikTok</li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
