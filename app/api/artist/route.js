import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const revalidate = 60 * 60 * 24 * 7; // 1 week

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
    return new Response(
      JSON.stringify({
        message: "failed to fetch artists",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
