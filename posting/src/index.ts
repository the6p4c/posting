import { z } from "astro:content";

export { getPosts, getPost, getPostsWithTag, getTags } from "./posts";

export const postsSchema = z.object({
  posted: z.date(),
  tags: z.array(z.string()).optional(),
});
