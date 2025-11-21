/*
  Thanks to https://github.com/littlesticks/astro-101
*/

import type { MarkdownHeading } from 'astro';
import type { CollectionEntry } from 'astro:content';

import type { ITocItem } from '@/types/ITocItem';

type ITagData = {
  name: string;
  slug: string;
};

function titleCase(str: string) {
  return str
    .toLowerCase()
    .replaceAll('tv', 'TV')
    .split(' ')
    .map((word) => {
      return word.replace(word[0]!, word[0]!.toUpperCase());
    })
    .join(' ');
}

// export const sortProjectsByDate = (posts: CollectionEntry<'projects'>[]) => {
//   return posts.sort(
//     (a, b) => new Date(b.data.startDate).valueOf() - new Date(a.data.startDate).valueOf()
//   );
// };

// export const sortPostsByDate = (posts: CollectionEntry<'blog'>[]) => {
//   return posts.sort(
//     (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
//   );
// };

export const sortReviewsByReleaseDate = (posts: CollectionEntry<'reviews'>[]) => {
  return posts.sort(
    (a, b) => new Date(b.data.releaseDate).valueOf() - new Date(a.data.releaseDate).valueOf()
  );
};

export const sortReviewsByReviewDate = (posts: CollectionEntry<'reviews'>[]) => {
  return posts.sort(
    (a, b) => new Date(b.data.reviewDate).valueOf() - new Date(a.data.reviewDate).valueOf()
  );
};

export const sortReviewsByRating = (posts: CollectionEntry<'reviews'>[]) => {
  return posts.sort((a, b) => Number(b.data.rating) - Number(a.data.rating));
};

export function generateSlug(baseStr: string) {
  return baseStr
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getNameFromSlug(slug: string) {
  return titleCase(slug.replaceAll('-', ' ').replaceAll('and', '&'));
}

export function tagDataFromArr(tags: string[] | Set<string>) {
  const tagData: ITagData[] = [];
  tags.forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
}

export function getTopicFromUrl(url: string) {
  const slugs = url.split('/');
  return slugs[
    slugs.findIndex((path) => {
      return path === 'topics';
    }) + 1
  ];
}

export function getReviewTypeFromUrl(url: string) {
  const slugs = url.split('/');
  return slugs[
    slugs.findIndex((path) => {
      return path === 'reviews';
    }) + 1
  ];
}

export function formatDate(date: Date, draft = false) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const year = date.getUTCFullYear();
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();

  return `${day.toString().padStart(2, '0')} ${month} ${year}${draft ? ' (Draft)' : ''}`;
}

function diveChildren(item: ITocItem, depth: number): ITocItem[] {
  if (depth === 1) return item.children;
  return diveChildren(item.children[item.children.length - 1], depth - 1);
}

export default function generateToc(headings: MarkdownHeading[], title = 'Back to Top ↑') {
  const overview = { depth: 2, slug: '', text: title };
  const filteredHeadings = [overview, ...headings.filter(({ depth }) => depth > 1 && depth < 5)];
  const toc: Array<ITocItem> = [];

  filteredHeadings.forEach((heading) => {
    if (toc.length === 0) {
      toc.push({
        ...heading,
        children: [],
      });
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      if (heading.depth === lastItemInToc.depth) {
        toc.push({
          ...heading,
          children: [],
        });
      } else {
        const gap = heading.depth - lastItemInToc.depth;
        const target = diveChildren(lastItemInToc, gap);
        target.push({
          ...heading,
          children: [],
        });
      }
    }
  });

  return toc;
}
