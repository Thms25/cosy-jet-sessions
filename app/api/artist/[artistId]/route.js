import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const revalidate = 86400;

export async function GET(request, { params }) {
  try {
    const artist = await prisma.artist.findFirst({
      where: {
        id: params.artistId,
      },
      include: {
        videos: true,
        shorttVideos: true,
      },
    });

    return new Response(JSON.stringify(artist), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch artist",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
