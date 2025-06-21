import { OrderRequest, OrderResponse } from '@/types';
import { toast } from 'sonner';

export const createOrder = async (
  order: OrderRequest
): Promise<OrderResponse> => {
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`${response.statusText || response}`);
    }
    return response.json();
  } catch (error) {
    toast.error(
      <p className="text-xl">{`Ошибка при оформлении заказа: ${(error as Error).message}`}</p>
    );
    throw error;
  }
};
