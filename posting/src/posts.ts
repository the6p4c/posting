import { getCollection, getEntry, type CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

export async function getPost(slug: string): Promise<Post | undefined> {
  return getEntry("posts", slug);
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts");

  const newestFirst = (a: Post, b: Post) =>
    b.data.posted.valueOf() - a.data.posted.valueOf();
  posts.sort(newestFirst);

  return posts;
}

export async function getPostsWithTag(tag: string): Promise<Post[]> {
  return getCollection(
    "posts",
    (post) => post.data.tags && post.data.tags.includes(tag)
  );
}

export async function getTags(): Promise<string[]> {
  const posts = await getPosts();
  const tags = posts.flatMap((post) => post.data.tags || []);

  return Array.from(new Set(tags));
}
