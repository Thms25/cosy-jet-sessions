// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'

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
    <div className="p-24">
      {artist?.videos && (
        <div>
          <div>
            <h1 className="text-xl font-title m-8 tracking-wider">
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
