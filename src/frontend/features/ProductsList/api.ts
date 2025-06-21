import { ApiResponse, Product } from '@/types';
import { getBaseUrl } from '@/utils';

export const getProducts = async (
  page = 1,
  pageSize = 10
): Promise<ApiResponse<Product[]>> => {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/products/?page=${page}&page_size=${pageSize}`;

  const response = await fetch(url);

  return response.json();
};
