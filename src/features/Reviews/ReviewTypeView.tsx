import type { CollectionEntry } from 'astro:content';

import { ReviewGallery } from '@/features/Reviews/ReviewGallery';
import { GradientText } from '@/features/shared/GradientText';
import { getNameFromSlug } from '@/utils/helpers';

type IReviewTypeViewProps = {
  typeData: {
    type: string;
    reviews: CollectionEntry<'reviews'>[];
  }[];
};

const ReviewTypeView = (props: IReviewTypeViewProps) => (
  <div className="mx-auto flex max-w-screen-lg flex-row flex-wrap justify-center gap-3 py-4 text-2xl">
    {props.typeData &&
      props.typeData
        .sort((a, b) => a.type.localeCompare(b.type))
        .map((typeDatum) => (
          <div key={typeDatum.type} className="flex flex-col pb-8">
            <div className="flex flex-row">
              <div className="flex w-1/2">
                <a
                  href={`/reviews/${typeDatum.type}/`}
                  className="px-1.5 py-0.5 font-bold transition-all duration-150 hover:scale-110"
                >
                  <GradientText>{getNameFromSlug(typeDatum.type)}</GradientText>
                </a>
              </div>
              <div className="flex w-1/2 items-end justify-end gap-1">
                <span className="text-xs">
                  ({typeDatum.reviews.slice(0, 3).length} of {typeDatum.reviews.length})
                </span>
                <span className="text-sm">Latest ↓</span>
              </div>
            </div>
            <hr className="mt-0.5 pt-4"></hr>
            <ReviewGallery reviews={typeDatum.reviews.slice(0, 3)} />
          </div>
        ))}
  </div>
);

export { ReviewTypeView };
