import { headers } from 'next/headers';

export const getBaseUrl = async () => {
  if (typeof window !== 'undefined') return '';

  const vc = process.env.VERCEL_URL;
  if (vc) return `https://${vc}`;

  const host = (await headers()).get('host');
  const protocol = process?.env.NODE_ENV === 'development' ? 'http' : 'https';

  return `${protocol}://${host}`;
};
