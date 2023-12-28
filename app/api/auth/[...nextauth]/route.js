import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/prisma";

let handler;
try {
  handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        profile(profile) {
          return {
            id: profile.id,
            name: profile.name,
            userName: profile.username,
            email: profile.email,
            image: profile.image,
            role: profile.role,
            playlist: profile.playlist,
          };
        },
      }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
      session: async (session, user) => {
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.userName = user.userName;
        session.user.role = user.role;
        session.user.playlist = user.playlist;
        return Promise.resolve(session);
      },
    },
  });
} catch (error) {
  console.error("NextAuth.js initialization error", error);
}

export { handler as GET, handler as POST };
