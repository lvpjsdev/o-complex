import { Suspense, use } from 'react';
import { Review } from '../../../types';
import { Card } from '@/frontend/ui/Card';
import { reviewsPromise } from './api';

interface Props {
  reviewsPromise: Promise<Review[]>;
}

const List = ({ reviewsPromise }: Props) => {
  const review = use(reviewsPromise);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-9">
      {review?.map(({ id, text }) => (
        <Card dangerouslySetInnerHTML={{ __html: text }} key={id} />
      ))}
    </div>
  );
};

export const ReviewList = () => {
  return (
    <Suspense fallback={<p>LOADING!!!</p>}>
      <List reviewsPromise={reviewsPromise()} />
    </Suspense>
  );
};
