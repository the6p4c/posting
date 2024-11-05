# posting
```shell
$ bun dev  # launch development server
```

# getting started
**big scary note:** none of the below is real yet. it's just the result of readme-driven development, since that's fun.

## 1. 🪐 create a new astro site

  if you don't have an existing [astro](https://astro.build)-based static site, you can:
  
  - **use the [posting template site]() and skip this setup**, or
  - create a new site following astro's [getting started](https://docs.astro.build/getting-started/) instructions.

  if you already have an astro-based site and just want to integrate `posting`, you can move onto the next step.

## 2. 📦 add `posting` as a dependency

  you're entitled to your package manager proclivities. add `posting` as a dependency to your project in whatever way makes you happy.

  ```shell
  $ npm add git://github.com/the6p4c/posting.git
  $ bun add git://github.com/the6p4c/posting.git
  $ ...
  ```

## 3. 📜 create your `posts` content collection

  every post you make becomes an entry within the `posts` [content collection](https://docs.astro.build/guides/content-collections/), which are markdown files stored in the `src/content/posts/` directory.

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
    ...,
    // 2. register the `posts` collection
    posts,
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

  `posting` provides a `Feed` component which accepts a list of posts and renders them. you can use it to create a page which lists every post you've ever made.

  ```astro
  /* src/pages/index.astro */
  import RootLayout from './RootLayout.astro';

  const posts = ...;
  ---

  <RootLayout>
    <Feed posts={posts} />
  </RootLayout>
  ```

  although the `Feed` component can render several posts, it's also useful for rendering a single post.

  ```astro
  /* src/pages/post/[slug].astro */
  import RootLayout from './RootLayout.astro';

  export async function getStaticPaths() {
    // ...
  }

  const { slug } = Astro.props;
  const post = ...;
  ---

  <RootLayout>
    <Feed posts={[post]} />
  </RootLayout>
  ```

## 5. 🎨 customise your site
- [add custom css]()
- [replace the default `Post` component]()
- [extend `postSchema`]()
- [eject `posting`]()
