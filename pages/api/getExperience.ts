// Next.js API route

import type { NextApiRequest, NextApiResponse } from 'next';
import { experiencesQuery } from '../../lib/queries';
import { sanityClient } from '../../sanity';
import { Experience } from '../../typings';

type Data = {
	experiences: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const experiences: Experience[] = await sanityClient.fetch(experiencesQuery);

	res.status(200).json({ experiences });
}
