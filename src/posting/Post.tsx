import type { CollectionEntry } from "astro:content";
import { useRef, type ReactNode } from "react";

export function PostView({
  post,
  children,
}: {
  post: CollectionEntry<"posts">;
  children: ReactNode;
}) {
  return (
    /* https://microformats.org/wiki/h-entry */
    <article className="post h-entry">
      <header>
        {/* https://microformats.org/wiki/h-card */}
        <div className="author p-author h-card">
          <img src="/bark.png" className="u-photo" />
          <span className="p-name">@bark</span>
        </div>

        <div className="meta">
          <a href={`/post/${post.slug}`} className="u-url">
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
                <a href={`/posts/tagged/${tag}`}>#{tag}</a>
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

export function PostEdit() {
  const content = useRef<HTMLTextAreaElement | null>(null);

  const post = () => {
    if (!content.current) return;

    console.log(`post: ${content.current.value}`);
  };

  return (
    <article className="thread">
      <article className="post">
        <header>
          <div className="author">
            <img src="/bark.png" />
            <span>@bark</span>
          </div>
        </header>

        <main className="editor">
          <textarea
            ref={content}
            placeholder="you won't post, you're way scared"
          />
        </main>

        <footer className="editorFooter">
          <button type="button" onClick={post}>
            post!
          </button>
        </footer>
      </article>
    </article>
  );
}
