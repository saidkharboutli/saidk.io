import type { MarkdownInstance } from 'astro';

import type { IFrontMatterReview } from '@/types/IFrontMatterReview';

import { ReviewCardMin } from './components/ReviewCardMin';

interface IReviewGalleryMinProps {
  reviews: MarkdownInstance<IFrontMatterReview>[];
}

const ReviewGalleryMin = (props: IReviewGalleryMinProps) => {
  return (
    <div className="flex justify-center">
      <div className="mb-6 grid w-fit grid-cols-1 gap-6 md:grid-cols-3">
        {props.reviews.map((review) => (
          <ReviewCardMin key={review.url} review={review} />
        ))}
      </div>
    </div>
  );
};

export { ReviewGalleryMin };
