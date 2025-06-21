import { Product } from '@/types';
import { createStore as baseCreateStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';

export type State = {
  telephone: string;
  cart: {
    items: { id: number; title: string; quantity: number; price: number }[];
    total: number;
  };
};

export type Actions = {
  setToCart: (product: Product, quantity: number) => void;
  setTelephone: (telephone: string) => void;
};

export type Store = State & Actions;

export const defaultInitState: State = {
  telephone: '',
  cart: {
    items: [],
    total: 0,
  },
};

export const createStore = (initState: State = defaultInitState) => {
  return baseCreateStore<Store>()(
    persist(
      (set) => ({
        ...initState,
        setToCart: (product, quantity) =>
          set((state) => {
            if (quantity < 0) return state;
            const item = state.cart.items.find(
              (item) => item.id === product.id
            );

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
        setTelephone: (telephone) =>
          set((state) => ({
            ...state,
            telephone,
          })),
      }),
      {
        name: 'cart',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
