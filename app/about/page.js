import Image from "next/image";
import styles from "../../styles/about.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Welcome to Cosy Jet Sessions</h1>
      <div>
        <div className={styles.section}>
          <div>
            <p>
              Cosy Jet Sessions is a unique music platform showcasing raw talent
              in a vintage and warm setting
            </p>
          </div>
          <Image
            id={styles.cjsDecor}
            // priority
            src="/images/decor.png"
            alt="cjs studio decor"
            width={1850}
            height={1044}
          />
        </div>
        <div className={styles.section}>
          <Image
            id={styles.cjsLights}
            // priority
            src="/images/lights.png"
            alt="cjs studio lights"
            width={732}
            height={1206}
          />
        </div>
      </div>
    </div>
  );
}
