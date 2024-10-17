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
    <article className="post h-entry">
      <header>
        <div className="author h-card">
          <img src="/bark.png" className="u-photo" />
          <span className="p-name">@bark</span>
        </div>

        <div className="meta">
          <a href="#">
            <time
              title={`posted on ${post.data.posted.toLocaleString()}`}
              dateTime={post.data.posted.toISOString()}
              className="timestamp dt-published"
            >
              {post.data.posted.toISOString().slice(0, 10)}
            </time>
          </a>

          <ul className="tags">
            {(post.data.tags || []).map((tag) => (
              <li key={tag} className="p-category">
                <a href="#">#{tag}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="prose e-content">{children}</main>

      {/* <footer></footer> */}
    </article>
  );
}
