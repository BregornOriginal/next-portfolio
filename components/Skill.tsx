import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	directionLeft?: boolean;
};

const Skill = (directionLeft: Props) => {
	return (
		<div className="flex group relative cursor-pointer">
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28
				md:h-28 xl:w-32 xl:h-32 filter group:hover:grayscale transition duration-300 ease-in-out"
				src="https://camo.githubusercontent.com/38b72f440cbf774558b9399b27bf659066e94b1eddc4510a9607ced1f028f6d0/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f72656163742d6e61746976652e706e67"
			/>
			<div
				className="absolute opacity-0 group-hover:opacity-80 transition duration-300
			ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
			rounded-full z-0"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">100%</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
