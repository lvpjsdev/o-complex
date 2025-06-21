import { OrderForm } from '@/frontend/features/OrderForm';
import { ProductsList } from '@/frontend/features/ProductsList';
import { ReviewList } from '@/frontend/features/ReviewsList';
import { Title } from '@/frontend/ui/Title';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1442px] px-4 py-3.5 sm:px-6 md:py-14 lg:px-8">
      <header className="mb-[105px]">
        <Title>тестовое задание</Title>
      </header>
      <main className="flex flex-col items-center space-y-8">
        <ReviewList />
        <div className="w-full pt-40 pb-12 md:pt-60">
          <div className="flex justify-center">
            <OrderForm />
          </div>
        </div>
        <ProductsList />
      </main>
    </div>
  );
}
