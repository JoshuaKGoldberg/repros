# Repro: Multiple Astro Starlight Blog Instances

Reproduction of attempting to run two instances of [starlight-blog](https://starlight-blog-docs.vercel.app/getting-started) in the same site, under different prefixes:

1. The default `'blog'`
2. A customized `'guides'`

...while also using [starlight-sidebar-topics](https://starlight-sidebar-topics.netlify.app/docs/getting-started).

```shell
pnpm i
pnpm dev
```

```plaintext
15:15:31 [WARN] [starlight-blog-plugin] It looks like you already have a `MarkdownContent` component override in your Starlight configuration.
15:15:31 [WARN] [starlight-blog-plugin] To use `starlight-blog`, either remove your override or update it to render the content from `starlight-blog/components/MarkdownContent.astro`.
15:15:31 [WARN] [starlight-blog-plugin] It looks like you already have a `ThemeSelect` component override in your Starlight configuration.
15:15:31 [WARN] [starlight-blog-plugin] To use `starlight-blog`, either remove your override or update it to render the content from `starlight-blog/components/ThemeSelect.astro`.
```

`http://localhost:4321/blog` and `http://localhost:4321/blog/my-first-blog-post` can be visited and work as expected:

- The sidebar is the blog sidebar
- A 'Blog' link is always shown in the header

`http://localhost:4321/guides` and `http://localhost:4321/guides/my-first-guide` can be visited, but:

- The sidebar shows entries from the topics sidebar, with '0' as the top-level heading
- No link is added to the header
