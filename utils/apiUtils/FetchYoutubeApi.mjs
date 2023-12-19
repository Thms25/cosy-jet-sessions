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

    const { data } = await google.youtube("v3").search.list(options);

    const fullVideos = [];
    const shorts = [];

    data.items.forEach((video) => {
      decodeHtml(video.snippet.title).includes("#")
        ? shorts.push(video)
        : fullVideos.push(video);
    });

    for (const video of fullVideos) {
      if (video.id.kind === "youtube#video") {
        let { title, publishedAt } = video.snippet;
        title = decodeHtml(title);

        const videoId = video.id.videoId;
        const description = await getFullDescription(videoId);
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        let artistName;

        if (/[Cc]over/.test(title)) {
          const match = title.match(/over by (.*?)\)/);
          artistName = match ? match[1] : "Unknown Artist";

          console.log("matched title: ", title);
        } else {
          const splitTitle = title.split(" - ");
          artistName = splitTitle.length > 0 ? splitTitle[0] : "Unknown Artist";
          console.log("split title: ", splitTitle[0]);
        }

        console.log("\nArtist: ", artistName);
        console.log("Title: ", title);

        let artist = await prisma.artist.findFirst({
          where: { name: artistName },
        });

        if (artist === null) {
          artist = await prisma.artist.create({
            data: {
              name: artistName,
            },
          });
        }

        try {
          await prisma.ytVideo.upsert({
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
        } catch (error) {
          console.error("Error upserting video:", error);
        }

        console.log(`\nArtsit seved: ${artist?.name}\n`);
      }
    }

    for (const video of shorts) {
      if (video.id.kind === "youtube#video") {
        const { title, publishedAt } = video.snippet;
        const videoId = video.id.videoId;
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        let artistName;

        if (/[Cc]over /.test(title)) {
          const match = title.match(/over by (.*?)\)/);
          artistName = match ? match[1] : "Unknown Artist";
        } else {
          const splitTitle = title.split(" | ");
          artistName =
            splitTitle.length > 0
              ? splitTitle[0].split(" - ")[1]
              : "Unknown Artist";
        }

        console.log("Artist: ", artistName);
        console.log("Title: ", title);

        const artist = await prisma.artist.findFirst({
          where: { name: artistName },
        });

        if (artist) {
          try {
            await prisma.ytShort.upsert({
              where: { videoId: videoId },
              create: {
                videoId: videoId,
                title,
                publishedAt,
                thumbnail: thumbnailUrl,
                artist: {
                  connect: { id: existingArtist.id },
                },
              },
              update: {},
            });

            console.log(`\nArtsit seved: ${artist.name}\n`);
          } catch (error) {
            console.error("Error upserting video:", error);
          }
        }
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

await deleteExistingData();

await fetchVideosAndArtists();

console.log("\nArtist and Video saved to the database.\n");
