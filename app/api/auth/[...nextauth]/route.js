import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/prisma/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httptimeout: 10000,
      // profile(profile) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     userName: profile.username,
      //     email: profile.email,
      //     image: profile.image,
      //     role: profile.role,
      //     playlist: profile.playlist,
      //   };
      // },
    }),
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      // console.log("USER", user.user);

      const dbUser = await prisma.user.upsert({
        where: { email: user.user.email },
        update: {
          name: user.user.name,
          image: user.user.image,
          email: user.user.email,
        },
        create: {
          name: user.user.name,
          email: user.user.email,
          image: user.user.image,
        },
      });

      // console.log("DBUSER", dbUser);
      return true; // Return true to sign the user in
    },
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

export { handler as GET, handler as POST };
