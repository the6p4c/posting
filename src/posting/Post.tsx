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
    <article className="post">
      <header>
        <Author imageUrl="/bark.png" name="bark" />
        <div className="meta">
          <Timestamp date={post.data.posted} />
          <Tags tags={post.data.tags || []} />
        </div>
      </header>
      <main>{children}</main>
      {/* <footer></footer> */}
    </article>
  );
}

function Author({ imageUrl, name }: { imageUrl: string; name: string }) {
  // https://microformats.org/wiki/h-card
  return (
    <div className="author h-card">
      <img src={imageUrl} />
      <span>{name}</span>
    </div>
  );
}

function Timestamp({ date }: { date: Date }) {
  return (
    <time
      title={`posted on ${date.toLocaleString()}`}
      dateTime={date.toISOString()}
      className="timestamp"
    >
      {date.toISOString().slice(0, 10)}
    </time>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>#{tag}</li>
      ))}
    </ul>
  );
}
