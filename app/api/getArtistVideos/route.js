import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = request.url.split("=");
  const artistName = url[url.length - 1];
  console.log(artistName);
  const artist = await prisma.Artist.findFirst({
    where: {
      name: artistName,
    },
  });
  console.log(artist);

  const videos = await prisma.YtVideo.findMany({
    where: {
      artistId: artist.id,
    },
  });
  console.log(videos);
  return new Response(JSON.stringify(videos));
}
