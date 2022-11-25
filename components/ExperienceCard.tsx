import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
	experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
       w-[350px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
       opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-20 h-20 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
    object-center"
				src={urlFor(experience?.companyImage).url()}
				alt="This is an image of the company"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-2xl sm:text-4xl font-light">{experience?.company}</h4>
				<p className="font-bold sm:text-2xl text-xl mt-1">{experience?.jobTitle}</p>
				<div className="flex space-x-2 my-2">
					{experience.technologies.map(
						(technology: { _id: React.Key | null | undefined; image: any }) => (
							<img
								key={technology._id}
								className="h-6 w-6 max-w-xs sm:h-10 sm:w-10 rounded-md"
								src={urlFor(technology.image).url()}
								alt=""
							/>
						)
					)}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{new Date(experience.dateStarted).toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'short',
					})}{' '}
					-{' '}
					{experience.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toLocaleDateString('en-us', {
								year: 'numeric',
								month: 'short',
						  })}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-md max-h-32 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
					{experience?.points?.map((point, index) => (
						<li key={index}>◉ {point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
