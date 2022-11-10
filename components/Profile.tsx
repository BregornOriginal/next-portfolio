import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Profile({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, My name is Julio Gagliardi',
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
					className="relative rounded-full h-32 w-32 mx-auto object-cover"
					src="https://i.ibb.co/SXQvg99/Foto-JPG.jpg"
					alt=""
					width={500}
					height={500}
				/>
			</picture>
			<div className='z-20'>
				<h2 className="text-sm uppercase text-grey-500 pb-2 tracking-[15px]">
					Full Stack Developer
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
