import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
	const hasProfilePicRef = Boolean(pageInfo?.profilePic?.asset?._ref);
	const profilePicSrc = hasProfilePicRef
		? urlFor(pageInfo.profilePic).width(1200).height(675).fit('max').auto('format').quality(75).url()
		: null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7-xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="invisible sm:visible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

			<motion.div
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 1.2,
				}}
				className="mt-20 md:mb-0 flex-shrink-0 w-50 h-46 rounded-full object-cover
          md:rounded-lg md:w-70 md:h-100 xl:w-[1000px] xl:h-[600px]"
			>
				{profilePicSrc ? (
					<Image
						src={profilePicSrc}
						alt="This is a photo entering on a cave"
						width={1000}
						height={600}
						sizes="(max-width: 768px) 200px, (max-width: 1280px) 320px, 581px"
						className="w-50 h-46 rounded-full object-cover md:rounded-lg md:w-70 md:h-100 xl:w-[1000px] xl:h-[600px]"
					/>
				) : (
					<div
						className="w-50 h-46 rounded-full bg-gray-700/60 md:rounded-lg md:w-70 md:h-100 xl:w-[1000px] xl:h-[600px]"
						aria-hidden
					/>
				)}
			</motion.div>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a <span>little</span> background
				</h4>
				<p className="text-sm sm:text-base">{pageInfo.backgroundInformation}</p>
			</div>
		</motion.div>
	);
};

export default About;
