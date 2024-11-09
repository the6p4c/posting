import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import rss, { type RSSFeedItem } from "@astrojs/rss";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");

  return rss({
    title: "bark",
    description: "bark's corner, coming soon",
    site: "https://me.doggirl.gay",
    items: posts.map(
      (post) =>
        ({
          link: `/post/${post.slug}`,
          pubDate: post.data.posted,
          content: post.body,
        } satisfies RSSFeedItem)
    ),
  });
}
