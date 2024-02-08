import type { ReactNode } from 'react';

import type { IFrontMatterPost } from '@/types/IFrontMatterPost';

type IPostContentProps = {
  content: IFrontMatterPost;
  children: ReactNode;
  toc?: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <div>
    {/* `props.toc` is the Table of Contents Astro component passed through */}
    {props.toc}

    {/* Below is the actual blog content */}
    <div className="mx-auto mt-5 max-w-[70ch]">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="size-full rounded-lg object-cover object-center"
          src={props.content.imgSrc}
          alt={props.content.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="prose prose-invert mt-8 prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-img:rounded-lg">
        <article>{props.children}</article>
      </div>
    </div>
  </div>
);

export { PostContent };
