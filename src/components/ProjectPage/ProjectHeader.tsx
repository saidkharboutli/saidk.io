import { format } from 'date-fns';

import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

type IProjectHeaderProps = {
  content: IFrontmatterProject;
  path: string;
};

const ProjectHeader = (props: IProjectHeaderProps) => (
  <>
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">
        {props.content.projectName}
      </h1>

      {/* Upload Details */}
      <div className="mt-4 flex flex-row items-center">
        <div className=" ml-4 text-left text-sm text-gray-400">
          {format(new Date(props.content.startDate), 'LLL d, yyyy')}
        </div>
      </div>

      {/*
        To Add:
        - Language
        - Tech Stack
        - Repo Link
      */}
    </div>
  </>
);

export { ProjectHeader };
