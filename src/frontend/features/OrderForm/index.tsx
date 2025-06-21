'use client';

import { useCartStore } from '@/frontend/store';
import { Button } from '@/frontend/ui/Button';
import { Card } from '@/frontend/ui/Card';
import { MaskedInput } from './MaskedInput';
import { useState } from 'react';
import { createOrder } from './api';
import { toast } from 'sonner';

export const OrderForm = () => {
  const [hasError, setHasError] = useState(false);
  const orderedProducts = useCartStore((state) => state.cart);
  const telephone = useCartStore((state) => state.telephone);
  const setTelephone = useCartStore((state) => state.setTelephone);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleOrder = async () => {
    const phone = telephone.replace(/[^\d]/g, '');

    if (phone.length !== 11) {
      setHasError(true);
      return;
    }

    const res = await createOrder({
      phone,
      cart: orderedProducts.items.map(({ id, quantity }) => ({ id, quantity })),
    });

    if (res.success) {
      toast.success('Заказ успешно оформлен');
      setTelephone('');
      clearCart();
    } else {
      toast.error(res.error);
    }
  };

  const onBlur = () => {
    setHasError(false);
  };

  return (
    <Card className="w-full max-w-[708px]">
      <h3>Добавленные товары</h3>
      <table className="text-2xl">
        <tbody>
          {orderedProducts.items
            .filter(({ quantity }) => quantity)
            .map((order) => (
              <tr key={order.id}>
                <td>{order.title}</td>
                <td className="pl-3">x{order.quantity}</td>
                <td className="pl-3">{order.price * order.quantity}₽</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex w-full flex-row gap-4">
        <div className="min-w-0 flex-1">
          <MaskedInput
            value={telephone}
            onChange={setTelephone}
            hasError={hasError}
            onBlur={onBlur}
          />
        </div>
        <Button className="flex-shrink-0" onClick={handleOrder}>
          заказать
        </Button>
      </div>
    </Card>
  );
};
