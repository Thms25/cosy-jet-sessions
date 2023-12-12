import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const revalidate = 86400;

export async function GET(request) {
  try {
    const artists = await prisma.Artist.findMany({
      include: {
        videos: true,
        shorttVideos: true,
      },
    });

    return new Response(JSON.stringify(artists), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch artists", { status: 500 });
  }
}
