import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/frontend/ui/Button';
import { Card } from '@/frontend/ui/Card';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export const ProductItem: FC<Props> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
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
        <Button className="mx-auto">Купить</Button>
      </div>
    </Card>
  );
};
