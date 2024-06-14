// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'
import { Reveal } from '@/components/animations/Reveal'
// import SpotifyLogin from '@/components/spotify/spotify-login'
import SpotifyPlayer from '@/components/spotify/spotify-player'

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

export const revalidate = 7 * 24 * 60 * 60 // 1 week

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
      {artist?.videos.length && (
        <div>
          <Reveal initY={50} initX={0}>
            <h1 className="text-8xl font-subtitle my-10 tracking-wider">
              {artist.name}
            </h1>
          </Reveal>
          <div className="lg:flex justify-between mx-auto lg:mx-12 sm:px-2 md:px-4 lg:px-8">
            <div className="w-full lg:w-2/3 2xl:w-1/2 mx-auto">
              <VideoAccordeon videos={artist.videos} />
            </div>

            <div className="mt-4  w-full lg:w-1/3 2xl:w-1/2 mx-auto px-4">
              <h4 className="text-xl font-subtitle mb-4">
                Listen to {artist.name} on Spotify
              </h4>
              <SpotifyPlayer artist={artist} />
              {/* <SpotifyLogin /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
