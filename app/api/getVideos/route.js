// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function getVideos() {
//   try {
//     const videos = await prisma.ytVideo.findMany();
//     return res.json(videos);
//   } catch (error) {
//     return error.json();
//   }
// };


export async function GET(request) {

  const videos = [
    { videoID: "bUnNzb-Floo" },
    { videoID: "1lvytCVdqjE" },
    { videoID: "lGZDjhryorY" },
  ]

  return new Response(JSON.stringify(videos));
}
