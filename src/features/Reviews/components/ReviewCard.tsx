import type { MarkdownInstance } from 'astro';

import { SkillRankingCard } from '@/features/AboutMe/AboutMeSkills';
import { GradientText } from '@/features/shared/GradientText';
import type { IFrontMatterReview } from '@/types/IFrontMatterReview';
import {
  formatDate,
  getNameFromSlug,
  getReviewTypeFromUrl,
} from '@/utils/helpers';

interface IReviewCardProps {
  review: MarkdownInstance<IFrontMatterReview>;
}

const ReviewCard = (props: IReviewCardProps) => (
  <div className="flex w-full flex-col overflow-hidden rounded-md bg-cod-900 delay-150 duration-300 hover:scale-105 md:max-h-[242px] md:flex-row md:gap-1">
    <div className="flex items-center md:basis-1/4">
      <a href={props.review.frontmatter.link}>
        <img
          className="aspect-1 size-full rounded-t-md object-cover object-center hover:opacity-50 md:rounded-l-md md:rounded-t-none"
          src={props.review.frontmatter.imgSrc}
          alt={props.review.frontmatter.imgAlt}
          loading="lazy"
        />
      </a>
    </div>

    <div className="flex flex-col p-3 md:basis-1/4">
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

      {/* Review Date & Release Date */}
      <div className="mt-1 flex items-center gap-1 text-xs text-gray-400 md:flex-col md:items-start md:gap-0.5">
        <span>
          <span className="font-bold">Reviewed </span>
          {formatDate(props.review.frontmatter.reviewDate)}
        </span>
        <span className="md:hidden">&bull;</span>
        <span>
          {getReviewTypeFromUrl(props.review.url!) === 'books' ? (
            <span className="font-bold">Published </span>
          ) : (
            <span className="font-bold">Released </span>
          )}
          {formatDate(props.review.frontmatter.releaseDate)}
        </span>
      </div>

      {/* Media Genre(s) */}
      <div className="mt-0.5 flex flex-col text-xs">
        <span className="text-sm font-bold">
          {getReviewTypeFromUrl(props.review.url!) === 'products'
            ? 'Product Type(s)'
            : 'Genre(s)'}
        </span>
        <div className="mt-1 flex flex-wrap gap-1">
          {props.review.frontmatter.typeOrGenre.map((item) => (
            <span
              className="w-fit rounded-md bg-cod-700 px-1.5 py-0.5 outline outline-1 outline-cod-400 transition-all duration-150 hover:bg-violet-400 hover:outline-violet-200 hover:scale-105"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Ranking (out of 100) */}
      <div className="flex items-end justify-between">
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

    <div className="flex flex-col gap-2 px-3 pb-3 md:basis-1/2 md:pt-3">
      {/* Review */}
      <div className="text-sm text-gray-300">
        {props.review.frontmatter.review}
      </div>

      {/* Album Only: Favorite Song(s) */}
      {getReviewTypeFromUrl(props.review.url!) === 'albums' && (
        <div className="flex flex-col gap-1 text-xs">
          <div className="font-bold">Favorite Song(s)</div>
          <div className="flex flex-row gap-1">
            {props.review.frontmatter.favoriteSongs.map((song) => (
              <span
                className="w-fit rounded-md bg-cod-700 px-1.5 py-0.5 outline outline-1 outline-cod-400 transition-all duration-150 hover:bg-violet-400 hover:outline-violet-200 hover:scale-105"
                key={song}
              >
                {song}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* If You Liked (conditional) */}
      {props.review.frontmatter.ifYouLiked && (
        <div className="mt-1 flex text-xs text-gray-400">
          <span className="align-middle">
            If you liked this, you might also like{' '}
            <GradientText>{props.review.frontmatter.ifYouLiked}</GradientText>
          </span>
        </div>
      )}
    </div>
  </div>
);

export { ReviewCard };
