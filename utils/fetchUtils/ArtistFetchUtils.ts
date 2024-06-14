// import { getSpotifyArtist, getSpotifyToken } from './spotify-api-utils'
import { db } from '@/utils/firebase/firebase-config'
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore'

export const revalidate = 60 * 60 * 24 * 7 // 1 week

export async function getArtists() {
  try {
    const artist_collection = collection(db, 'artists')
    const artist_data = await getDocs(artist_collection)

    const artists = []
    artist_data.forEach(doc => {
      artists.push({ ...doc.data(), id: doc.id })
    })

    return artists.sort((a, b) => new Date(b.perf_date) - new Date(a.perf_date))
  } catch (error) {
    throw new Error(error)
  }
}

export async function getArtist(id) {
  try {
    // Get the artist
    const artistRef = doc(db, 'artists', id)
    const artistDoc = await getDoc(artistRef)
    const artistData = artistDoc.data()

    // Get the videos
    const videosCollection = collection(db, 'videos')
    const videosQuery = query(
      videosCollection,
      where('artistRef', '==', artistRef),
    )
    const videosSnapshot = await getDocs(videosQuery)
    const videosData = videosSnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: data.id,
        title: data.title,
        image: data.thumbnail,
        publishedAt: data.publishedAt,
        description: data.description,
      }
    })

    return { ...artistData, videos: videosData }
  } catch (error) {
    throw new Error(error)
  }
}
