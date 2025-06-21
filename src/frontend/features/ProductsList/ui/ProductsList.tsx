'use client';

import { Product } from '@/types';
import { useEffect, useState, useRef } from 'react';
import { getProducts } from '../api';
import { ProductItem } from './ProductItem';
import { Loader } from '@/frontend/ui/Loader';
import { toast } from 'sonner';

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const hasNextPage = useRef(true);
  const initialized = useRef(false);
  const isLoadingRef = useRef(false);

  const getMoreProducts = async () => {
    if (isLoadingRef.current || !hasNextPage.current) {
      return;
    }

    isLoadingRef.current = true;
    setLoading(true);

    try {
      const data = await getProducts(page.current);

      setProducts((prevProducts) => [...prevProducts, ...data.data]);
      hasNextPage.current = data.hasNextPage;
      page.current = page.current + 1;
    } catch (error) {
      toast.error(
        <p className="text-xl">{`Ошибка загрузки товаров: ${(error as Error).message}`}</p>
      );
    } finally {
      isLoadingRef.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getMoreProducts();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition > documentHeight - 500) {
        getMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-9">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {loading && <Loader />}
    </div>
  );
};
