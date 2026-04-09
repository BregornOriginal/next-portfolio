// Next.js API route

import type { NextApiRequest, NextApiResponse } from 'next';
import { pageInfoQuery } from '../../lib/queries';
import { sanityClient } from '../../sanity';
import { PageInfo } from '../../typings';

type Data = {
	pageInfo: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

	res.status(200).json({ pageInfo });
}
