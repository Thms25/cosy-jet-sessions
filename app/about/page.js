import styles from '../../styles/about.module.scss'
import AboutStory from '@/components/AboutStory'
import DynamicBanner from '@/components/Banners/DynamicBanner'
import { WhoWeAre } from '@/components/who-we-are'

export default function About() {
  return (
    <div className={styles.about}>
      <div className="h-screen grid items-center">
        <DynamicBanner
          title="At Cosy Jet Session, We love discovering artist"
          subtitle="We host the most uniwue and authentic sounding live performances"
          // caption="Scrool down to get know us"
        />
      </div>
      <WhoWeAre />
      {/* <div>
        <AboutStory />
      </div> */}
    </div>
  )
}
