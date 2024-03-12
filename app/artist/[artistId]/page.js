// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'

export default async function Artist({ params }) {
  const artist = await getArtist(params.artistId)
  console.log(artist)

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
