import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weframetech Assignment</title>
        <meta name="description" content="Frontend task for Weframetech" />
      </Head>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to Weframetech Assignment</h1>
      </main>
    </>
  )
}
