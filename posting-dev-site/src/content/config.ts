import { defineCollection } from "astro:content";
import { postsSchema } from "posting";

const postsCollection = defineCollection({
  type: "content",
  schema: postsSchema,
});

export const collections = {
  posts: postsCollection,
};
