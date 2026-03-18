import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
	experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
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
			const scrollAmount = 400;
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
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-sm sm:text-2xl">
				Experience
			</h3>
			
			<div className="relative w-full flex items-center" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
				{/* Left Arrow */}
				{canScrollLeft && isHovering && (
					<button
						type="button"
						onClick={() => scroll('left')}
						className="absolute left-2 sm:left-5 z-50 bg-[#F7AB0A]/80 hover:bg-[#F7AB0A] transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg"
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
					className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
				scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
				>
					{experiences?.sort((a, b) => (b.dateStarted > a.dateStarted ? 1 : -1)).map((experience) => (
						<ExperienceCard key={experience._id} experience={experience} />
					))}
				</div>

				{/* Right Arrow */}
				{canScrollRight && isHovering && (
					<button
						type="button"
						onClick={() => scroll('right')}
						className="absolute right-2 sm:right-5 z-50 bg-[#F7AB0A]/80 hover:bg-[#F7AB0A] transition-all duration-200 rounded-full p-2 sm:p-3 shadow-lg"
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
			</div>
		</motion.div>
	);
};

export default WorkExperience;
