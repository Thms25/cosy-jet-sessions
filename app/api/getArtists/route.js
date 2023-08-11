import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const artists = await prisma.Artist.findMany();
  return new Response(JSON.stringify(artists));
}
