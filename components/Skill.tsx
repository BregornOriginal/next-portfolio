import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	skill: Skill;
	directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
	return (
		<div className="flex group relative cursor-pointer">
			<motion.img
				initial={{
					x: directionLeft ? -100 : 100,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className="rounded-lg border border-gray-500 object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-20 xl:h-20
				filter group:hover:grayscale transition duration-300 ease-in-out"
				src={urlFor(skill?.image).url()}
			/>
			<div
				className="absolute opacity-0 group-hover:opacity-80 transition duration-300
			ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-20 xl:h-20
			rounded-lg z-0"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-sm font-bold text-black opacity-100">{skill.title}</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
