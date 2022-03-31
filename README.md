A free and open-source starter by MakerKit.

# Blog Starter Template with Next.js, MDX and Tailwind CSS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This blog starter is the perfect foundation for writing your next blog, portfolio or online publication using Next.js and Tailwind CSS.

## Features

✅ Fully responsive Blog/Portfolio Site
📄 Write your articles with all the power of MDX
🧑‍🤝‍🧑 Ability to add multiple Authors
⚡ Core Web Vitals = 100
🚀 Search Engine Optimized (SEO) out-of-the-box
📂 Sitemap and RSS generated automatically
✨ Written with strict Typescript, validated with EsLint, formatted with Prettier

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

Open the configuration file at `./configuration.ts`. It will have the following content:

```tsx
const configuration = {
  site: {
    name: '',
    description: '',
    themeColor: '',
    siteUrl: '',
    siteName: '',
    twitterHandle: '',
    githubHandle: '',
    language: 'en',
  },
  blog: {
    maxReadMorePosts: 6,
  },
  production: process.env.NODE_ENV === 'production',
};
```

Update it with your own data, or leave as is to begin with.

## Add Articles, Collections and Authors

Before creating a blog post, we define which collection it belongs to and the author of the post.

To define a collection, create a JSON file at `_collctions/`:

```json
{
  "name": "Tutorials",
  "emoji": "🖥️"
}
```

Alternatively, you can choose to assign a picture to each collection (or neither):

```json
{
  "name": "Tutorials",
  "picture": "/assets/images/tutorials.png"
}
```

Next, we need to add the author of the article. Add a JSON file at `_authors`:

```json
{
  "name": "MakerKit",
  "picture": "/assets/images/makerkit.png",
  "url": "https://twitter.com/makerkit_dev"
}
```

We can now create a blog post. Add an MDX file at `_posts`:

```yaml
---
title: 'Dextera Sibi Orbes'
collection: '_collections/lorem-ipsum.json'
author: '_authors/makerkit.json'
date: 2022-03-30
live: true
image: ''
description: "Lorem markdownum ictu; leti quae, paenituisse venere. Liquet praemia omne di
amarunt dicta."
---
```

As you can see, the properties `collection` and `author` are references to the path of each.s

## Building this from scratch

For mor information about building this codebase from scratch, take a look at the article [Create an MDX-powered Blog with Next.js](https://makerkit.dev/blog/tutorials/create-a-blog-mdx-nextjs).

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
