import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="sticky bottom-5 w-full cursor-pointer">
			<div className="flex items-center justify-center">
				<img
					className="h-10 w-10 roudned-full filter grayscale hover:grayscale-0
    cursor-pointer rounded-md"
					src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/19/16503736092836.jpg"
					alt="An image to homepage"
				/>
			</div>
		</footer>
	);
};

export default Footer;
