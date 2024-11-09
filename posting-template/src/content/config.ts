import { defineCollection } from "astro:content";
import { postsSchema } from "posting";

const posts = defineCollection({
  type: "content",
  schema: postsSchema,
});

export const collections = {
  posts,
};
