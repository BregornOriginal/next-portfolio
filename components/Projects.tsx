import React from 'react';

type Props = {};

const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5];

	return (
		<div
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1">Projects</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      z-20"
			>
				{projects.map((project, i) => (
					<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          key={i}>
						<img
							src="https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/images/ezCar/ezCar.png"
							alt=""
						/>
            <div>
              <h4>
                Project {i + 1} of {projects.length}:
              </h4>
            </div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</div>
	);
};

export default Projects;
