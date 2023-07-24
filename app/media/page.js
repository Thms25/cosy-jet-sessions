'use client'

// import Image from "next/image";
import styles from "./styles/media.module.scss";
import YoutubeVideo from '../../components/YoutubeVideo';

export default function Media() {
  return (
    <div className={styles.media}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Welcme to the media page</p>
      </div>
      <div className={styles.videos}>
        <div className={styles.videos}>
          <YoutubeVideo videoId="bUnNzb-Floo"/>
          <YoutubeVideo videoId="1lvytCVdqjE"/>
          <YoutubeVideo videoId="lGZDjhryorY"/>
        </div>
      </div>
      <div className={styles.images}>
        {/* <Image
          src="/images/decor.png"
          alt='cjs-decor'
          width={1850}
          height={1044}
        /> */}
      </div>
    </div>
  )
}
