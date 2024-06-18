// import { getSpotifyArtist, getSpotifyToken } from './spotify-api-utils'
import { unstable_cache as cache } from 'next/cache'

import { db } from '@/utils/firebase/firebase-config'

import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from 'firebase/firestore'

export const revalidate = 60 * 60 * 24 // 24 hours

// ----------------------------------------------------------

export const getArtists = cache(
  async () => {
    const artists = await getAllArtists()
    return artists
  },
  ['artists'],
  {
    tags: ['artists'],
    revalidate: 60 * 60 * 24, // 24 hours
  },
)

export async function getAllArtists() {
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

export const getArtist = cache(
  async (id: string) => {
    const artist = await getOneArtist(id)
    return artist
  },
  ['artist'],
  {
    tags: ['artist'],
    revalidate: 60 * 60 * 24 * 7, // 7 days
  },
)

export async function getOneArtist(id: string) {
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

export const getVideos = cache(
  async () => {
    const videos = await getAllVideos()
    return videos
  },
  ['videos'],
  {
    tags: ['videos'],
    revalidate: 60 * 60 * 24, // 24 hours
  },
)

export async function getAllVideos() {
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

export const getShorts = cache(
  async () => {
    const shorts = await getAllShorts()
    return shorts
  },
  ['shorts'],
  {
    tags: ['shorts'],
    revalidate: 60 * 60 * 24, // 24 hours
  },
)

export async function getAllShorts() {
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
