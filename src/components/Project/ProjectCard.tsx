import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { IFrontmatterPost } from '@/types/IFrontMatterPost';
import type { IFrontmatterProject } from '@/types/IFrontMatterProject';
import { generateSlug } from '@/utils/helpers';

import { BlogCardMin } from '../BlogCard/BlogCardMin';
import { ProjectTag } from './ProjectTag';

type IProjectCardProps = {
  instance: MarkdownInstance<IFrontmatterProject>;
  latestPost: MarkdownInstance<IFrontmatterPost>;
};

const ProjectCard = (props: IProjectCardProps) => (
  <div className="group flex h-full flex-col self-start overflow-visible transition-all delay-500 duration-500 perspective-1000 hover:scale-105">
    <div id="card-inner" className="grid h-full transform-style-3d">
      <div
        id="card-front"
        className="col-start-1 row-start-1 h-full w-full overflow-hidden rounded-md bg-slate-600 transition-transform duration-700 transform-style-3d backface-hidden group-hover:-rotate-y-180"
      >
        <div className="p-2">
          <a href={props.instance.url}>
            <img
              className="aspect-1 h-full w-full rounded-lg object-cover object-center"
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
              <h2 className="text-3xl font-semibold">
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
            <div className="pt-2 text-base">
              <ProjectTag>{props.instance.frontmatter.status}</ProjectTag>
            </div>
          </div>
        </div>
      </div>

      <div
        id="card-back"
        className="col-start-1 row-start-1 h-full w-full overflow-hidden rounded-md bg-slate-600 transition-transform duration-700 transform-style-3d rotate-y-180 backface-hidden group-hover:rotate-y-0"
      >
        <div className=" m-2 pb-6 text-center">
          <h2 className="h-1/4 border-b-2 text-2xl font-semibold hover:text-purple-400">
            Details
          </h2>
        </div>
        {/* Technical Details */}
        <div className="flex h-3/4 w-full flex-col items-center justify-center gap-4 p-2 text-center">
          {/* Langauge */}
          <div className="flex w-full justify-between">
            <span className="self-center">Language: </span>
            <ProjectTag>{props.instance.frontmatter.language}</ProjectTag>
          </div>

          {/* Tech Stack */}
          <div className="flex w-full justify-between">
            <span className="self-center">Tech Stack: </span>
            <div className="flex flex-row flex-wrap justify-end gap-1 text-base">
              {props.instance.frontmatter.techStack.map((elt) => (
                <ProjectTag>{elt}</ProjectTag>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="flex w-full justify-between">
            <span className="self-center">Platform: </span>
            <div className="flex flex-row flex-wrap justify-end gap-1 text-base">
              {props.instance.frontmatter.platform.map((elt) => (
                <ProjectTag>{elt}</ProjectTag>
              ))}
            </div>
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
          <div className="flex flex-col items-center justify-between gap-2 text-center">
            <div className="flex text-sm">
              <span>Most Recent Blog Post:</span>
            </div>
            <div className="flex flex-col">
              {props.latestPost ? (
                <BlogCardMin instance={props.latestPost} includeImage={false} />
              ) : (
                <span className=""> No Post! </span>
              )}
            </div>
            <div className="flex text-sm">
              {props.latestPost ? (
                <a
                  href={`/blog/projects/${generateSlug(props.instance.frontmatter.series)}/`}
                >
                  See All Posts →
                </a>
              ) : (
                <a href="/blog/">See Other Posts →</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { ProjectCard };