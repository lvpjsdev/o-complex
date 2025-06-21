import { FC } from 'react';
import Image from 'next/image';
import { Card } from '@/frontend/ui/Card';
import { Product } from '@/types';
import { ToCartButton } from '../../ToCartButton';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const { image_url: imageUrl, title, description, price } = product || {};
  return (
    <Card width="300px" height="810px" className="flex flex-col">
      <Image
        src={imageUrl}
        alt={title}
        width={280}
        height={365}
        layout="responsive"
        objectFit="contain"
      />
      <div className="flex-1">
        <h3 className="my-3 text-center text-4xl">{title}</h3>
        <div className="max-h-32 overflow-y-auto text-2xl">{description}</div>
      </div>
      <div className="mt-auto mb-0 flex flex-1 flex-col justify-end">
        <p className="mb-2 mb-8 text-center text-4xl">цена: {price}₽</p>
        <ToCartButton className="mx-auto" product={product} key={product.id} />
      </div>
    </Card>
  );
};
