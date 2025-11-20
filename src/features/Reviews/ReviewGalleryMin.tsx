import type { CollectionEntry } from 'astro:content';

import { ReviewCardMin } from './components/ReviewCardMin';

interface IReviewGalleryMinProps {
  reviews: CollectionEntry<'reviews'>[];
}

const ReviewGalleryMin = (props: IReviewGalleryMinProps) => {
  return (
    <div className="flex justify-center">
      <div className="mb-6 grid w-fit grid-cols-1 gap-6 md:grid-cols-3">
        {props.reviews.map((review) => (
          <ReviewCardMin key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export { ReviewGalleryMin };
