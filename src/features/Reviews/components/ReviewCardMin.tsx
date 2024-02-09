import type { MarkdownInstance } from 'astro';

import { SkillRankingCard } from '@/features/AboutMe/AboutMeSkills';
import type { IFrontMatterReview } from '@/types/IFrontMatterReview';
import { getNameFromSlug, getReviewTypeFromUrl } from '@/utils/helpers';

interface IReviewCardProps {
  review: MarkdownInstance<IFrontMatterReview>;
}

const ReviewCardMin = (props: IReviewCardProps) => (
  <div className="flex w-full flex-col overflow-hidden rounded-md bg-cod-950 delay-150 duration-300 hover:scale-105">
    <div className="flex items-center justify-center">
      <a href={props.review.frontmatter.link}>
        <img
          className="aspect-1 size-full rounded-md object-cover object-center hover:opacity-50 md:h-[250px]"
          src={props.review.frontmatter.imgSrc}
          alt={props.review.frontmatter.imgAlt}
          loading="lazy"
        />
      </a>
    </div>

    <div className="flex flex-col items-center p-3">
      {/* Review Type */}
      <div>
        <h2 className="text-sm font-semibold text-indigo-400 hover:text-slate-200">
          <a
            className="hover:translate-y-1"
            href={`/reviews/${getReviewTypeFromUrl(props.review.url!)}/`}
          >
            {getNameFromSlug(getReviewTypeFromUrl(props.review.url!)!)}
          </a>
        </h2>
      </div>

      {/* Media Name */}
      <div>
        <h2 className="text-xl font-semibold hover:text-violet-300">
          <a href={props.review.frontmatter.link}>
            {props.review.frontmatter.name}
          </a>
        </h2>
      </div>

      {/* Album & Book Only: Author/Artist */}
      {(getReviewTypeFromUrl(props.review.url!) === 'albums' ||
        getReviewTypeFromUrl(props.review.url!) === 'books') && (
        <span className="text-base font-bold">
          {props.review.frontmatter.artistOrAuthor}
        </span>
      )}

      {/* Ranking (out of 100) */}
      <div className="flex items-end gap-8">
        <div className="mt-2 text-base">
          <span className="font-bold">Rating </span>
          <SkillRankingCard
            skill={`${props.review.frontmatter.rating}`}
            level={Math.floor(props.review.frontmatter.rating / 40)}
          />
        </div>

        {/* Spotify/Amazon/Goodreads/IMDb Links */}
        {props.review.frontmatter.link && (
          <div className="">
            <a href={props.review.frontmatter.link}>
              <img
                className="size-8 rounded-md text-sm delay-200 duration-200 hover:scale-110"
                src={`/images/site/${(() => {
                  switch (getReviewTypeFromUrl(props.review.url!)) {
                    case 'albums':
                      return 'spotify';
                    case 'books':
                      return 'goodreads';
                    case 'products':
                      return 'amazon';
                    case 'games':
                      return 'steam';
                    default:
                      return 'imdb';
                  }
                })()}.svg`}
                alt="Media Link Logo"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export { ReviewCardMin };
