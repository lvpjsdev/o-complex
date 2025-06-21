export type Review = {
  id: number;
  text: string;
};

export type Product = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
};

export type ComplexResponse<T> = {
  page: number;
  amount: number;
  total: number;
  items: T[];
};

export type ApiResponse<T> = {
  hasNextPage: boolean;
  data: T;
};

export type OrderRequest = {
  phone: string;
  cart: {
    id: number;
    quantity: number;
  }[];
};

export type OrderResponse = {
  success: number;
  error: string;
};
