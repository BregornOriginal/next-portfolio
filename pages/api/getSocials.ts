// Next.js API route

import type { NextApiRequest, NextApiResponse } from 'next';
import { socialsQuery } from '../../lib/queries';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

type Data = {
	socials: Social[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const socials: Social[] = await sanityClient.fetch(socialsQuery);

	res.status(200).json({ socials });
}
