import type { CollectionEntry } from 'astro:content';
import type { ReactNode } from 'react';

type IProjectContentProps = {
  projectData: CollectionEntry<'projects'>['data'];
  children: ReactNode;
};

const ProjectContent = (props: IProjectContentProps) => (
  <div className="mx-auto mt-5 max-w-[70ch]">
    <div className="aspect-h-2 aspect-w-3">
      <img
        className="size-full rounded-lg object-cover object-center"
        src={props.projectData.imgSrc}
        alt={props.projectData.imgAlt}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">{props.children}</div>
  </div>
);

export { ProjectContent };
