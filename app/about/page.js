import styles from "../../styles/about.module.scss";
import AboutStory from "@/components/AboutStory";
import CjsBanner from "@/components/CjsBanner";

export default function About() {
  // const { ref: myRef, inView: elVisible, entry } = useInView();

  return (
    <div className={styles.about}>
      <header>
        <CjsBanner />
      </header>
      <h2>Welcome to Cosy Jet Sessions</h2>
      <h3>Scroll Down to learn about us</h3>
      <div>
        <AboutStory />
      </div>
    </div>
  );
}
