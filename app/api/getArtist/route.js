import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = request.url.split("=");
  const artistId = url[url.length - 1];
  const artist = await prisma.Artist.findFirst({
    where: {
      id: artistId,
    },
    include: {
      videos: true,
      shorttVideos: true,
    },
  });
  return new Response(JSON.stringify(artist));
}
