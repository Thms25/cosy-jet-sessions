// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'

export const revalidate = 7 * 24 * 60 * 60 // 1 week

export async function generateMetadata({ params }) {
  const artist = await getArtist(params.artistId)
  return {
    title: `CJS - ${artist.name}`,
    description: artist.bio || 'Artist page',
  }
}

export default async function Artist({ params }) {
  const artist = await getArtist(params.artistId)

  return (
    <div className="p-16">
      {artist?.videos && (
        <div>
          <div>
            <h1 className="text-xl font-title mt-8 mx-6 tracking-wider">
              {artist.name}
            </h1>
          </div>
          <div className="">
            <VideoAccordeon videos={artist.videos} />
          </div>
        </div>
      )}
    </div>
  )
}
