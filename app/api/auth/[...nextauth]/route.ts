import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
}

// const handler = NextAuth(AuthOptions)

// export { handler as GET, handler as POST }

export default NextAuth(AuthOptions)
