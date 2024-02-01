import type { MarkdownInstance } from 'astro';

import type { IFrontMatterReview } from '@/types/IFrontMatterReview';

import { ReviewCard } from './ReviewCard';

type IReviewGalleryProps = {
  reviews: MarkdownInstance<IFrontMatterReview>[];
};

const ReviewGallery = (props: IReviewGalleryProps) => (
  <div className="flex flex-col gap-6">
    {props.reviews.map((review) => (
      <ReviewCard review={review} />
    ))}
  </div>
);

export { ReviewGallery };
