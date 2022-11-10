import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

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

			<section id="profile" className="snap-start">
				<Profile />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center">
				<Experience />
			</section>

			<section>
				<Skills />
			</section>
		</div>
	);
};

export default Home;
