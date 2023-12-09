import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const videos = await prisma.YtVideo.findMany({
      orderBy: {
        publishedAt: "desc",
      },
      take: 10,
    });
    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch videos...", { status: 500 });
  }
}
