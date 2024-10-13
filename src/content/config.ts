import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    posted: z.date(),
  }),
});

export const collections = {
  posts: postsCollection,
};
