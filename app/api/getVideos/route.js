import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const videos = await prisma.ytVideo.findMany();
  return new Response(JSON.stringify(videos));
}
