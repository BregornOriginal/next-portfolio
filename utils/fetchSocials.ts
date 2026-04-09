import { socialsQuery } from '../lib/queries';
import { sanityClient } from '../sanity';
import { Social } from '../typings';

export const fetchSocial = async () => {
	const socials: Social[] = await sanityClient.fetch(socialsQuery);

	// console.log('fetching', socials);

	return socials;
};
