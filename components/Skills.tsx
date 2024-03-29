import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
	skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex relative flex-col text-center md:text-left 
    xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

			<div className="grid grid-cols-4 gap-5 pt-14">
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill key={skill._id} skill={skill} directionLeft />
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
