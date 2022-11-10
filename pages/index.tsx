import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Julio Gagliardi&apos;s Next Portfolio</title>
        <meta name="description" content="Full Stack Developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="profile">
        <Profile />
      </section>
    </div>
  );
}
