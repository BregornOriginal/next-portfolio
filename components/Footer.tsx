import React from 'react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="sticky bottom-5 w-full cursor-pointer">
			<Link href="#profile" className="flex flex-end items-center pr-6 justify-end">
				<img
					className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
					src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/19/16503736092836.jpg"
					alt="An image to homepage"
					width={40}
					height={40}
				/>
			</Link>
		</footer>
	);
};

export default Footer;
