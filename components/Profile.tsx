import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
	pageInfo: PageInfo;
};

export default function Profile({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, My name is ${pageInfo?.name}`,
			"Full Stack Developer — Rails & React",
			"Building scalable applications for real-world problems",
		],
		loop: true,
		delaySpeed: 2000,
	});
	const hasProfileImageRef = Boolean(pageInfo?.profileImage?.asset?._ref);
	const profileImageSrc = hasProfileImageRef
		? urlFor(pageInfo.profileImage).width(400).height(400).fit('crop').auto('format').quality(75).url()
		: null;

	return (
		<div
			className="h-screen flex flex-col space-y-8 items-center justify-center
  text-center overflow-hidden"
		>
			<BackgroundCircles />
			<div className="relative group">
				{profileImageSrc ? (
					<Image
						className="relative rounded-full h-40 w-40 mx-auto object-cover transition duration-300 group-hover:blur-sm group-hover:brightness-75"
						src={profileImageSrc}
						alt={pageInfo?.name ? `${pageInfo.name} profile photo` : 'Profile photo'}
						width={160}
						height={160}
						sizes="160px"
						priority
					/>
				) : (
					<div className="relative rounded-full h-40 w-40 mx-auto bg-gray-700/60" aria-hidden />
				)}
				<button
					type="button"
					onClick={() => {
						if (typeof window !== 'undefined') {
							window.dispatchEvent(new Event('open-gemini-chat'));
						}
					}}
					className="absolute inset-0 mx-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				>
					<span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7ab0a] text-black shadow-lg">
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
					</span>
				</button>
			</div>
			<div className="z-20">
				<h2 className="text-sm uppercase text-grey-500 pb-2 pt-12 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-5xl lg:text-5xl font-semibold px=10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="orange" />
				</h1>

				<div className="pt-5 flex flex-wrap justify-center gap-4">
					<Link href="#about" className="profileButton">
						About
					</Link>
					<Link href="#experience" className="profileButton">
						Experience
					</Link>
					<Link href="#skills" className="profileButton">
						Skills
					</Link>
					<Link href="#projects" className="profileButton">
						Projects
					</Link>
				</div>
			</div>
		</div>
	);
}
