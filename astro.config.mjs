// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			plugins: [
				starlightBlog(),
				starlightSidebarTopics([
					{
						id: 'guides',
						icon: 'open-book',
						label: 'Guides',
						link: '/guides/',
						items: [
							{ label: 'Example Guide', slug: 'guides/example' },
						],
					},
					{
						icon: 'information',
						items: ['reference/example'],
						label: 'Reference',
						link: '/reference/',
					},
				]),
			],
		}),
	],
});
