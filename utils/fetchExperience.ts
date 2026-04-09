import { experiencesQuery } from '../lib/queries';
import { sanityClient } from '../sanity';
import { Experience } from '../typings';

export const fetchExperiences = async () => {
	const experiences: Experience[] = await sanityClient.fetch(experiencesQuery);

	// console.log('fetching', experiences);

	return experiences;
};
