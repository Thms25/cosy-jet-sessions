import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteExistingData() {
  await prisma.Artist.deleteMany();
  console.log("Artists deleted.");
  await prisma.YtVideo.deleteMany();
  console.log("Videos deleted.");
}

await deleteExistingData();

async function fetchVideosAndArtists(nextPageToken = null) {
  try {
    const apiKey = process.env.YT_API_KEY;
    const apiUrl = "https://www.googleapis.com/youtube/v3/search?";
    const channelId = "UCdlvOT8isQcuCrxzWgroGZQ";
    let url = `${apiUrl}part=snippet&channelId=${channelId}&maxResults=50&order=date&key=${apiKey}`;

    if (nextPageToken) {
      url += `&pageToken=${nextPageToken}`;
    }

    const response = await fetch(url);

    const data = await response.json();
    const videos = [];
    const shorts = [];

    data["items"].forEach((video) => {
      video["snippet"]["title"].includes("#")
        ? shorts.push(video)
        : videos.push(video);
    });

    for (const video of videos) {
      console.log("\napi res: ", video);

      const { title, description, publishedAt } = video.snippet;
      const thumbnailUrl = video.snippet.thumbnails.high.url;
      let artistName;

      if (/[Cc]over/.test(title)) {
        const match = title.match(/over by (.*?)\)/);
        artistName = match ? match[1] : "Unknown Artist";
      } else {
        const splitTitle = title.split(" - ");
        artistName = splitTitle.length > 0 ? splitTitle[0] : "Unknown Artist";
      }

      console.log("\nArtist: ", artistName);
      console.log("Title: ", title);
      console.log("Published at: ", publishedAt);
      console.log("url: ", thumbnailUrl);

      if (artistName !== "Cosy Jet sessions") {
        const existingArtist = await prisma.artist.findFirst({
          where: { name: artistName },
        });

        let artist;

        if (existingArtist) {
          artist = existingArtist;
        } else {
          artist = await prisma.artist.create({
            data: {
              name: artistName,
            },
          });
        }

        await prisma.ytVideo.upsert({
          where: { videoId: video["id"]["videoId"] },
          create: {
            videoId: video["id"]["videoId"],
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

        console.log("\nArtsit seved\n");
      }
    }
    for (const video of shorts) {
      console.log("\napi res: ", video);

      // const { title, description, publishedAt } = video.snippet;
      // const thumbnailUrl = video.snippet.thumbnails.high.url;
      // let artistName;

      // if (/[Cc]over/.test(title)) {
      //   const match = title.match(/over by (.*?)\)/);
      //   artistName = match ? match[1] : "Unknown Artist";
      // } else {
      //   const splitTitle = title.split(" - ");
      //   artistName = splitTitle.length > 0 ? splitTitle[0] : "Unknown Artist";
      // }
      // const artistName = title.includes("cover")
      //   ? title.match(/cover by (.*?)\)/)[1]
      //   : title.split(" - ")[0];

      // console.log("Artist: ", artistName);
      // console.log("Title: ", title);
      // console.log("Published at: ", publishedAt);
      // console.log("url: ", thumbnailUrl);

      // const existingArtist = await prisma.artist.findFirst({
      //   where: { name: artistName },
      // });

      // let artist;

      // if (existingArtist) {
      //   artist = existingArtist;
      // } else {
      //   artist = await prisma.artist.create({
      //     data: {
      //       name: artistName,
      //     },
      //   });
      // }

      // await prisma.ytVideo.upsert({
      //   where: { videoId: video["id"]["videoId"] },
      //   create: {
      //     videoId: video["id"]["videoId"],
      //     title,
      //     description,
      //     publishedAt,
      //     thumbnail: thumbnailUrl,
      //     artist: {
      //       connect: { id: artist.id },
      //     },
      //   },
      //   update: {},
      // });
    }

    if (data.nextPageToken) {
      await fetchVideosAndArtists(data.nextPageToken);
    }
  } catch (error) {
    console.error("Error fetching: ", error.message);
  }
}

await fetchVideosAndArtists();
console.log("Artist and Video saved to the database.\n\n");
