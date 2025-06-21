import { Product } from '@/types';
import { createStore as baseCreateStore } from 'zustand/vanilla';

export type State = {
  cart: {
    items: { id: number; title: string; quantity: number; price: number }[];
    total: number;
  };
};

export type Actions = {
  setToCart: (product: Product, quantity: number) => void;
};

export type Store = State & Actions;

export const defaultInitState: State = {
  cart: {
    items: [],
    total: 0,
  },
};

export const createStore = (initState: State = defaultInitState) => {
  return baseCreateStore<Store>()((set) => ({
    ...initState,
    setToCart: (product, quantity) =>
      set((state) => {
        if (quantity < 0) return state;
        const item = state.cart.items.find((item) => item.id === product.id);

        if (item) {
          item.quantity = quantity;
        } else {
          state.cart.items.push({
            id: product.id,
            title: product.title,
            quantity,
            price: product.price,
          });
        }

        state.cart.total = state.cart.items.reduce((acc, item) => {
          return acc + item.quantity * item.price;
        }, 0);

        return {
          cart: {
            ...state.cart,
            items: [...state.cart.items],
            total: state.cart.total,
          },
        };
      }),
  }));
};
