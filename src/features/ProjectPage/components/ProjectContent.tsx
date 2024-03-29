import type { ReactNode } from 'react';

import type { IFrontMatterProject } from '@/types/IFrontMatterProject';

type IProjectContentProps = {
  content: IFrontMatterProject;
  children: ReactNode;
};

const ProjectContent = (props: IProjectContentProps) => (
  <div className="mx-auto mt-5 max-w-[70ch]">
    <div className="aspect-h-2 aspect-w-3">
      <img
        className="size-full rounded-lg object-cover object-center"
        src={props.content.imgSrc}
        alt={props.content.imgAlt}
        loading="lazy"
      />
    </div>

    <div className="prose prose-invert mt-8 prose-img:rounded-lg">
      {props.children}
    </div>
  </div>
);

export { ProjectContent };
