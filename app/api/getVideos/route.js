import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchAndSavePlaylists() {
  try {
    const apiKey = process.env.YT_API_KEY;
    const apiUrl = "https://www.googleapis.com/youtube/v3/search?";
    const channelId = "UCdlvOT8isQcuCrxzWgroGZQ";

    const response = await fetch(
      `${apiUrl}part=snippet&channelId=${channelId}&maxResults=50&key=${apiKey}`
    );

    const data = await response.json();
    const videos = data.items.filter((video) => {
      return video.snippet.videoType !== "short";
    });

    for (const video of videos) {
      const { id, snippet } = video;
      const { videoId, title, description } = snippet;

      await prisma.ytVideo.create({
        data: {
          videoId,
          title,
          description,
          // Add other fields you want to populate in your model
        },
      });
    }

    console.log("Playlists saved to the database.");
  } catch (error) {
    console.error("Error fetching and saving playlists:", error.message);
  }
}

// Call the function with your channel ID
// fetchAndSavePlaylists();

export async function GET(request) {
  const videos = await prisma.ytVideo.findMany();
  return new Response(JSON.stringify(videos));
}
