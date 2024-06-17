import Container from '@/components/layouts/Container'
import AdminView from '@/sections/admin/admin-view'
import {
  getArtists,
  getShorts,
  getVideos,
} from '@/utils/fetchUtils/ArtistFetchUtils'

export default async function page() {
  const artists = await getArtists()
  const videos = await getVideos()
  const shorts = await getShorts()

  return (
    <Container>
      <AdminView artists={artists} videos={videos} shorts={shorts} />
    </Container>
  )
}
