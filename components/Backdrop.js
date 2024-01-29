import { motion } from "framer-motion";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full bg-cjsWhite bg-opacity-60 z-30 grid place-items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
