// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { starlightBasePath } from "starlight-base-path";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WebDav tutorial',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vanvuongngo/webdav-tutorial' },
				{ icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/in/vanvuong-ngo/' },
			],
			sidebar: [
				{
					label: 'Leitfaden',
					translations: {
						'en': 'Guides'
					},
					items: [
						{ slug: 'guides/get-started' },
						{ slug: 'guides/secure' },
						{ slug: 'guides/backup-restore' },
					],
				},
				{
					label: 'Installation',
					translations: {
						'en': 'Installation'
					},
					items: [{ autogenerate: { directory: 'installation' } }],
				},				{
					label: 'Clients einrichten',
					translations: {
						'en': 'Setup clients'
					},
					items: [{ autogenerate: { directory: 'client-setup' } }],
				},
				{
					label: 'Referenz',
					translations: {
						'en': 'Reference'
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			defaultLocale: 'root',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
					lang: 'en',
				},
				'root': {
					label: 'Deutsch',
					lang: 'de',
				},
			},
			plugins: [starlightBasePath()],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
	base: '/webdav-tutorial',
});
