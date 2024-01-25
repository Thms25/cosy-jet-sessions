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

export default function Modal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="fixed z-50 grid place-items-center p-12 bg-cjsWhite border border-cjsBrown text-cjsBrown min-w-32 max-w-96 rounded-lg shadow-md"
        onClick={(e) => e.stopPropagation()}
        variants={DropIn}
        initial="init"
        animate="anim"
        transition="trs"
        exit="exit"
      >
        <div className="w-full">
          <h1 className="text-md tracking-wider">FOLLOW US HERE</h1>
          <div className="w-6 h-6 mx-auto my-8 animate-bounce">{arrowDown}</div>
          <ul onClick={handleClose} className="px-2 flex justify-evenly">
            {mediaLinks.map((media) => (
              <Link
                key={media.name}
                href={media.link}
                target="_blank"
                className="text-cjsBrown text-xs border border-cjsBrown rounded-full mx-2 lg:mx-4 px-4 py-2 shadow-sm hover:border-cjsBrown transition duration-300 hover:bg-cjsBrown hover:text-cjsWhite"
              >
                <li>{media.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </Backdrop>
  );
}
