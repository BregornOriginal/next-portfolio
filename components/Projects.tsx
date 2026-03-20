import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [isHovering, setIsHovering] = useState(false);

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	};

	useEffect(() => {
		checkScroll();
		const container = scrollContainerRef.current;
		container?.addEventListener('scroll', checkScroll);
		window.addEventListener('resize', checkScroll);

		return () => {
			container?.removeEventListener('scroll', checkScroll);
			window.removeEventListener('resize', checkScroll);
		};
	}, []);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = window.innerWidth;
			scrollContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<h3 className="absolute top-20 sm:top-24 uppercase tracking-[1.5em] text-gray-500 text-2x1">
				Projects
			</h3>

			{/* Left Arrow */}
			{canScrollLeft && isHovering && (
				<button
					type="button"
					onClick={() => scroll('left')}
					className="absolute left-2 sm:left-5 z-50 bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg"
					aria-label="Scroll left"
				>
					<svg
						className="w-5 h-5 sm:w-6 sm:h-6 text-black"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			)}

			<div
				ref={scrollContainerRef}
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
			>
				{projects?.map((project, i) => (
					<div
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
						key={i}
					>
						<Link href={project?.linkToBuild} target="_blank">
							<motion.img
								initial={{
									y: -300,
									opacity: 0,
								}}
								className="max-h-80 object-contain"
								transition={{ duration: 1.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src={urlFor(project?.image).url()}
								alt=""
								width={666}
								height={375}
							/>
						</Link>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-xl font-semibold text-center">
								<span>
									Project {i + 1} of {projects.length}:
								</span>{' '}
								{project?.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{project?.technologies.map((technology) => (
									<Image
										className="h-8 w-8 sm:h-10 sm:w-10"
										key={technology._id}
										src={urlFor(technology.image).url()}
										alt="This is an icon of a technology"
										width={40}
										height={40}
									/>
								))}
							</div>
							<p className="text-sm sm:text-xl text-center md:text-left max-h-28 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Right Arrow */}
			{canScrollRight && isHovering && (
				<button
					type="button"
					onClick={() => scroll('right')}
					className="absolute right-2 sm:right-5 z-50 bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg"
					aria-label="Scroll right"
				>
					<svg
						className="w-5 h-5 sm:w-6 sm:h-6 text-black"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			)}

			<div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
};

export default Projects;
