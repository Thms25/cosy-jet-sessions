import React from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    // desktop
    <nav className={styles.nav}>
      <Image
        id={styles.cjsIcon}
        src="/images/cjsIcon.png"
        alt="cjs icon"
        width={33}
        height={34}
      />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/media">Media</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </nav>
  );
};

export default Navbar;
