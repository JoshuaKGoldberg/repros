# Repro: Astro Starlight Blog and Sidebar Topics

Reproduction of [starlight-blog](https://starlight-blog-docs.vercel.app/getting-started) and [starlight-sidebar-topics](https://starlight-sidebar-topics.netlify.app/docs/getting-started) conflicting.

```shell
pnpm i
pnpm dev
```

```plaintext
Error: Failed to find the topic for the blog page.

Either include this page in the sidebar configuration of the desired topic using the items property or to associate an unlisted page with a topic, use the topic frontmatter property and set it to the desired topic ID.
```
