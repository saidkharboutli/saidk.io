import type { ReactNode } from 'react';

import { PostContent } from '@/components/BlogPost/PostContent';
import { PostFooter } from '@/components/BlogPost/PostFooter';
import { PostHeader } from '@/components/BlogPost/PostHeader';
import { Section } from '@/components/Section';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontMatterPost;
  path: string;
  prevNextInSeries: any;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader
      content={props.frontmatter}
      author={AppConfig.author}
      path={props.path}
    />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>

    <PostFooter
      content={props.frontmatter}
      author={AppConfig.author}
      path={props.path}
      prevNextInSeries={props.prevNextInSeries}
    />
  </Section>
);

export { BlogPost };
