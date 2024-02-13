import type { ReactNode } from 'react';

import { BlogSection } from '@/features/BlogPost/components/BlogSection';
import { PostContent } from '@/features/BlogPost/components/PostContent';
import { PostFooter } from '@/features/BlogPost/components/PostFooter';
import { PostHeader } from '@/features/BlogPost/components/PostHeader';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontMatterPost;
  path: string;
  prevNextInSeries: any;
  children: ReactNode;
  toc?: ReactNode /* Table of Contents Astro Component */;
};

const BlogPost = (props: IBlogPostProps) => (
  <BlogSection>
    <PostHeader
      content={props.frontmatter}
      author={AppConfig.author}
      path={props.path}
    />

    <PostContent toc={props.toc} content={props.frontmatter}>
      {props.children}
    </PostContent>

    <PostFooter
      content={props.frontmatter}
      author={AppConfig.author}
      path={props.path}
      prevNextInSeries={props.prevNextInSeries}
    />
  </BlogSection>
);

export { BlogPost };
