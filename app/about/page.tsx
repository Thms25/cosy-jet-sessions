import styles from '../../styles/about.module.scss'
// import AboutStory from '@/components/AboutStory'
import DynamicBanner from '@/components/Banners/DynamicBanner'
// import { Reveal } from '@/components/animations/Reveal'
import { WhoWeAre } from '@/components/who-we-are'

export default function About() {
  return (
    <div className={styles.about}>
      <div className="h-screen grid items-center">
        <DynamicBanner
          title="We love discovering artists"
          subtitle="Our mission is to let those talents be discovered as they should"
        />
      </div>
      <WhoWeAre />
      {/* <div>
        <AboutStory />
      </div> */}
    </div>
  )
}
