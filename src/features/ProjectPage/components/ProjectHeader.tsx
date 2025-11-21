import type { CollectionEntry } from 'astro:content';

import { ProjectIcon } from '@/features/ProjectViews/components/ProjectIcon';
import { ProjectTag } from '@/features/ProjectViews/components/ProjectTag';
import { GradientText } from '@/features/shared/GradientText';
import { formatDate } from '@/utils/helpers';

type IProjectHeaderProps = {
  projectData: CollectionEntry<'projects'>['data'];
  path: string;
};

const ProjectHeader = (props: IProjectHeaderProps) => (
  <>
    <div className="flex flex-col items-center gap-2 md:gap-3">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">
        Project: <GradientText>{props.projectData.projectName}</GradientText>
      </h1>

      {/* Status */}
      <div className="text-base">
        <ProjectTag key="status">{props.projectData.status}</ProjectTag>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center md:w-[70ch]">
        <div className="text-center text-gray-400">{props.projectData.description}</div>
      </div>

      <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-cod-800 bg-cod-900 px-2 py-4 text-center text-base md:w-[70ch] md:flex-row">
        {/* Start Date */}
        <div className="flex w-full justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="self-center">Started: </span>
          <div className="text-gray-400 md:h-8">{formatDate(props.projectData.startDate)}</div>
        </div>

        {/* Language */}
        <div className="flex w-full items-center justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="self-center">Language: </span>
          <div className="w-fit text-xs">
            <ProjectIcon key="lang">{props.projectData.language}</ProjectIcon>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex w-full items-center justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="">Tech Stack: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.projectData.techStack.map((tech) => (
              <ProjectIcon key={tech}>{tech}</ProjectIcon>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className="flex w-full justify-between gap-2 md:w-2/5 md:flex-col">
          <span className="self-center">Platform: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.projectData.platforms.map((platform) => (
              <ProjectIcon key={platform}>{platform}</ProjectIcon>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center pt-1 transition-all duration-300 hover:scale-110 md:w-1/5">
          <a
            href={props.projectData.github}
            className="flex w-fit items-center gap-2 rounded-md p-1 outline outline-1 md:flex-col md:gap-1 md:outline-transparent"
          >
            <img className="h-6" src="/images/site/dark-github.png" />
            <span className="font-mono">{'<src/>'}</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

export { ProjectHeader };
