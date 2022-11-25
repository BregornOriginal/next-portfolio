import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type props = {};

const Contact = (props: Inputs) => {
	return (
		<div
			className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 pt-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-sm sm:text-2xl">
				Contact
			</h3>

			<div className="flex flex-col max-w-full space-y-10">
				<h4 className="text-xl sm:text-4xl font-semibold text-center">
					I&apos;m skilled to work on your site. <span>Lets talk.</span>
				</h4>

				<div className="space-y-10">
					<div
						className="flex items-start space-x-5 justify-start
					sm:items-center sm:justify-center"
					>
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md sm:text-4xl">+5493425272929</p>
					</div>
					<div
						className="flex items-start space-x-5 justify-start
					sm:items-center sm:justify-center"
					>
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md sm:text-4xl">juliog.1557@gmail.com</p>
					</div>
					<div
						className="flex items-start space-x-5 justify-start
					sm:items-center sm:justify-center"
					>
						<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md sm:text-4xl">Argentina, Santa Fe - C.P. 3000</p>
					</div>
				</div>

				<form
					id="form"
					action="https://formspree.io/f/mlezobkj"
					method="POST"
					className="flex flex-col space-y-2 max-w-full mx-auto"
				>
					<div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 max-w-full mx-auto">
						<input placeholder="Name" className="contact-input" type="text" />
						<input placeholder="Email" className="contact-input" type="email" />
					</div>

					<input placeholder="Subject" className="contact-input" type="text" />

					<textarea placeholder="Message" className="contact-input"></textarea>
					<button
						type="submit"
						className="bg-[#F7AB0A] py-2 px-4 sm:py-5 sm:px-10 rounded-md text-black font-bold
          text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
