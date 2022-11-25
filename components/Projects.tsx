import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-20 sm:top-24 uppercase tracking-[1.5em] text-gray-500 text-2x1">
				Projects
			</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
			>
				{projects?.map((project, i) => (
					<div
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
						key={i}
					>
						<Link href={project?.linkToBuild} target="_blank">
							<motion.img
								initial={{
									y: -300,
									opacity: 0,
								}}
								className="max-h-80 object-contain"
								transition={{ duration: 1.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src={urlFor(project?.image).url()}
								alt=""
								width={666}
								height={375}
							/>
						</Link>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-xl font-semibold text-center">
								<span>
									Project {i + 1} of {projects.length}:
								</span>{' '}
								{project?.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{project?.technologies.map((technology) => (
									<img
										className="h-8 w-8 sm:h-10 sm:w-10"
										key={technology._id}
										src={urlFor(technology.image).url()}
										alt="This is an icon of a technology"
									/>
								))}
							</div>
							<p className="text-sm sm:text-xl text-center md:text-left max-h-28 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
};

export default Projects;
