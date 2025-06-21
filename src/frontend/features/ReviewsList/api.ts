'use server';
import { Review } from '@/types';
import { getBaseUrl } from '@/utils';

export const reviewsPromise = async (): Promise<Review[]> => {
  const baseUrl = await getBaseUrl();

  const response = await fetch(`${baseUrl}/api/reviews/`);
  return response.json();
};
