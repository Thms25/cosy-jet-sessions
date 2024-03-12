import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const revalidate = 60 * 60 * 24 * 7; // 1 week

export async function GET(request, { params }) {
  if (!params.artistId) {
    return new Response(JSON.stringify({ message: "artistId is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const artist = await prisma.artist.findFirst({
      where: {
        id: params.artistId,
      },
      include: {
        videos: true,
        // shorttVideos: true,
      },
    });

    return new Response(JSON.stringify(artist), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("artist error", error.message);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch artist",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
