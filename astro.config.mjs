// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ngo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/vanvuongngo/webdav-tutorial' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ slug: 'guides/get-started' },
						{ slug: 'guides/install-on-alpine' },
						{ slug: 'guides/install-on-debian' },
						{ slug: 'guides/install-on-fedora' },
						{ slug: 'guides/secure' },
					],
				},
				{
					label: 'Smartphone setup',
					items: [{ autogenerate: { directory: 'smartphone-setup' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			// Set English as the default language for this site.
			defaultLocale: 'de',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				'de': {
					label: 'Deutsch',
				},
			},
		}),
	],
	site: 'https://vanvuongngo.github.io',
	base: '/webdav-tutorial',
});
