import { pageInfoQuery } from '../lib/queries';
import { sanityClient } from '../sanity';
import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
	const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

	// console.log('fetching', pageInfo);

	return pageInfo;
};
