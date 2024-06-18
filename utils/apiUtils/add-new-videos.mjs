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

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  addDoc,
  query,
  where,
} from 'firebase/firestore'

import { google } from 'googleapis'
const youtube = google.youtube('v3')

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

async function findOrCreateArtist(artistName, img, date) {
  const artistCollection = collection(db, 'artists')

  // Query the collection for documents where the name field matches artistName
  const q = query(artistCollection, where('name', '==', artistName))
  const artistSnapshot = await getDocs(q)

  if (!artistSnapshot.empty) {
    const doc = artistSnapshot.docs[0]
    // return { id: doc.id, ...doc.data() }
    return doc
  } else {
    const docRef = await addDoc(artistCollection, {
      name: artistName,
      image: img,
      perf_date: date,
      // slug: artistName.toLowerCase().replace(/ /g, ''),
    })

    // Return the id of the new document and the data you just added
    return docRef
  }
}

async function checkArtistPresence(artistName) {
  const artistCollection = collection(db, 'artists')
  const q = query(artistCollection, where('name', '==', artistName))
  const artistSnapshot = await getDocs(q)

  return !artistSnapshot.empty
}

async function addVideo(video) {
  try {
    const videoCollection = collection(db, 'videos')
    await setDoc(doc(videoCollection, video.id), video)
    console.log('Video added successfully')
  } catch (error) {
    console.error('Error adding video: ', error.message)
  }
}

async function addShort(short) {
  try {
    const shortsCollection = collection(db, 'shorts')
    await setDoc(doc(shortsCollection, short.id), short)
    console.log('Short video added successfully')
  } catch (error) {
    console.error('Error adding short video: ', error.message)
  }
}

// -------------------------------------------------------------

const VIDEOS = []
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

    for (const item of data.items) {
      decodeHtml(item.snippet.title).includes('#')
        ? SHORTS.push(item)
        : VIDEOS.push(item)
    }

    if (data.nextPageToken) {
      console.log('\nfetching next page\n')
      await fetchYtApi(data.nextPageToken)
    }
  } catch (error) {
    console.error('Error fetching: ', error.message)
  }
}

async function addFullVideos(videos) {
  console.log('\nStarting full videos\n')

  for (const vid of videos) {
    const { kind, videoId } = vid.id
    const { snippet } = vid
    if (kind === 'youtube#video') {
      let { title, publishedAt } = snippet
      title = decodeHtml(title)

      console.log('\nVideo Title: ', title)

      const artistName = getArtistName(title)
      const artistExists = await checkArtistPresence(artistName)
      if (!artistExists) {
        console.log('Artist not found: ', artistName)
        // const description = await getFullDescription(videoId)

        // const thumbnailUrl = snippet.thumbnails.high.url

        // const artist = await findOrCreateArtist(
        //   artistName,
        //   thumbnailUrl,
        //   publishedAt,
        // )
        // console.log('Artist: ', artist.name)
        ARTISTS.push(artistName)

        // const video = {
        //   id: videoId,
        //   title: title,
        //   thumbnail: thumbnailUrl,
        //   publishedAt: publishedAt,
        //   description: description,
        //   artistRef: doc(db, 'artists', artist.id),
        // }

        // await addVideo(video)
      } else {
        break
        console.log('Artist found: ', artistName)
      }
    }
  }
}

async function addShorts(shorts) {
  try {
    console.log('\nStarting shorts\n')

    for (const vid of shorts) {
      const { kind, videoId } = vid.id
      const { snippet } = vid
      if (kind === 'youtube#video') {
        let { title, publishedAt } = snippet
        title = decodeHtml(title)

        console.log('Short video title: ', title)

        const thumbnailUrl = snippet.thumbnails.high.url

        let artistName = ARTISTS.find(artist => title.includes(artist))
        if (!artistName) {
          artistName = 'Unknown Artist'
        }

        const artist = await findOrCreateArtist(
          artistName,
          thumbnailUrl,
          publishedAt,
        )

        ARTISTS.push(artist.name)

        const video = {
          id: videoId,
          title: title,
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

await fetchYtApi()
await addFullVideos(VIDEOS)
// await addShorts(SHORTS)

console.log('\n\nArtist and Video saved to the database.\n')
