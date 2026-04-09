import { skillsQuery } from '../lib/queries';
import { sanityClient } from '../sanity';
import { Skill } from '../typings';

export const fetchSkills = async () => {
	const skills: Skill[] = await sanityClient.fetch(skillsQuery);

	// console.log('fetching', skills);

	return skills;
};
