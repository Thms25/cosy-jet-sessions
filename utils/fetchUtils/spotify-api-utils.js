import { unstable_cache as cache } from 'next/cache'

const TOKEN_URL = process.env.SPOTIFY_TOKEN_URL
const ID = process.env.SPOTIFY_CLIENT_ID
const SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT = process.env.SPOTIFY_REDIRECT_URI
const API = process.env.SPOTIFY_API_URL

export const getSpotifyToken = cache(
  async () => {
    const res = await fetch(TOKEN_URL, {
      method: 'POST',
      body: 'grant_type=client_credentials',

      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${ID}:${SECRET}`),
      },
      next: {
        revalidate: 60 * 60, // 1 hour,
      },
    })
    const token = await res.json()
    return token
  },
  ['token'],
  {
    tags: ['token'],
    revalidate: 60 * 60, // 1 hour,
  },
)

export async function getSpotifyArtist(name) {
  const token = await getSpotifyToken()

  let query = name.replace(' ', '%20')
  try {
    const res = await fetch(
      `${API}/search?q=${query}&type=artist&market=BE&limit=20&offset=0`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      },
    )

    const data = await res.json()
    const artists = data.artists.items
    return artists[0]
  } catch (error) {
    console.log('error: ', error)
  }
}
