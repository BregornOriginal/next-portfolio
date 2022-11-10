import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Julio Gagliardi&apos;s Next Portfolio</title>
        <meta name="description" content="Full Stack Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    <div className="">
      <p className="text-2x1 text-green-600 ">
      Portfolio
      </p> </div>
    </div>
  )
}
