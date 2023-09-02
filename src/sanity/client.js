import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8pt1vhkx',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-06-07',
  perspective: 'published',
  token: import.meta.env.VITE_SANITY_TOKEN,
});

export { client };
