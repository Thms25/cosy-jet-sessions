import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import Link from "next/link";
import { arrowDown } from "@/utils/data/svgData";

const DropIn = {
  init: {
    scale: 0,
    opacity: 0,
  },
  anim: {
    scale: 1,
    opacity: 1,
  },
  trs: {
    duration: 0.4,
    type: "ease",
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

const mediaLinks = [
  {
    name: "Youtube",
    link: "https://www.youtube.com/@cosyjetsessions",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/cosyjetsessions",
  },
  {
    name: "Tik Tok",
    link: "https://www.tiktok.com/@cosyjetsessions",
  },
];

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="fixed z-50 grid place-items-center p-6 bg-cjsWhite border border-cjsPink text-cjsPink min-w-1/3  h-1/2 lg:max-h-1/3 rounded-lg shadow-md"
        onClick={(e) => e.stopPropagation()}
        variants={DropIn}
        initial="init"
        animate="anim"
        transition="trs"
        exit="exit"
      >
        <div className="w-full">
          <h1 className="text-2xl lg:text-3xl tracking-wider">
            FOLLOW US HERE
          </h1>
          <div className="w-6 h-6 mx-auto my-8 ">{arrowDown}</div>
          <ul onClick={handleClose} className="p-4 flex justify-evenly">
            {mediaLinks.map((media) => (
              <Link
                key={media.name}
                href={media.link}
                target="_blank"
                className="text-cjsPink text-lg lgtext-xl border border-cjsPink rounded-full mx-2 lg:mx-4 px-4 py-2 shadow-sm hover:border-cjsBrown transition duration-300 hover:text-cjsBrown"
              >
                <li>{media.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
