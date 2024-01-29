import { format } from 'date-fns';

import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

import { GradientText } from '../GradientText';
import { ProjectTag } from '../ProjectCard/ProjectTag';

type IProjectHeaderProps = {
  content: IFrontmatterProject;
  path: string;
};

const ProjectHeader = (props: IProjectHeaderProps) => (
  <>
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">
        Project: <GradientText>{props.content.projectName}</GradientText>
      </h1>

      {/* Description */}
      <div className="mt-2 flex w-3/4 flex-col items-center">
        <div className="text-center text-gray-400">
          {props.content.description}
        </div>
      </div>

      <div className="mt-4 flex w-4/5 flex-col items-center gap-2 rounded-lg border bg-cod-900 p-4 text-center text-base md:w-[70ch] md:flex-row">
        {/* Start Date */}
        <div className="mt-2 flex w-full justify-between md:w-1/5 md:flex-col md:gap-2">
          <span className="self-center">Started: </span>
          <div className="text-gray-400">
            {format(new Date(props.content.startDate), 'LLL dd, yyyy')}
          </div>
        </div>

        {/* Language */}
        <div className="flex w-full items-center justify-between md:w-1/5 md:flex-col md:gap-2">
          <span className="self-center">Language: </span>
          <div className="w-fit">
            <ProjectTag key="lang">{props.content.language}</ProjectTag>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex w-full items-center justify-between md:w-1/5 md:flex-col md:gap-2">
          <span className="">Tech Stack: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.content.techStack.map((elt) => (
              <ProjectTag key={elt}>{elt}</ProjectTag>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className="flex gap-2 md:w-1/5 md:flex-col">
          <span className="self-center">Platform: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.content.platform.map((elt) => (
              <ProjectTag key={elt}>{elt}</ProjectTag>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center pt-1 transition-all duration-150 hover:scale-105 md:w-1/5">
          <a
            href={props.content.github}
            className="flex w-fit flex-row items-center gap-1 rounded-md px-1 py-0.5 outline outline-1"
          >
            <img className="h-8" src="/images/site/dark-github.png" />
            <span className="font-mono">{'<src/>'}</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

export { ProjectHeader };
