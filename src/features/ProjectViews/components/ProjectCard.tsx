import type { MarkdownInstance } from 'astro';

import { BlogCardMin } from '@/features/BlogViews/components/BlogCardMin';
import type { IFrontMatterPost } from '@/types/IFrontMatterPost';
import type { IFrontMatterProject } from '@/types/IFrontMatterProject';
import { formatDate, generateSlug } from '@/utils/helpers';

import { ProjectIcon } from './ProjectIcon';
import { ProjectTag } from './ProjectTag';

type IProjectCardProps = {
  instance: MarkdownInstance<IFrontMatterProject>;
  latestPost: MarkdownInstance<IFrontMatterPost>;
};

const ProjectCard = (props: IProjectCardProps) => (
  <div className="group flex h-full flex-col self-start overflow-visible transition-all delay-500 duration-500 perspective-1000 hover:scale-105">
    <div id="card-inner" className="grid h-full transform-style-3d">
      <div
        id="card-front"
        className="col-start-1 row-start-1 flex size-full flex-col overflow-hidden rounded-md bg-cod-900 transition-transform duration-700 transform-style-3d backface-hidden group-hover:-rotate-y-180"
      >
        <div className="p-2">
          <img
            className="aspect-1 size-full rounded-lg bg-cod-800 object-cover object-center"
            src={props.instance.frontmatter.imgSrc}
            alt={props.instance.frontmatter.imgAlt}
            loading="lazy"
          />
        </div>

        <div className="flex h-full flex-col gap-3 p-2 text-center">
          {/* General Details */}
          <div className="flex h-full flex-col gap-1">
            {/* Project Name */}
            <div>
              <h2 className="text-3xl font-semibold">
                {props.instance.frontmatter.projectName}
              </h2>
            </div>

            {/* Start Date */}
            <div className="text-sm text-cod-400">
              <span className="align-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline size-4 align-middle"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {formatDate(props.instance.frontmatter.startDate)}
              </span>
            </div>

            {/* Description */}
            <div className="text-base text-cod-100">
              {props.instance.frontmatter.description}
            </div>

            {/* Status */}
            <div className="mt-auto pt-2 text-base text-cod-100">
              <ProjectTag key="status">
                {props.instance.frontmatter.status}
              </ProjectTag>
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-back"
        className="col-start-1 row-start-1 flex size-full flex-col items-center justify-between overflow-hidden rounded-md bg-cod-800 px-2 py-4 transition-transform duration-700 transform-style-3d rotate-y-180 backface-hidden group-hover:rotate-y-0"
      >
        <div className="flex w-full flex-col items-center text-center">
          <a href={props.instance.url}>
            <h2 className="text-2xl font-semibold transition-all duration-200 hover:text-primary hover:scale-110">
              Details
            </h2>
          </a>
          <hr className="mt-3 w-full" />
        </div>

        {/* Technical Details */}
        <div className="flex w-full flex-col items-center justify-center gap-3 p-2 text-center">
          {/* Langauge */}
          <div className="flex w-full justify-between">
            <span className="self-center">Language: </span>
            <div className="text-base">
              <ProjectIcon key="lang">
                {props.instance.frontmatter.language}
              </ProjectIcon>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex w-full justify-between">
            <span className="self-center">Tech Stack: </span>
            <div className="flex flex-row flex-wrap justify-end gap-1 text-base">
              {props.instance.frontmatter.techStack.map((elt) => (
                <ProjectIcon key={elt}>{elt}</ProjectIcon>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="flex w-full justify-between">
            <span className="self-center">Platform: </span>
            <div className="flex flex-row flex-wrap justify-end gap-1 text-base">
              {props.instance.frontmatter.platform.map((elt) => (
                <ProjectIcon key={elt}>{elt}</ProjectIcon>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-row pt-1 text-base transition-all duration-150 hover:scale-105">
          <a
            href={props.instance.frontmatter.github}
            className="flex flex-row items-center gap-1 rounded-md px-1 py-0.5 outline outline-1"
          >
            <img
              className="size-5"
              src="/images/site/dark-github.png"
              alt="GitHub Logo"
            />
            <span className="font-mono">{'<src/>'}</span>
          </a>
        </div>

        {/* Blog Posts */}
        <div className="mb-2 flex w-full flex-col items-center justify-between gap-3 text-center">
          <div className="flex text-sm">
            <span>Most Recent Blog Post:</span>
          </div>
          <div className="flex w-full flex-col">
            {props.latestPost ? (
              <BlogCardMin instance={props.latestPost} includeImage={false} />
            ) : (
              <div className="w-full rounded-lg bg-cod-900 py-10 transition-all duration-700 hover:scale-105">
                <span className="text-xl font-bold"> No Posts Yet! </span>
              </div>
            )}
          </div>
          <div className="flex text-sm">
            {props.latestPost ? (
              <div className="flex w-full justify-between gap-2">
                <a
                  href={`/blog/projects/${generateSlug(props.instance.frontmatter.series)}/`}
                  className="transition-all duration-150 hover:text-primary hover:scale-110"
                >
                  View All Posts
                </a>
                <span>|</span>
                <a
                  href={`/projects/${generateSlug(props.instance.frontmatter.series)}/`}
                  className="transition-all duration-150 hover:text-primary hover:scale-110"
                >
                  View Project
                </a>
              </div>
            ) : (
              <a
                href={`/projects/${generateSlug(props.instance.frontmatter.series)}/`}
                className="transition-all duration-150 hover:text-primary hover:scale-110"
              >
                View Project Page
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { ProjectCard };
