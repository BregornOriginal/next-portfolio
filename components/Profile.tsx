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
			<div>
				<h1>
					<span>{text}</span>
					<Cursor cursorColor="orange" />
				</h1>
			</div>
		</div>
	);
}
