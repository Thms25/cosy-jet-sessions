import { PrismaClient } from "@prisma/client";

import { google } from "googleapis";
const youtube = google.youtube("v3");

const prisma = new PrismaClient();

async function deleteExistingData() {
  console.log("starting deleting existing data \n");

  await prisma.artist.deleteMany();
  console.log("Artists deleted.");

  await prisma.ytVideo.deleteMany();
  console.log("Videos deleted.");

  await prisma.ytShort.deleteMany();
  console.log("Shorts deleted.");
}

async function getFullDescription(videoId) {
  const { data } = await youtube.videos.list({
    id: videoId,
    part: "snippet",
    key: process.env.YT_API_KEY,
  });

  return data.items[0].snippet.description;
}

function decodeHtml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function getArtistName(title) {
  if (/[Cc]over/.test(title)) {
    const match = title.match(/over by (.*?)\)/);
    return match ? match[1] : "Unknown Artist";
  } else {
    const splitTitle = title.split(" - ");
    return splitTitle.length > 0 ? splitTitle[0] : "Unknown Artist";
  }
}

async function findOrCreateArtist(artistName) {
  try {
    let artist = await prisma.artist.findFirst({
      where: { name: artistName },
    });
    if (artist) {
      console.log(`Artist found: ${artist.name}`);
    }

    if (artist === null) {
      artist = await prisma.artist.create({
        data: {
          name: artistName,
        },
      });
      console.log(`Artist created: ${artist.name}`);
    }

    return artist;
  } catch (error) {
    console.error("Error finding or creating artist:", error);
  }
}

async function upsertVideo(
  model,
  videoId,
  title,
  description,
  publishedAt,
  thumbnailUrl,
  artist
) {
  try {
    await prisma[model].upsert({
      where: { videoId: videoId },
      create: {
        videoId: videoId,
        title,
        description,
        publishedAt,
        thumbnail: thumbnailUrl,
        artist: {
          connect: { id: artist.id },
        },
      },
      update: {},
    });

    console.log(`Video seved for: ${artist?.name}`);
  } catch (error) {
    console.error("Error upserting video:", error);
  }
}

const SHORTS = [];
const ARTISTS = [];

async function fetchVideosAndArtists(nextPageToken = null) {
  try {
    const options = {
      part: "snippet",
      channelId: "UCdlvOT8isQcuCrxzWgroGZQ",
      maxResults: 50,
      order: "date",
      key: process.env.YT_API_KEY,
    };

    if (nextPageToken) {
      options.pageToken = nextPageToken;
    }

    console.log("\n\nFetching videos\n");

    const { data } = await google.youtube("v3").search.list(options);

    const videos = [];

    data.items.forEach((video) => {
      decodeHtml(video.snippet.title).includes("#")
        ? SHORTS.push(video)
        : videos.push(video);
    });

    console.log("\nStarting full videos\n");

    for (const video of videos) {
      if (video.id.kind === "youtube#video") {
        let { title, publishedAt } = video.snippet;
        title = decodeHtml(title);

        console.log("\nTitle: ", title);

        const videoId = video.id.videoId;
        const description = await getFullDescription(videoId);
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        const artistName = getArtistName(title);

        const artist = await findOrCreateArtist(artistName);
        ARTISTS.push(artist.name);

        await upsertVideo(
          "ytVideo",
          videoId,
          title,
          description,
          publishedAt,
          thumbnailUrl,
          artist
        );
      }
    }

    if (data.nextPageToken) {
      console.log("\nfetching next page\n");
      await fetchVideosAndArtists(data.nextPageToken);
    }
  } catch (error) {
    console.error("Error fetching: ", error.message);
  }
}

async function addShorts(shorts) {
  try {
    console.log("\nStarting shorts\n");

    for (const video of shorts) {
      if (video.id.kind === "youtube#video") {
        let { title, publishedAt } = video.snippet;
        title = decodeHtml(title);

        console.log("Title: ", title);

        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.high.url;

        let artistName = ARTISTS.find((artist) => title.includes(artist));
        if (!artistName) {
          artistName = "Unknown Artist";
        }

        const artist = await findOrCreateArtist(artistName);
        await upsertVideo(
          "ytShort",
          videoId,
          title,
          "",
          publishedAt,
          thumbnailUrl,
          artist
        );
      }
    }
  } catch (error) {
    console.error("Error fetching: ", error.message);
  }
}

// ------------------------------------

await deleteExistingData();
await fetchVideosAndArtists();
await addShorts(SHORTS);

console.log("\n\nArtist and Video saved to the database.\n");
