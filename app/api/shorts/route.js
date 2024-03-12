import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const revalidate = 86400;

export async function GET(request) {
  try {
    const videos = await prisma.YtShort.findMany({});
    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch videos...", { status: 500 });
  }
}
