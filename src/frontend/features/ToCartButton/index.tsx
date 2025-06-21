'use client';

import { Button } from '@/frontend/ui/Button';
import { Input } from '@/frontend/ui/Input';
import { Product } from '@/types';
import { FC, useCallback, useState } from 'react';
import { useProductQuantity } from './store';

interface Props {
  product: Product;
  className?: string;
}

export const ToCartButton: FC<Props> = ({ product, className = '' }) => {
  const { quantity, setQuantity } = useProductQuantity(product);
  const [active, setActive] = useState(false);

  const onChange = useCallback(
    (value: number) => {
      setQuantity(product, value);
    },
    //Если id не изменился, то и product так же не изменился
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setQuantity, product.id]
  );

  return (
    <div className={className}>
      {quantity === 0 && !active ? (
        <Button onClick={() => onChange(1)}>купить</Button>
      ) : (
        <div>
          <div className="flex flex-row gap-2">
            <Button
              style={{ width: '68px', height: '68px', padding: 0 }}
              className=""
              onClick={() => onChange(quantity + 1)}
            >
              +
            </Button>
            <div className="flex flex-1 overflow-hidden">
              <Input
                style={{ MozAppearance: 'textfield' }}
                name="quantity"
                className="bg-background text-foreground w-full rounded-2xl px-2 py-3 text-center text-4xl"
                min={0}
                value={String(quantity)}
                onChange={onChange}
                type="number"
                onBlur={() => setActive(false)}
                onFocus={() => setActive(true)}
              />
            </div>
            <Button
              style={{ width: '68px', height: '68px', padding: 0 }}
              onClick={() => onChange(quantity - 1)}
            >
              -
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
