import styles from "styles/modal.module.scss";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";

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
        <h1>Follow us on our social medias</h1>
        <ul>
          <li>Youtube</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
