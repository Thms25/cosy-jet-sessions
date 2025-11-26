// Utils
import { getArtists } from '@/utils/fetchUtils/ArtistFetchUtils'

// components
import styles from '@/styles/discover.module.scss'
import { Reveal } from '@/components/animations/Reveal'
import { SearchableArtists } from '@/components/discover/SearchableArtists'

// ----------------------------------------------------------------------------

export default async function Discover() {
  const artists = await getArtists()

  return (
    <section className="">
      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <Reveal initY={30} dly={0.2} duration={0.8}>
            <h1 className={styles.bannerTitle}>Discover Artists</h1>
          </Reveal>
          <Reveal initY={20} dly={0.5} duration={0.8}>
            <p className={styles.bannerSubtitle}>
              Explore our collection of talented musicians and their cozy
              sessions
            </p>
          </Reveal>
          <Reveal initY={15} dly={0.8} duration={0.8} initS={0.9}>
            <div className={styles.bannerDecor}></div>
          </Reveal>
        </div>
      </div>

      {/* Search and Artists Grid */}
      <SearchableArtists artists={artists} />
    </section>
  )
}
