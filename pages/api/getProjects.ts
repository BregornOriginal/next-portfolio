// Next.js API route

import type { NextApiRequest, NextApiResponse } from 'next';
import { projectsQuery } from '../../lib/queries';
import { sanityClient } from '../../sanity';
import { Project } from '../../typings';

type Data = {
	projects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const projects: Project[] = await sanityClient.fetch(projectsQuery);

	res.status(200).json({ projects });
}
