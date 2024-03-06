/* eslint-disable no-useless-escape */
/*
  Thanks to https://github.com/littlesticks/astro-101
*/

import type { MarkdownHeading, MarkdownInstance } from 'astro';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';
import type { IFrontMatterReview } from '@/types/IFrontMatterReview';
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

export const sortProjectsByDate = (
  posts: MarkdownInstance<IFrontMatterProject>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.startDate).valueOf() -
      new Date(a.frontmatter.startDate).valueOf(),
  );
};

export const sortPostsByDate = (
  posts: MarkdownInstance<IFrontMatterPost>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf(),
  );
};

export const sortReviewsByReleaseDate = (
  posts: MarkdownInstance<IFrontMatterReview>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.releaseDate).valueOf() -
      new Date(a.frontmatter.releaseDate).valueOf(),
  );
};

export const sortReviewsByReviewDate = (
  posts: MarkdownInstance<IFrontMatterReview>[],
) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.reviewDate).valueOf() -
      new Date(a.frontmatter.reviewDate).valueOf(),
  );
};

export const sortReviewsByRating = (
  posts: MarkdownInstance<IFrontMatterReview>[],
) => {
  return posts.sort(
    (a, b) => Number(b.frontmatter.rating) - Number(a.frontmatter.rating),
  );
};

export const filterPostDrafts = (
  posts: MarkdownInstance<IFrontMatterPost>[],
) => {
  if (import.meta.env.PROD)
    return posts.filter(
      (post) => !post.frontmatter?.draft && post.frontmatter.pubDate,
    );
  return posts;
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

export function tagDataFromString(tags: string) {
  const tagData: ITagData[] = [];
  tags.split(', ').forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
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

export function formatDate(date: string) {
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

  let dt;
  let draft = false;
  try {
    dt = new Date(date.split('T')[0]);
  } catch (err) {
    console.error(`WARNING: Date '${date}' is bad for a post: `, err);
    console.log('Setting data to current date...');
    dt = new Date();
    draft = true;
  }

  const year = dt.getUTCFullYear();
  const month = months[dt.getUTCMonth()];
  const day = dt.getUTCDate();

  return `${day.toString().padStart(2, '0')} ${month} ${year}${draft ? ' (Draft)' : ''}`;
}

function diveChildren(item: ITocItem, depth: number): ITocItem[] {
  if (depth === 1) return item.children;
  return diveChildren(item.children[item.children.length - 1], depth - 1);
}

export default function generateToc(
  headings: MarkdownHeading[],
  title = 'Back to Top ↑',
) {
  const overview = { depth: 2, slug: '', text: title };
  const filteredHeadings = [
    overview,
    ...headings.filter(({ depth }) => depth > 1 && depth < 5),
  ];
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
