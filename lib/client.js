import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tokky08',
  apiKey: process.env.NEXT_PUBLIC_API_KEY
  // apiKey: process.env.API_KEY
});