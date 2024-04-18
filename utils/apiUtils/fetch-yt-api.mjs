import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { config } from 'dotenv'
config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

console.log('firebaseConfig: ', firebaseConfig)

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore'

import { google } from 'googleapis'
const youtube = google.youtube('v3')

async function deleteExistingData() {
  console.log('starting deleting existing data \n')

  const artistCollection = collection(db, 'artists')
  const artistDocs = await getDocs(artistCollection)
  artistDocs.forEach(doc => {
    console.log('deleting artist: ', doc.data().name)
    deleteDoc(doc.ref)
  })
  console.log('Artists deleted.')

  const videoCollection = collection(db, 'videos')
  const videoDocs = await getDocs(videoCollection)
  videoDocs.forEach(doc => {
    console.log('deleting video: ', doc.data().title)
    deleteDoc(doc.ref)
  })
  console.log('Videos deleted.')

  const shortCollection = collection(db, 'shorts')
  const shortDocs = await getDocs(shortCollection)
  shortDocs.forEach(doc => {
    console.log('deleting short: ', doc.data().title)
    deleteDoc(doc.ref)
  })
  console.log('Shorts deleted.')
}

async function getFullDescription(videoId) {
  const { data } = await youtube.videos.list({
    id: videoId,
    part: 'snippet',
    key: process.env.YT_API_KEY,
  })

  return data.items[0].snippet.description
}

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function getArtistName(title) {
  if (/[Cc]over/.test(title)) {
    const match = title.match(/over by (.*?)\)/)
    return match ? match[1] : 'Unknown Artist'
  } else {
    const splitTitle = title.split(' - ')
    return splitTitle.length > 0 ? splitTitle[0] : 'Unknown Artist'
  }
}

async function findOrCreateArtist(artistName) {
  const artistCollection = collection(db, 'artists')
  const artistDoc = doc(artistCollection, artistName)
  const artistSnapshot = await getDoc(artistDoc)

  if (!artistSnapshot.exists()) {
    const artist = {
      name: artistName,
      // Add any other artist properties you need here
    }
    await setDoc(artistDoc, artist)
    return artist
  } else {
    return artistSnapshot.data()
  }
}

async function addVideo(video) {
  const videoCollection = collection(db, 'videos')
  await setDoc(doc(videoCollection, video.id), video)
}

async function addShort(short) {
  const shortsCollection = collection(db, 'shorts')
  await setDoc(doc(shortsCollection, short.id), short)
}

const SHORTS = []
const ARTISTS = []

async function fetchYtApi(nextPageToken = null) {
  try {
    const options = {
      part: 'snippet',
      channelId: 'UCdlvOT8isQcuCrxzWgroGZQ',
      maxResults: 50,
      order: 'date',
      key: process.env.YT_API_KEY,
    }

    if (nextPageToken) {
      options.pageToken = nextPageToken
    }

    console.log('\n\nFetching videos\n')

    const { data } = await google.youtube('v3').search.list(options)

    const videos = []

    console.log('data: ', data)

    for (const video of data.items) {
      decodeHtml(video.snippet.title).includes('#')
        ? SHORTS.push(video)
        : videos.push(video)
    }

    // data.items.forEach(video => {
    //   decodeHtml(video.snippet.title).includes('#')
    //     ? SHORTS.push(video)
    //     : videos.push(video)
    // })

    console.log('\nStarting full videos\n')

    for (const video of videos) {
      if (video.id.kind === 'youtube#video') {
        let { title, publishedAt } = video.snippet
        title = decodeHtml(title)

        console.log('\nTitle: ', title)

        const videoId = video.id.videoId
        const description = await getFullDescription(videoId)
        const thumbnailUrl = video.snippet.thumbnails.high.url
        const artistName = getArtistName(title)

        const artist = await findOrCreateArtist(artistName)

        ARTISTS.push(artist.name)

        const video = {
          id: videoId,
          title: title,
          description: description,
          thumbnail: thumbnailUrl,
          publishedAt: publishedAt,
          artistRef: doc(db, 'artists', artist.id),
        }

        await addVideo(video)
      }
    }

    if (data.nextPageToken) {
      console.log('\nfetching next page\n')
      await fetchYtApi(data.nextPageToken)
    }
  } catch (error) {
    console.error('Error fetching: ', error.message)
  }
}

async function addShorts(shorts) {
  try {
    console.log('\nStarting shorts\n')

    for (const video of shorts) {
      if (video.id.kind === 'youtube#video') {
        let { title, publishedAt } = video.snippet
        title = decodeHtml(title)

        console.log('Title: ', title)

        const videoId = video.id.videoId
        const thumbnailUrl = video.snippet.thumbnails.high.url

        let artistName = ARTISTS.find(artist => title.includes(artist))
        if (!artistName) {
          artistName = 'Unknown Artist'
        }

        const artist = await findOrCreateArtist(artistName)

        ARTISTS.push(artist.name)

        const video = {
          id: videoId,
          title: title,
          description: description,
          thumbnail: thumbnailUrl,
          publishedAt: publishedAt,
          artistRef: doc(db, 'artists', artist.id),
        }

        await addShort(video)
      }
    }
  } catch (error) {
    console.error('Error fetching: ', error.message)
  }
}

// -------------------------------------------------------------

await deleteExistingData()
await fetchYtApi()
await addShorts(SHORTS)

console.log('\n\nArtist and Video saved to the database.\n')
