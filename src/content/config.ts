import { defineCollection, z } from 'astro:content';

// Blog Posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().transform((date) => date ?? new Date()),
    updatedDate: z.date().optional(),
    imgSrc: z.string(),
    imgAlt: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    series: z.string().optional(),
    isProject: z.boolean().optional(),
  }),
});

// Projects
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projectName: z.string(),
    description: z.string(),
    startDate: z.date(),
    status: z.string(),
    github: z.string(),
    language: z.string(),
    techStack: z.array(z.string()),
    platform: z.array(z.string()),
    series: z.string(),
    imgSrc: z.string(),
    imgAlt: z.string(),
  }),
});

// Reviews
const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    reviewDate: z.date(),
    releaseDate: z.date(),
    rating: z.number(),
    review: z.string(),
    ifYouLiked: z.string().optional(),
    link: z.string(),
    typeOrGenre: z.array(z.string()),
    artistOrAuthor: z
      .string()
      .optional() /* Specific to Book & Album Reviews */,
    favoriteSongs: z
      .array(z.string())
      .optional() /* Specific to Album Reviews */,
    imgSrc: z.string(),
    imgAlt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  reviews: reviewsCollection,
};
