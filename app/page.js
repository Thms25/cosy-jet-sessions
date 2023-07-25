'use client'

import Image from 'next/image';
import stylesOne from '../styles/home.module.scss';
import stylesTwo from '../styles/videos.module.scss';
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
        <section className={stylesOne.section}>
          {/* <h1>Here are some of the must-watch</h1> */}
          <div className={stylesTwo.videos}>
              <YoutubeVideo videoId="bUnNzb-Floo" iframeClassName="homeVid" />
              <YoutubeVideo videoId="1lvytCVdqjE" iframeClassName="homeVid" />
              <YoutubeVideo videoId="lGZDjhryorY" iframeClassName="homeVid" />
          </div>
        </section>
      </div>
    </div>
  )
}
