import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const artist = await prisma.Artist.findFirst({
      where: {
        id: params.artistId,
      },
      include: {
        videos: true,
        shorttVideos: true,
      },
    });
    return new Response(JSON.stringify(artist), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch artist", { status: 500 });
  }
}
