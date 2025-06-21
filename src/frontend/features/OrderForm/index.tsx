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
      toast.success(<p className="text-xl">Заказ успешно оформлен</p>);
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
    <Card className="w-full max-w-[330px] p-2.5! md:max-w-[690px]">
      <h3 className="text-center text-4xl">Добавленные товары</h3>
      <table className="mt-6 mb-2.5 w-full text-2xl">
        <tbody>
          {orderedProducts.items
            .filter(({ quantity }) => quantity)
            .map((order) => (
              <tr key={order.id}>
                <td className="max-w-40 truncate pr-3">{order.title}</td>
                <td className="pl-3 whitespace-nowrap">x{order.quantity}</td>
                <td className="pl-3 whitespace-nowrap">
                  {order.price * order.quantity}₽
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="">
          <MaskedInput
            value={telephone}
            onChange={setTelephone}
            hasError={hasError}
            onBlur={onBlur}
          />
        </div>
        <Button className="flex-1 flex-shrink-0" onClick={handleOrder}>
          заказать
        </Button>
      </div>
    </Card>
  );
};
