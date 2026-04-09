import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
/** Public Sanity project (same as sanity-portfolio/sanity.json); override via env for forks/other datasets. */
const defaultSanityProjectId = 'gfy3x1sv';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || defaultSanityProjectId,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
