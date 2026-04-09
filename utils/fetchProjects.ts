import { projectsQuery } from '../lib/queries';
import { sanityClient } from '../sanity';
import { Project } from '../typings';

export const fetchProjects = async () => {
	const projects: Project[] = await sanityClient.fetch(projectsQuery);

	// console.log('fetching', projects);

	return projects;
};
