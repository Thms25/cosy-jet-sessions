import AdminTable from './admin-table'

type Artist = {
  name: string
  perf_date: string | Date
  spotify_id: string
  image: string
  videos: any[]
}

type AdminViewProps = {
  artists: Artist[]
  videos: any[]
  shorts: any[]
}

export default function AdminView({ artists, videos, shorts }: AdminViewProps) {
  console.log(artists)
  const artist_header = ['Name', 'Date', 'Spotify ID']
  const artist_rows = artists.map(artist => [
    artist.name,
    artist.perf_date,
    artist.spotify_id,
  ])
  return (
    <section>
      {/* <h1 className="text-8xl">This is the admin view</h1> */}
      <div className="">
        <div className="">
          <AdminTable header={artist_header} rows={artist_rows} />
          {/* {artists.map(artist => (
            <div key={artist.id} className="artist-row">
              <div>{artist.name}</div>
              <div>{artist.bio}</div>
              <div>{artist.image}</div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
