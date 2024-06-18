// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import ArtistView from '@/sections/artist/artist-view'

// --------------------------------------------------------

type ArtistPageProps = {
  params: {
    artistId: string
  }
}

interface Artist {
  name: string
  perf_date?: string | Date
  image?: string
  spotify_id?: string
  videos: {
    id: string
    title: string
    image: string
    publishedAt: string
    description?: string
  }[]
}

export const revalidate = 60 * 60 * 24 // 24 hours

export async function generateMetadata({ params }: ArtistPageProps) {
  const artistData = (await getArtist(params.artistId)) as Artist
  const artist: Artist = {
    name: artistData.name || '',
    perf_date: artistData.perf_date || '',
    image: artistData.image || '',
    spotify_id: artistData.spotify_id || '',
    videos: artistData.videos || [],
  }
  return {
    title: `CJS - ${artist.name}`,
    description: `Check out ${artist.name} on CJS`,
  }
}

export default async function Artist({ params }: ArtistPageProps) {
  const artistData = (await getArtist(params.artistId)) as Artist

  const artist: Artist = {
    name: artistData.name || '',
    perf_date: artistData.perf_date || '',
    image: artistData.image || '',
    spotify_id: artistData.spotify_id || '',
    videos: artistData.videos || [],
  }

  return (
    <div className="p-4 md:p-12 lg:p-16 2xl:px-48">
      {artist?.videos.length && <ArtistView artist={artist} />}
    </div>
  )
}
