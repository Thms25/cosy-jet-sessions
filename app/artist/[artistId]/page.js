// Utils
import { getArtist } from '@/utils/fetchUtils/ArtistFetchUtils'

// Components
import VideoAccordeon from '@/components/Accordeons/VideoAccordeon'
import { Reveal } from '@/components/animations/Reveal'

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
          <Reveal initY={50} initX={0}>
            <h1 className="text-4xl font-subtitle mt-8 mx-6 tracking-wider">
              {artist.name}
            </h1>
          </Reveal>

          <VideoAccordeon videos={artist.videos} />
        </div>
      )}
    </div>
  )
}
