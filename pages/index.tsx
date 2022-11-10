import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <Head>
        <title>Julio Gagliardi&apos;s Next Portfolio</title>
      </Head>

      <Header />

      <section id="profile">
        <Profile />
      </section>
    </div>
  );
}

export default Home;
