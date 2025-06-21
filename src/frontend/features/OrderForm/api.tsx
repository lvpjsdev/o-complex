import { OrderRequest } from '@/types';

export const createOrder = async (order: OrderRequest) => {
  const response = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  return response.json();
};
