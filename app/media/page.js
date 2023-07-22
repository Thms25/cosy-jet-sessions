// import YouTube from "react-youtube";
// import Image from "next/image";
import styles from "components/media.module.scss"

export default function Media() {
  return (
    <div className={styles.media}>
      <div className={styles.title}>
        <h1>Hello Cosy Jetter</h1>
        <p>Welcme to the media page</p>
      </div>
      <div className={styles.images}>
        {/* <Image
          src="/images/decor.png"
          alt='cjs-decor'
          width={1850}
          height={1044}
        /> */}
      </div>
      <div className={styles.videos}>
      </div>
    </div>
  )
}
