"use client";

// Styles
import styles from "../styles/navbar.module.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// COmponents
import Link from "next/link";
import Image from "next/image";

// --------------------------------------------------------------

export default function Navbar() {
  return (
    <nav className={`${styles.nav} fixed z-50`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href="/">
          <Image
            id={styles.cjsIcon}
            src="/images/cjsIcon.png"
            alt="cjs icon"
            width={33}
            height={34}
          />
        </Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/discover">Discover</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </motion.ul>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </nav>
  );
}
