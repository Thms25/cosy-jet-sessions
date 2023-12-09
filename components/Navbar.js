"use client";

// Styles
import { motion } from "framer-motion";

// COmponents
import Link from "next/link";
import Image from "next/image";

// --------------------------------------------------------------

export default function Navbar() {
  return (
    <nav className="bg-cjsWhite bg-opacity-80 w-full fixed top-0 z-50 flex justify-between items-center text-cjsBorwn px-8 py-3">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-1/5"
      >
        <Link href="/" className="flex">
          <Image
            src="/images/cjsLogo.png"
            alt="cjs icon"
            width={50}
            height={50}
            className="md:hidden"
          />
          <Image
            src="/images/cjsText.png"
            alt="cjs text title"
            className="object-contain hidden md:block"
            width={190}
            height={40}
          />
        </Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-evenly"
      >
        {navItems.map((item) => (
          <li className="px-3 lg:px-4" key={item.title}>
            <Link
              href={item.link}
              className="text-cjsPink text-lg lg:text-xl tracking-wide hover:text-cjsBrown transition duration-250"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </motion.ul>
      <div className="w-1/5 lg:flex justify-end hidden">
        <Image
          src="/images/cjsLogo.png"
          alt="cjs icon"
          width={50}
          height={50}
          className="hidden md:block"
        />
      </div>
    </nav>
  );
}

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Discover",
    link: "/discover",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
