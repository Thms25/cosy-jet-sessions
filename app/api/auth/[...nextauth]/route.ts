import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@auth/firebase-adapter'
import { db, firebaseApp, firestore } from 'utils/firebase/firebase-config'
import { cert } from 'firebase-admin/app'

export const AuthOptions: any = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
      clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
      privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  }),
  callbacks: {
    session({ session, token, user }) {
      return { session, token, user }
    },
    async createUser(profile) {
      const userRef = firestore.collection('users').doc(profile.id)
      const userData = {
        ...profile,
        role: 'guest',
      }

      await userRef.set(userData)

      return userData
    },
  },
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }
