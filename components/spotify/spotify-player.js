export default function SpotifyPlayer({ artist }) {
  return (
    <div className="">
      <iframe
        src={`https://open.spotify.com/embed/artist/${artist.spotify_id}`}
        width="500"
        height="500"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}
