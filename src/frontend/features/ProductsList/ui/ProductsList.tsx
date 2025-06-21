'use client';

import { Product } from '@/types';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getProducts } from '../api';
import { ProductItem } from './ProductItem';

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(0);
  const hasNextPage = useRef(false);
  const initialized = useRef(false);

  const getMoreProducts = useCallback(async () => {
    if (!hasNextPage || loading || !initialized.current) return;
    setLoading(true);
    const data = await getProducts(page.current + 1);

    setProducts((prevUsers) => [...prevUsers, ...data.data]);
    hasNextPage.current = data.hasNextPage;
    page.current = page.current + 1;
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getMoreProducts();
    }
  }, [getMoreProducts]);

  useEffect(() => {
    const handleScroll = () => {
      const richLoadingPoint =
        window.innerHeight +
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) >
        document.documentElement.offsetHeight - 500;

      if (richLoadingPoint && hasNextPage.current && !loading) {
        getMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, getMoreProducts]);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-9">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {loading && <div>Loading...</div>}
    </div>
  );
};
