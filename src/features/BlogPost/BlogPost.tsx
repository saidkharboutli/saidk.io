import type { CollectionEntry } from 'astro:content';
import type { ReactNode } from 'react';

import { BlogSection } from '@/features/BlogPost/components/BlogSection';
import { PostContent } from '@/features/BlogPost/components/PostContent';
import { PostFooter } from '@/features/BlogPost/components/PostFooter';
import { PostHeader } from '@/features/BlogPost/components/PostHeader';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  blogData: CollectionEntry<'blog'>['data'];
  slug: string;
  prevNextInSeries: {
    previous: CollectionEntry<'blog'> | null;
    next: CollectionEntry<'blog'> | null;
  };
  children: ReactNode;
  toc?: ReactNode /* Table of Contents Astro Component */;
  views?: ReactNode /* BlogViewCounter Astro Component */;
};

const BlogPost = (props: IBlogPostProps) => (
  <BlogSection>
    <PostHeader
      content={props.blogData}
      author={AppConfig.author}
      views={props.views}
      slug={props.slug}
    />

    <PostContent toc={props.toc} content={props.blogData}>
      {props.children}
    </PostContent>

    <PostFooter
      content={props.blogData}
      author={AppConfig.author}
      prevNextInSeries={props.prevNextInSeries}
    />
  </BlogSection>
);

export { BlogPost };
