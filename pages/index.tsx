import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { PageInfo, Experience, Skill, Project, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperience';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';
import Link from 'next/link';

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
		>
			<Head>
				<title>Julio Gagliardi&apos;s Next Portfolio</title>
			</Head>

			<Header socials={socials} />

			<section id="profile" className="snap-start">
				<Profile pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience">
				<WorkExperience experiences={experiences} />
			</section>

			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>

			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>

			<section id="contact" className='pt-10'>
				<Contact name={''} email={''} subject={''} message={''} />
			</section>
			
			<Link href="#profile">
				<Footer />
			</Link>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocial();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10,
	};
};
