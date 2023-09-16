import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <Link href="https://www.instagram.com/cosyjetsessions/" target="_blank">
          <li>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </li>
        </Link>
        <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank">
          <li>
            <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
          </li>
        </Link>
        <Link href="https://www.tiktok.com/@cosyjetsessions/" target="_blank">
          <li>
            <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
          </li>
        </Link>
        <Link href="/">
          <li>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
