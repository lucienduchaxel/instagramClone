import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import { signIn, useSession } from 'next-auth/react'
import Modal from '../components/Modal'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />

      {!session && (
        <>
          <button onClick={signIn}>SignIn</button>
        </>
      )}

      {session && (
        <>
          <Header />
          <Feed />

          <Footer />
        </>
      )}
    </div>
  )
}
