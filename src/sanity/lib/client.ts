import { createClient } from 'next-sanity';

// Replace with your project ID and dataset
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Sanity project ID
  dataset: 'production',       // Sanity dataset name
  apiVersion: '2023-01-01',      // Specify the API version (latest or the one you are using)
  useCdn: true  ,
  token:process.env.Next_TOkEN               // true for edge-cached CDN (faster), false for live API (costlier)
});

export default client;
