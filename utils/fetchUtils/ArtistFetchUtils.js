import { PrismaClient } from '@prisma/client'

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

    // const token = await getSpotifyToken()
    // console.log(token)

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

async function getSpotifyToken() {
  const token = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    },
    next: {
      revalidate: 60 * 60, // 1 hour,
    },
  })
  return token
}
