import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const ExperienceCard = (props: Props) => {
	return (
		<article>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
    object-center"
				src="https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/images/ezCar/ezCar.png"
				alt=""
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">ezCar</h4>
				<p className="font-bold text-2xl mt-1">Colaborative project</p>
				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://camo.githubusercontent.com/da839b79b282a7658a172f07e13496fb18bcf9fa624d061def0e80f47a68ff1d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
						alt=""
					/>
          <img
						className="h-10 w-10 rounded-full"
						src="https://camo.githubusercontent.com/da839b79b282a7658a172f07e13496fb18bcf9fa624d061def0e80f47a68ff1d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
						alt=""
					/>
          <img
						className="h-10 w-10 rounded-full"
						src="https://camo.githubusercontent.com/da839b79b282a7658a172f07e13496fb18bcf9fa624d061def0e80f47a68ff1d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
						alt=""
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>Started work...</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
