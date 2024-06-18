import ApplyView from '@/sections/contact/apply-view'
import { getArtists } from '@/utils/fetchUtils/ArtistFetchUtils'
import { getNotionContent } from '@/utils/fetchUtils/NotionFetchUtils'

export default async function page() {
  const artists = await getArtists()
  const images = artists.map((artist, index) => {
    return {
      src: artist.image,
      id: index,
    }
  })
  const content = await getNotionContent('contact')
  return <ApplyView artists={artists} images={images} content={content} />
}
