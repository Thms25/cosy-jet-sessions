// Sections
import DiscoverView from '@/sections/discover/discover-view'

// Utils
import { getArtists } from '@/utils/fetchUtils/ArtistFetchUtils'
import { getNotionDiscover } from '@/utils/fetchUtils/NotionFetchUtils'

// ----------------------------------------------------------------------------

export const revalidate = 60 * 60 * 24 * 7 // 1 week

export default async function Discover() {
  const artists = await getArtists()
  const notionData = await getNotionDiscover()

  return <DiscoverView artists={artists} notionData={notionData} />
}
