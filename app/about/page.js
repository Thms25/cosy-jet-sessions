import styles from "../../styles/about.module.scss";
import AboutStory from "@/components/AboutStory";
import CjsBanner from "@/components/CjsBanner";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeader}>
        <header>
          <CjsBanner />
        </header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.arrowDown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div>
        <AboutStory />
      </div>
    </div>
  );
}
