import Image from 'next/image';
import styles from 'components/home.module.scss';

export default function Home() {
  return (
    <div>
      <header>
        <div className='banner'>
          <Image
            id='cjs-banner'
            priority
            src="/images/cjs-banner.png"
            alt='cjs-banner'
            width={1710}
            height={751}
          />
        </div>
      </header>
      <div>
        <section className={styles.section}>
          <h1>Browse through all our content</h1>
          <div className={styles.concept}>
            <div className={styles.card}>
              Events
              {/* <video src="https://www.youtube.com/watch?v=jZrB_2hL0bk" controls autoplay></video> */}
            </div>
            <div className={styles.card}>
              interviews
              {/* <Image
                src="/images/lights.png"
                alt='cjs-banner'
                width={732}
                height={1206}
              /> */}
            </div>
            <div className={styles.card}>
              podcasts
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
