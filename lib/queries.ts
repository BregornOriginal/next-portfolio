import { groq } from 'next-sanity';

export const pageInfoQuery = groq`
	*[_type == "pageInfo"][0]
`;

export const experiencesQuery = groq`
	*[_type == "experience"] {
		...,
		technologies[]->
	}
`;

export const projectsQuery = groq`
	*[_type == "project"] {
		...,
		technologies[]->
	}
`;

export const skillsQuery = groq`
	*[_type == "skill"]
`;

export const socialsQuery = groq`
	*[_type == "social"]
`;
