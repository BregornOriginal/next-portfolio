import Link from 'next/link';
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
			"A gamer and PC's enthusiast",
			'{ Love write code! }',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div
			className="h-screen flex flex-col space-y-8 items-center justify-center
  text-center overflow-hidden"
		>
			<BackgroundCircles />
			<picture>
				<img
					className="relative rounded-full h-40 w-40 mx-auto object-cover"
					src={urlFor(pageInfo?.profileImage).url()}
					alt=""
					width={500}
					height={500}
				/>
			</picture>
			<div className="z-20">
				<h2 className="text-sm uppercase text-grey-500 pb-2 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-5xl lg:text-5xl font-semibold px=10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="orange" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="profileButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="profileButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="profileButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="profileButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
