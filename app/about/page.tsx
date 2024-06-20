import styles from '@/styles/about.module.scss'
// import AboutStory from '@/components/AboutStory'
// import DynamicBanner from '@/components/Banners/DynamicBanner'
// import { Reveal } from '@/components/animations/Reveal'
import { WhoWeAre } from '@/components/who-we-are'
import { getNotionContent } from '@/utils/fetchUtils/NotionFetchUtils'

export default async function About() {
  // const content = await getNotionContent('about')

  return (
    <div className={styles.about}>
      {/* <div className="h-screen grid items-center">
        <DynamicBanner
          title={content.title}
          subtitle={content.subtitle}
          caption={content.caption}
        />
      </div> */}
      <WhoWeAre />
      {/* <div>
        <AboutStory />
      </div> */}
    </div>
  )
}
