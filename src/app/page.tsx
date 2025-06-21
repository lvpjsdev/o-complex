import { OrderForm } from '@/frontend/features/OrderForm';
import { ProductsList } from '@/frontend/features/ProductsList';
import { ReviewList } from '@/frontend/features/ReviewsList';
import { Title } from '@/frontend/ui/Title';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1442px] py-14">
      <header className="mb-[105px]">
        <Title>тестовое задание</Title>
      </header>
      <main className="flex flex-col items-center">
        <ReviewList />
        <div className="pt-60 pb-12">
          <OrderForm />
        </div>
        <ProductsList />
      </main>
    </div>
  );
}
