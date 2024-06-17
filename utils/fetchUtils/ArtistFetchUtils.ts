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

    const videos = await getVideos()

    const artists = []
    artist_data.forEach(doc => {
      const artist = { ...doc.data(), id: doc.id }

      const artist_videos = videos.filter(
        video => video.artistRef.path === doc.ref.path,
      )

      artists.push({ ...artist, videos: artist_videos })
    })
    return artists.sort(
      (a, b) =>
        new Date(b.perf_date).getTime() - new Date(a.perf_date).getTime(),
    )
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

export async function getVideos() {
  try {
    const videos_collection = collection(db, 'videos')
    const videos_data = await getDocs(videos_collection)

    const videos = []
    videos_data.forEach(doc => {
      videos.push(doc.data())
    })
    return videos
  } catch (error) {
    throw new Error(error)
  }
}

export async function getShorts() {
  try {
    const shorts_collection = collection(db, 'shorts')
    const shorts_data = await getDocs(shorts_collection)

    const shorts = []
    shorts_data.forEach(doc => {
      shorts.push(doc.data())
    })
    return shorts
  } catch (error) {
    throw new Error(error)
  }
}
