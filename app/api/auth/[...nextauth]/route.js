import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";

export const authOptions = {
  Providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
