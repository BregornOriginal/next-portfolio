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
import AIChatWidget from '../components/AIChatWidget';
import type { PageInfo, Experience, Skill, Project, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperience';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const fallbackPageInfo: PageInfo = {
	_createdAt: '',
	_id: 'fallback-page-info',
	_rev: '',
	_updatedAt: '',
	_type: 'pageInfo',
	address: '',
	backgroundInformation: '',
	email: '',
	role: '',
	profileImage: {
		_type: 'image',
		asset: {
			_ref: '',
			_type: 'reference',
		},
	},
	name: '',
	phoneNumber: '',
	profilePic: {
		_type: 'image',
		asset: {
			_ref: '',
			_type: 'reference',
		},
	},
	phrases: [],
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
	return (
		<div
			className="bg-[rgb(36,36,36)] text-white h-screen snap-y
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
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

			<Footer />

			<AIChatWidget
				pageInfo={pageInfo}
				experiences={experiences}
				skills={skills}
				projects={projects}
			/>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const [pageInfoResult, experiencesResult, skillsResult, projectsResult, socialsResult] = await Promise.allSettled([
		fetchPageInfo(),
		fetchExperiences(),
		fetchSkills(),
		fetchProjects(),
		fetchSocial(),
	]);

	const pageInfo: PageInfo = pageInfoResult.status === 'fulfilled' ? pageInfoResult.value : fallbackPageInfo;
	const experiences: Experience[] = experiencesResult.status === 'fulfilled' ? experiencesResult.value : [];
	const skills: Skill[] = skillsResult.status === 'fulfilled' ? skillsResult.value : [];
	const projects: Project[] = projectsResult.status === 'fulfilled' ? projectsResult.value : [];
	const socials: Social[] = socialsResult.status === 'fulfilled' ? socialsResult.value : [];

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
