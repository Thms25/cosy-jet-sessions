import styles from "../../styles/about.module.scss";
import AboutStory from "@/components/AboutStory";
import DynamicBanner from "@/components/Banners/DynamicBanner";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="h-screen grid items-center">
        <DynamicBanner
          title="Here at Cosy Jet Session, We love discovering artist"
          subtitle="Our mission is to let those talents be discovered as they should"
          caption="Scrool down to get know us"
        />
      </div>
      <div>
        <AboutStory />
      </div>
    </div>
  );
}
