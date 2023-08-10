import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchVideosAndArtists() {
  try {
    const apiKey = process.env.YT_API_KEY;
    const apiUrl = "https://www.googleapis.com/youtube/v3/search?";
    const channelId = "UCdlvOT8isQcuCrxzWgroGZQ";

    const response = await fetch(
      `${apiUrl}part=snippet&channelId=${channelId}&maxResults=50&order=date&key=${apiKey}`
    );

    const data = await response.json();
    const videos = data["items"].filter((video) => {
      return !video["snippet"]["title"].includes("#");
    });

    for (const video of videos) {
      const { title, description } = video.snippet;

      const artistName = title.includes("cover")
        ? title.match(/cover by (.*?)\)/)[1]
        : title.split(" - ")[0];

      console.log(artistName, title);

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

      await prisma.ytVideo.create({
        data: {
          videoId: video["id"]["videoId"],
          title,
          description,
          artist: {
            connect: { id: artist.id },
          },
        },
      });
    }

    console.log("Artist and Video saved to the database.");
  } catch (error) {
    console.error("Error fetching: ", error.message);
  }
}

fetchVideosAndArtists();
