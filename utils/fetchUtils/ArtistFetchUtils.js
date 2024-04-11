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

    return artist
  } catch (error) {
    throw new Error(error)
  }
}

// export async function getArtist(id) {
//   try {
//     const res = await fetch(`${URL}/api/artist/${id}`, {
//       method: 'GET',
//       next: {
//         revalidate: 60 * 60 * 24, // 24 hours
//       },
//     })
//     const data = await res.json()
//     return data
//   } catch (error) {
//     throw new Error(error)
//   }
// }
