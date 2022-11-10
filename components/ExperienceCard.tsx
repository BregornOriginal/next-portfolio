import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const ExperienceCard = (props: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
       w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
       opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
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
						src="https://camo.githubusercontent.com/38b72f440cbf774558b9399b27bf659066e94b1eddc4510a9607ced1f028f6d0/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://camo.githubusercontent.com/38b72f440cbf774558b9399b27bf659066e94b1eddc4510a9607ced1f028f6d0/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://camo.githubusercontent.com/38b72f440cbf774558b9399b27bf659066e94b1eddc4510a9607ced1f028f6d0/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
						alt=""
					/>
				</div>
				<p className="uppercase py-5 text-gray-300">Started work...</p>
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
