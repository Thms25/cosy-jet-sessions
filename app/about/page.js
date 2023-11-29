import styles from "../../styles/about.module.scss";
import AboutStory from "@/components/AboutStory";
import { arrowDown } from "@/utils/data/svgData";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHeader}>
        <Image
          id={styles.cjsBanner}
          className="object-contain w-full h-2/3"
          priority
          src="/images/cjs-banner.png"
          alt="cjs-banner"
          width={1710}
          height={751}
        />
        <div className="m-auto w-8 h-8 animate-bounce">{arrowDown}</div>
      </div>
      <div>
        <AboutStory />
      </div>
    </div>
  );
}
