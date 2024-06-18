import { Reveal } from '@/components/animations/Reveal'
import AdminTable from './admin-table'
import { format } from 'date-fns'
import { Button } from '@/components/animations/Button'

type Artist = {
  name: string
  perf_date: string | Date
  spotify_id: string
  image: string
  videos: any[]
}

type AdminViewProps = {
  artists: Artist[]
  videos?: any[]
  shorts?: any[]
}

export default function AdminView({ artists, videos, shorts }: AdminViewProps) {
  const artist_header = ['Name', 'Date', 'Spotify ID']
  const artist_rows = artists.map(artist => [
    artist.name,
    format(new Date(artist.perf_date), 'do MMM yy'),
    artist.spotify_id,
  ])

  // const videos_header = ['Title', 'Date', 'Artist']
  // const videos_rows = videos.map(video => [
  //   video.title,
  //   format(new Date(video.publishedAt), 'do MMM yy'),
  //   video.artistRef.name || 'No artist',
  // ])

  // const shorts_header = ['Title', 'Date', 'Artist']
  // const shorts_rows = shorts.map(video => [
  //   video.title,
  //   format(new Date(video.publishedAt), 'do MMM yy'),
  //   video.artistRef.name || 'No artist',
  // ])

  return (
    <section className="py-12">
      <div className="mt-4 mb-12">
        <h1 className="text-6xl mb-2">Manage your data</h1>
        <h3 className="text-2xl mb-4">
          On this page you can edit any content from firebase
        </h3>
        <Button>
          <button className="px-4 py-2 border border-cjsBrown shadow-md">
            Get more youtube data
          </button>
        </Button>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          <Reveal duration={1} dly={0.4}>
            <AdminTable header={artist_header} rows={artist_rows} />
          </Reveal>
          {/* <Reveal duration={1} dly={0.6}>
            <AdminTable header={videos_header} rows={videos_rows} />
          </Reveal>
          <Reveal duration={1} dly={0.8}>
            <AdminTable header={shorts_header} rows={shorts_rows} />
          </Reveal> */}
        </div>
      </div>
    </section>
  )
}
