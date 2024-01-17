import type { ReactNode } from 'react';

import { PostContent } from '@/components/Post/PostContent';
import { PostFooter } from '@/components/Post/PostFooter';
import { PostHeader } from '@/components/Post/PostHeader';
import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
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
