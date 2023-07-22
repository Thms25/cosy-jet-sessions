'use client'

import Image from 'next/image';
import styles from 'components/home.module.scss';
import YoutubeVideo from '../components/YoutubeVideo';

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
          <h1>Here are some of the must-watch</h1>
          <div className={styles.videos}>
              <YoutubeVideo videoId="bUnNzb-Floo"/>
              <YoutubeVideo videoId="1lvytCVdqjE"/>
              <YoutubeVideo videoId="lGZDjhryorY"/>
          </div>
        </section>
      </div>
    </div>
  )
}
