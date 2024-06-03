// Utils
import { getArtists } from '@/utils/fetchUtils/ArtistFetchUtils'
import {
  getNotionContent,
  getNotionDiscover,
} from '@/utils/fetchUtils/NotionFetchUtils'

// components
import Link from 'next/link'
import styles from '@/styles/discover.module.scss'
import Image from 'next/image'
import DynamicBanner from '@/components/Banners/DynamicBanner'

// ----------------------------------------------------------------------------

export const revalidate = 60 * 60 * 24 * 7 // 1 week

export default async function Discover() {
  const artists = await getArtists()
  const content = await getNotionContent('discover')

  return (
    <section className="p-4 sm:p-2  lg:py-24 2xl:px-32">
      <DynamicBanner
        title={content.title}
        subtitle={content.subtitle}
        caption={content.caption}
      />
      <div className="grid p-4 md:p-12 gap-2 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {artists?.map(artist => {
          return (
            <div key={artist.id} className={styles.artistCard}>
              <Link href={`/artist/${artist.id}`}>
                <div className={styles.backgroundDiv}>
                  <h3 className="">{artist.name}</h3>
                  {artist.image && (
                    <Image
                      priority
                      src={artist.image}
                      alt={`${artist.name}_thumbnail`}
                      width={480}
                      height={360}
                      className={styles.backgroundImage}
                    />
                  )}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
