import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
      initial= {{ opacity: 0 }}
      whileInView= {{ opacity: 1 }}
      transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7-xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="https://i.ibb.co/8M1ZMyy/IMG-20190114-122126719.jpg"
				alt="This is a photo entering on a cave"
				transition={{
					duration: 1.2,
				}}
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
          md:rounded-lg md:w-70 md:h-100 xl:w-[1000px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a <span className="underline decoration-[#ad8447]">little</span> background
				</h4>
				<p className="text-base">
					I am a Full Stack Web Developer and open source enthusiast. Significant experience in
					pair-programming with different kinds of cultures/persons. Computer enthusiast, always
					looking to learn new technologies in Hardware or Software. Self-taught Software Engineer.
					Love remote work and I&apos;m very careful to write DRY code—fast learning, structured,
					and ordered with documentation. Enjoy learning new knowledge every day about programming.
					Passionate about ideating, conceptualizing, and producing consumer-centric. Open for
					exploring exciting full-stack development opportunities in startups as well as companies
					with scale.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
