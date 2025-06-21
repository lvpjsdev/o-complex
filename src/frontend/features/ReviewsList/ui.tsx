import { use } from 'react';
import { Review } from '../../../types';
import { Card } from '@/frontend/ui/Card';
import { reviewsPromise } from './api';

interface Props {
  reviewsPromise: Promise<Review[]>;
}

const List = ({ reviewsPromise }: Props) => {
  const review = use(reviewsPromise);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-9">
      {review?.map(({ id, text }) => (
        <Card
          className="h-full w-full max-w-[455px] text-2xl md:min-h-[595px]"
          dangerouslySetInnerHTML={{ __html: text }}
          key={id}
        />
      ))}
    </div>
  );
};

export const ReviewList = () => {
  return <List reviewsPromise={reviewsPromise()} />;
};
