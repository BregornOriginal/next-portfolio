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
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className="rounded-lg border border-gray-500 object-cover w-20 h-20 md:w-24
				md:h-24 xl:w-26 xl:h-26 filter group:hover:grayscale transition duration-300 ease-in-out"
				src={urlFor(skill?.image).url()}
			/>
			<div
				className="absolute opacity-0 group-hover:opacity-80 transition duration-300
			ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-26 xl:h-26
			rounded-full z-0"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
