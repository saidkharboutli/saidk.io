import { ProjectIcon } from '@/features/ProjectViews/components/ProjectIcon';
import { ProjectTag } from '@/features/ProjectViews/components/ProjectTag';
import { GradientText } from '@/features/shared/GradientText';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';
import { formatDate } from '@/utils/helpers';

type IProjectHeaderProps = {
  content: IFrontMatterProject;
  path: string;
};

const ProjectHeader = (props: IProjectHeaderProps) => (
  <>
    <div className="flex flex-col items-center gap-2 md:gap-3">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold">
        Project: <GradientText>{props.content.projectName}</GradientText>
      </h1>

      {/* Status */}
      <div className="text-base">
        <ProjectTag key="status">{props.content.status}</ProjectTag>
      </div>

      {/* Description */}
      <div className="flex flex-col items-center md:w-[70ch]">
        <div className="text-center text-gray-400">
          {props.content.description}
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2 rounded-lg border border-cod-800 bg-cod-900 px-2 py-4 text-center text-base md:w-[70ch] md:flex-row">
        {/* Start Date */}
        <div className="flex w-full justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="self-center">Started: </span>
          <div className="text-gray-400 md:h-8">
            {formatDate(props.content.startDate)}
          </div>
        </div>

        {/* Language */}
        <div className="flex w-full items-center justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="self-center">Language: </span>
          <div className="w-fit text-xs">
            <ProjectIcon key="lang">{props.content.language}</ProjectIcon>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex w-full items-center justify-between md:w-2/5 md:flex-col md:gap-2">
          <span className="">Tech Stack: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.content.techStack.map((elt) => (
              <ProjectIcon key={elt}>{elt}</ProjectIcon>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className="flex w-full justify-between gap-2 md:w-2/5 md:flex-col">
          <span className="self-center">Platform: </span>
          <div className="flex flex-row flex-wrap justify-end gap-1 text-xs md:justify-center">
            {props.content.platform.map((elt) => (
              <ProjectIcon key={elt}>{elt}</ProjectIcon>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center pt-1 transition-all duration-300 hover:scale-110 md:w-1/5">
          <a
            href={props.content.github}
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
