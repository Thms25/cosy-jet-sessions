// 'use client'

// import useSpotifyauth from '@/hooks/useSpotifyauth'
import Link from 'next/link'

const AUTH_URL =
  process.env.SPOTIFY_AUTH_URL +
  '?client_id=' +
  process.env.SPOTIFY_CLIENT_ID +
  '&response_type=code&redirect_uri=' +
  process.env.SPOTIFY_REDIRECT_URI +
  '&scope=user-read-private%20user-read-email&state=34fFs29kd09'

export default function SpotifyLogin() {
  //   const data = useSpotifyauth()
  //   console.log('data: ', data)
  return (
    <div>
      <Link
        href={AUTH_URL}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        login to spotify
      </Link>
    </div>
  )
}
