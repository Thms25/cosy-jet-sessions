// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import ArtistView from '@/sections/artist/artist-view'
import { Suspense } from 'react'
import Loading from '@/app/loading'

// --------------------------------------------------------

type ArtistPageProps = {
  params: Promise<{
    artistId: string
  }>
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

export async function generateMetadata({ params }: ArtistPageProps) {
  const { artistId } = await params
  const artistData = (await getArtist(artistId)) as Artist
  if (!artistData) {
    return {
      title: 'CJS - Artist Not Found',
      description: 'Artist not found',
    }
  }
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
  const { artistId } = await params
  const artistData = (await getArtist(artistId)) as Artist

  if (!artistData || !artistData.videos.length) return null

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-4 md:p-12 lg:p-16 2xl:px-48">
        <ArtistView artist={artistData} />
      </div>
    </Suspense>
  )
}
