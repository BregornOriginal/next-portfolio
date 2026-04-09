// Next.js API route

import type { NextApiRequest, NextApiResponse } from 'next';
import { skillsQuery } from '../../lib/queries';
import { sanityClient } from '../../sanity';
import { Skill } from '../../typings';

type Data = {
	skills: Skill[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const skills: Skill[] = await sanityClient.fetch(skillsQuery);

	res.status(200).json({ skills });
}
