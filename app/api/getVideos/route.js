import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const url = "https://www.googleapis.com/youtube/v3/search?";
const channel = "UCdlvOT8isQcuCrxzWgroGZQ";

const fetchUrl = `${url}key=${process.env.YT_API_KEY}&channelId=${channel}&part=snippet&maxResults=10&order=viewCount`;

const prisma = new PrismaClient();

// const [videosId, setVideosId] = useState([]);

// useEffect(() => {
//   fetch(fetchUrl)
//     .then((response) => response.json())
//     .then((resJson) => {
//       const results = resJson.items.map((result) => ({
//         videoId: result.id.videoId,
//       }));
//       console.log(results);
//       setVideosId(results);
//     });
// });

// console.log(videosId);

export async function GET(request) {
  const videos = await prisma.ytVideo.findMany();
  return new Response(JSON.stringify(videos));
}
