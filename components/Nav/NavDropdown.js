import { FiEdit, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavDropdown({ navItems }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center bg-cjsWhite">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-cjsBrown border border-cjsBrown bg-cjsBrown bg-opacity-0 hover:bg-opacity-20 transition duration-250"
        >
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-4 rounded-lg bg-cjsWhite shadow-xl absolute left-[50%] w-96 overflow-hidden text-cjsBrown"
        >
          {navItems.map((item) => (
            <motion.li
              variants={itemVariants}
              onClick={() => {
                router.push(item.link);
                setOpen(false);
              }}
              className="flex items-center gap-2 w-full p-4 text-md font-medium whitespace-nowrap rounded-md transition cursor-pointer"
            >
              <motion.span variants={actionIconVariants}>
                <FiEdit />
              </motion.span>
              <span>{item.title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};