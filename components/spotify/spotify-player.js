'use client'

import { useWindowSize } from '@/hooks/useWindowSize'

export default function SpotifyPlayer({ artist }) {
  const { width } = useWindowSize()

  const isSmall = width < 768

  return (
    <div className="flex justify-center">
      <iframe
        src={`https://open.spotify.com/embed/artist/${artist.spotify_id}`}
        width={isSmall ? '480' : '360'}
        height="480"
        allowtransparency="true"
        allow="encrypted-media"
        className="shadow-md rounded-xl"
      ></iframe>
    </div>
  )
}
