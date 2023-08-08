import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getVideos() {
  try {
    const videos = await prisma.ytVideo.findMany();
    return res.json(videos);
  } catch (error) {
    return error.json();
  }
};
