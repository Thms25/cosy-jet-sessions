import { motion } from "framer-motion";

export default function Backdrop({ children, onClick }) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full bg-cjsBrown bg-opacity-30 z-30 grid place-items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
