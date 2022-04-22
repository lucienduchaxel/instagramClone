import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub

      await setDoc(doc(db, 'users', session.user.uid), {
        username: session.user.username,
        image: session.user.image,
        email: session.user.email,
        name: session.user.name,
        timestamp: serverTimestamp(),
      })
      return session
    },
  },
})
