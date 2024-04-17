import { PrismaClient } from '@prisma/client'
import { getSpotifyArtist, getSpotifyToken } from './spotify-api-utils'

const prisma = new PrismaClient()
export const revalidate = 60 * 60 * 24 * 7 // 1 week

export async function getArtists() {
  try {
    const artists = await prisma.Artist.findMany({
      include: {
        videos: true,
        shorttVideos: true,
      },
    })

    return artists
  } catch (error) {
    throw new Error(error)
  }
}

export async function getArtist(id) {
  try {
    const artist = await prisma.artist.findFirst({
      where: {
        id: id,
      },
      include: {
        videos: true,
        // shorttVideos: true,
      },
    })

    const { access_token } = await getSpotifyToken()
    const artist_data = await getSpotifyArtist(access_token, artist.name)

    // const spotifyRes = await fetch(
    //   `${process.env.SPOTIFY_API_URL}/search/${artist.name}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    //     },
    //   },
    // )

    return artist
  } catch (error) {
    throw new Error(error)
  }
}
