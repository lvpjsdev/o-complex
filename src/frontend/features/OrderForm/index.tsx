'use client';

import { useCartStore } from '@/frontend/store';
import { Button } from '@/frontend/ui/Button';
import { Card } from '@/frontend/ui/Card';
import { MaskedInput } from './MaskedInput';

export const OrderForm = () => {
  const orderedProducts = useCartStore((state) => state.cart);
  const telephone = useCartStore((state) => state.telephone);
  const setTelephone = useCartStore((state) => state.setTelephone);

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
          <MaskedInput value={telephone} onChange={setTelephone} />
        </div>
        <Button className="flex-shrink-0">заказать</Button>
      </div>
    </Card>
  );
};
