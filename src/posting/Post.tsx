import type { CollectionEntry } from "astro:content";
import type { ReactNode } from "react";

export function PostView({
  post,
  children,
}: {
  post: CollectionEntry<"posts">;
  children: ReactNode;
}) {
  return (
    <article>
      <header>
        <div>{post.data.posted.toLocaleString()}</div>
        {post.data.tags && (
          <div>tagged {post.data.tags.map((tag) => `#${tag}`).join(", ")}</div>
        )}
      </header>
      <main>{children}</main>
      <footer></footer>
    </article>
  );
}
