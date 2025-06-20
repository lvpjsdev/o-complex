import { ReviewList } from '@/frontend/features/ReviewsList';
import { Title } from '@/frontend/ui/Title';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1442px] py-14">
      <header className="mb-[105px]">
        <Title>тестовое задание</Title>
      </header>
      <main>
        <ReviewList />
      </main>
    </div>
  );
}
