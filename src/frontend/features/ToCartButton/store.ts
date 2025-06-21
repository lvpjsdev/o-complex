import { useCartStore } from '@/frontend/store';
import { Product } from '@/types';

export const useProductQuantity = (product: Product) => {
  const { id: productId } = product;
  const quantity = useCartStore(
    (state) =>
      state.cart.items.find((item) => item.id === productId)?.quantity || 0
  );
  const setQuantity = useCartStore((state) => state.setToCart);

  return { quantity, setQuantity };
};
