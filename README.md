# posting

# getting started
> [!WARNING]
> **big scary note:** none of the below is real yet. it's just the result of readme-driven development, since that's fun.

## 1. 🪐 create a new astro site
if you don't have an existing [astro](https://astro.build)-based static site, you can:

- **use the [posting template site]() and skip this setup**, or
- create a new site following astro's [getting started](https://docs.astro.build/getting-started/) instructions.

if you already have an astro-based site and just want to integrate `posting`, you can move onto the next step.

## 2. 📦 add `posting` as a dependency
you're entitled to your package manager proclivities. add `posting` as a dependency to your project in whatever way makes you happy.

```shell
# good
$ bun add git://github.com/the6p4c/posting.git

# bad
$ npm add git://github.com/the6p4c/posting.git

# ugly (don't) (or do, i'm not a cop)
$ jq '.dependencies.posting = "git://github.com/the6p4c/posting.git"' package.json > package.json.tmp && mv package.json{.tmp,}

$ ...
```

## 3. 📜 create your `posts` content collection
every post you make becomes an entry within the `posts` [content collection](https://docs.astro.build/guides/content-collections/). entries are markdown files with frontmatter stored in the `src/content/posts/` directory.

the `posts` content collection needs to be defined and registered with astro.

```typescript
/* src/content/config.ts */
import { defineCollection } from 'astro:content';
import { postsSchema } from 'posting';

// 1. define the `posts` collection
const posts = defineCollection({
  type: "content",
  schema: postsSchema,
});

// ...

export const collections = {
  // 2. register the `posts` collection
  posts,
  // ...
};
```

to make testing things easier, you should create a basic post inside the content collection.

```
/* src/content/posts/basic.md */
---
posted: 2024-11-05T11:23:08+00:00
---

make a basic post. do it.
```

## 4. 📕 create your feeds
the `Feed` component accepts a list of posts and renders them. you can use it to create a page that shows every post you've ever made.

```astro
/* src/pages/index.astro */
import Feed from "posting/components/Feed.astro";

import MySiteLayout from "../layouts/MySiteLayout.astro";

const posts = ...;
---

<MySiteLayout>
  <Feed posts={posts} />
</MySiteLayout>
```

you can also filter the list of posts to create tag feeds, user feeds, and any other feed you feel like.

```astro
/* src/pages/index.astro */
import Feed from "posting/components/Feed.astro";

import MySiteLayout from "../layouts/MySiteLayout.astro";

const posts = ...;
// TODO: filter posts :)
---

<MySiteLayout>
  <Feed posts={posts} />
</MySiteLayout>
```

although the `Feed` component can render several posts, it's also useful for rendering a single post.

```astro
/* src/pages/post/[slug].astro */
import Feed from "posting/components/Feed";

import MySiteLayout from "../layouts/MySiteLayout.astro";

export async function getStaticPaths() {
  // TODO: get static paths :)
}

const { slug } = Astro.props;
const post = ...;
---

<MySiteLayout>
  <Feed posts={[post]} />
</MySiteLayout>
```

## 5. 🎨 customise your site
- [add custom css]()
- [replace the default `Post` component]()
- [extend `postSchema`]()
- [eject `posting`]()
