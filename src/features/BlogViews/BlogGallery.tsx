import type { CollectionEntry } from 'astro:content';

import { BlogCard } from './components/BlogCard';

type IRecentPostsProps = {
  postList: CollectionEntry<'blog'>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.id} post={elt} />
    ))}
  </div>
);

export { BlogGallery };
