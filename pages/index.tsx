import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';

const Home: NextPage = () => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0"
		>
			<Head>
				<title>Julio Gagliardi&apos;s Next Portfolio</title>
			</Head>

			<Header />

			<section id="profile" className="snap-center">
				<Profile />
			</section>
		</div>
	);
};

export default Home;
