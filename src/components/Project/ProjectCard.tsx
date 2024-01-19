import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatterPost } from '@/types/IFrontMatterPost';
import type { IFrontmatterProject } from '@/types/IFrontMatterProject';

import { BlogCardMin } from '../BlogCard/BlogCardMin';

type IProjectCardProps = {
  instance: MarkdownInstance<IFrontmatterProject>;
  latestPost: MarkdownInstance<IFrontmatterPost>;
};

const ProjectCard = (props: IProjectCardProps) => (
  <div className="group flex flex-col self-start transition-all delay-500 duration-500 perspective-1000 hover:scale-105">
    <div
      id="card-inner"
      className="grid transition-transform duration-700 transform-style-3d rotate-y-0 backface-hidden group-hover:rotate-y-180"
    >
      <div
        id="card-front"
        className="col-start-1 row-start-1 h-full w-full overflow-hidden rounded-md bg-slate-600 backface-hidden"
      >
        <div className="p-2">
          <a href={props.instance.url}>
            <img
              className="aspect-1 h-full w-full rounded-lg object-cover object-center hover:opacity-50"
              src={props.instance.frontmatter.imgSrc}
              alt={props.instance.frontmatter.imgAlt}
              loading="lazy"
            />
          </a>
        </div>

        <div className="flex flex-col gap-3 p-2 text-center">
          {/* General Details */}
          <div className="flex flex-col gap-1">
            {/* Project Name */}
            <div>
              <h2 className="text-3xl font-semibold hover:text-purple-400">
                <a className="hover:translate-y-1" href={props.instance.url}>
                  {props.instance.frontmatter.projectName}
                </a>
              </h2>
            </div>

            {/* Start Date */}
            <div className="text-sm text-gray-400">
              <span className="align-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 inline h-4 w-4 align-middle"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                {format(
                  new Date(props.instance.frontmatter.startDate),
                  'LLL d, yyyy',
                )}
              </span>
            </div>

            {/* Description */}
            <div className="text-base">
              {props.instance.frontmatter.description}
            </div>

            {/* Status */}
            <div className="text-base">
              Status: {props.instance.frontmatter.status}
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-back"
        className="col-start-1 row-start-1 h-full w-full overflow-hidden rounded-md bg-slate-600 rotate-y-180 backface-hidden"
      >
        {/* Technical Details */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-2 text-center">
          {/* Langauge */}
          <div className="text-base">{props.instance.frontmatter.language}</div>

          {/* Tech Stack */}
          <div className="flex flex-row flex-wrap justify-center gap-1 text-base">
            {props.instance.frontmatter.techStack.map((elt) => (
              <span className="rounded-md bg-slate-700 px-1">{elt}</span>
            ))}
          </div>

          {/* Platform */}
          <div className="flex flex-row flex-wrap justify-center gap-1 text-base">
            {props.instance.frontmatter.platform.map((elt) => (
              <span className="rounded-md bg-slate-700 px-1">{elt}</span>
            ))}
          </div>

          {/* GitHub */}
          <div className="flex flex-row pt-1 text-base">
            <a
              href={props.instance.frontmatter.github}
              className="flex flex-row items-center gap-1 rounded-md px-1 py-0.5 outline outline-1"
            >
              <img className="h-5" src="/images/site/github.png" />
              <span className="font-mono">{'<src/>'}</span>
            </a>
          </div>

          {/* Blog Posts */}
          <div className="flex flex-col items-center justify-between text-center">
            <div className="flex text-sm">
              <span>Most Recent Blog Post:</span>
            </div>
            <div className="flex">
              {props.latestPost ? (
                <BlogCardMin instance={props.latestPost} includeImage={false} />
              ) : (
                <span> No Post! </span>
              )}
            </div>
            <div className="flex text-sm">
              <span>See All Posts →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { ProjectCard };
