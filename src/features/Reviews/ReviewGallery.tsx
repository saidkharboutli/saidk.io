import type { MarkdownInstance } from 'astro';
import { useState } from 'react';

import type { IFrontMatterReview } from '@/types/IFrontMatterReview';
import {
  sortReviewsByRating,
  sortReviewsByReleaseDate,
  sortReviewsByReviewDate,
} from '@/utils/helpers';

import { ReviewCard } from './components/ReviewCard';

interface IReviewGalleryProps {
  sortAndLimit?: boolean;
  reviews: MarkdownInstance<IFrontMatterReview>[];
}

const ReviewGallery = (props: IReviewGalleryProps) => {
  let sorted = sortReviewsByReleaseDate(props.reviews);

  // Handle Sort Select Field
  const getInitialSelectState = () => {
    const selectValue = 'Review Date';
    return selectValue;
  };
  const [selectValue, setSelectValue] = useState(getInitialSelectState);
  const handleSelectChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  // Handle Fake "Pagination"
  const getInitialReviewCountState = () => {
    const reviewCount = 8;
    return reviewCount;
  };
  const [reviewCount, setReviewCount] = useState(getInitialReviewCountState);
  const handleLoadMoreClick = () => {
    if (reviewCount >= props.reviews.length) {
      return;
    }
    setReviewCount(reviewCount + 8);
  };

  if (props.sortAndLimit) {
    if (selectValue === 'Review Date') {
      sorted = sortReviewsByReviewDate(props.reviews);
    } else if (selectValue === 'Release Date') {
      sorted = sortReviewsByReleaseDate(props.reviews);
    } else if (selectValue === 'Rating') {
      sorted = sortReviewsByRating(props.reviews);
    }
    sorted = sorted.slice(0, reviewCount);
  }

  return (
    <div>
      {props.sortAndLimit === true && (
        <div className="mb-8 flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Sort By
          </label>
          <select
            id="sort"
            value={selectValue}
            onChange={handleSelectChange}
            className="block rounded-lg border border-cod-600 bg-cod-900 p-2.5 text-sm text-white focus:border-primary"
          >
            <option value="Review Date">Review Date (Latest First)</option>
            <option value="Release Date">Release Date (Latest First)</option>
            <option value="Rating">Rating (Highest First)</option>
          </select>
        </div>
      )}

      <div className="mb-6 flex flex-col gap-4">
        {sorted.map((review) => (
          <ReviewCard key={review.url} review={review} />
        ))}
      </div>

      {props.sortAndLimit === true && reviewCount < props.reviews.length && (
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <button
            onClick={handleLoadMoreClick}
            className="p-2.5 text-base font-semibold transition-all duration-300 hover:scale-110"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export { ReviewGallery };
